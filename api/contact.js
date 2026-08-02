// Vercel serverless function — receives contact-form submissions and sends
// them on via Mailgun. Mailgun credentials never reach the client; only this
// function talks to Mailgun. Frontend contract (kept stable regardless of
// provider): POST { clientId, name, phone, suburb, message, pageUrl } ->
// { success: true } | { success: false, error: string }.

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5
// In-memory only — resets per cold start and isn't shared across serverless
// instances, so this is a best-effort throttle, not a hard guarantee. For a
// real guarantee, front this route with Vercel Firewall rate limiting.
const hits = new Map()

function rateLimited(ip) {
  const now = Date.now()
  const record = hits.get(ip)
  if (!record || now - record.start > RATE_LIMIT_WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 })
    return false
  }
  record.count += 1
  return record.count > RATE_LIMIT_MAX
}

function clean(value, maxLength) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Try again shortly.' })
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  const { clientId, name, phone, suburb, message, pageUrl, company } = body

  // Honeypot: real visitors never fill this in. Silently succeed so bots
  // don't learn anything from the response.
  if (company) {
    return res.status(200).json({ success: true })
  }

  if (clientId !== 'darios-cleaning') {
    return res.status(400).json({ success: false, error: 'Unknown client' })
  }

  const cleanName = clean(name, 100)
  const cleanPhone = clean(phone, 30)
  const cleanSuburb = clean(suburb, 100)
  const cleanMessage = clean(message, 2000)
  const cleanPageUrl = clean(pageUrl, 300)

  if (!cleanName || !cleanPhone || !cleanMessage) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_TO, MAILGUN_FROM } = process.env
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_TO || !MAILGUN_FROM) {
    console.error('Mailgun env vars are not configured')
    return res.status(500).json({ success: false, error: 'Contact form is not configured' })
  }

  const subject = `Quote request: ${cleanSuburb || 'Canberra'}`
  const text = [
    `Name: ${cleanName}`,
    `Phone: ${cleanPhone}`,
    `Suburb: ${cleanSuburb}`,
    `Page: ${cleanPageUrl}`,
    '',
    cleanMessage,
  ].join('\n')

  const form = new URLSearchParams({
    from: MAILGUN_FROM,
    to: MAILGUN_TO,
    subject,
    text,
  })

  try {
    const mgResponse = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form,
    })

    if (!mgResponse.ok) {
      const detail = await mgResponse.text()
      console.error('Mailgun send failed', mgResponse.status, detail)
      return res.status(502).json({ success: false, error: 'Could not send message' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mailgun request threw', err)
    return res.status(502).json({ success: false, error: 'Could not send message' })
  }
}
