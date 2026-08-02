import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BUSINESS, TEAM, mailto } from '../data'
import { Phone, Mail, Arrow } from './Icons'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

const field =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-faint outline-none transition focus:border-accent/60'

// Defaults to the local Vercel serverless function; override with
// VITE_CONTACT_API_URL to point at a shared, multi-client contact API later
// (see README) without touching this component.
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'
const CLIENT_ID = 'darios-cleaning'

const empty = { name: '', phone: '', suburb: '', detail: '', company: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const isValid =
    form.name.trim().length > 0 && form.phone.trim().length >= 6 && form.detail.trim().length > 0

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isValid || status === 'sending') return

    // Honeypot — real visitors never touch this field.
    if (form.company) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: CLIENT_ID,
          name: form.name.trim(),
          phone: form.phone.trim(),
          suburb: form.suburb.trim(),
          message: form.detail.trim(),
          pageUrl: window.location.href,
        }),
      })
      const data = await res.json().catch(() => ({ success: false }))
      if (!res.ok || !data.success) throw new Error(data.error || 'Send failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="wrap grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Request your quote.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Send a few details about the job and we&rsquo;ll be in touch.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm text-faint">{TEAM.dario.role}</p>
              <a href={`tel:${TEAM.dario.phoneRaw}`} className="group mt-1 flex items-center gap-3 text-fg">
                <Phone width={18} height={18} className="text-accent" />
                <span className="text-lg transition-colors group-hover:text-accent">
                  {TEAM.dario.name} · {TEAM.dario.phoneDisplay}
                </span>
              </a>
            </div>
            <div>
              <p className="text-sm text-faint">{TEAM.melissa.role}</p>
              <a href={`tel:${TEAM.melissa.phoneRaw}`} className="group mt-1 flex items-center gap-3 text-fg">
                <Phone width={18} height={18} className="text-accent" />
                <span className="text-lg transition-colors group-hover:text-accent">
                  {TEAM.melissa.name} · {TEAM.melissa.phoneDisplay}
                </span>
              </a>
            </div>
            <a href={mailto} className="group flex items-center gap-3 text-fg">
              <Mail width={18} height={18} className="text-accent" />
              <span className="text-lg transition-colors group-hover:text-accent">
                {BUSINESS.email}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-7">
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[18rem] flex-col items-start justify-center rounded-xl2 border border-line bg-surface p-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight">Thanks.</h3>
                <p className="mt-3 max-w-sm text-muted">
                  Your request is on its way. For anything urgent, call{' '}
                  {TEAM.dario.phoneDisplay}.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    minLength={2}
                    maxLength={100}
                    value={form.name}
                    onChange={set('name')}
                    className={field}
                    placeholder="Name"
                  />
                  <input
                    required
                    type="tel"
                    pattern="[0-9+()\-\s]{6,}"
                    minLength={6}
                    maxLength={30}
                    value={form.phone}
                    onChange={set('phone')}
                    className={field}
                    placeholder="Phone"
                  />
                </div>
                <input
                  maxLength={100}
                  value={form.suburb}
                  onChange={set('suburb')}
                  className={field}
                  placeholder="Suburb"
                />
                <textarea
                  required
                  rows={4}
                  maxLength={2000}
                  value={form.detail}
                  onChange={set('detail')}
                  className={`${field} resize-none`}
                  placeholder="What needs cleaning?"
                />
                {/* Honeypot — kept off-screen, not display:none, so bots that skip
                    hidden fields still fill it in. */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={set('company')}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <p className="text-sm text-accent">
                    Something went wrong sending that. Please call {TEAM.dario.phoneDisplay} instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!isValid || status === 'sending'}
                  className="btn-accent mt-1 w-full text-[15px] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:justify-self-start"
                >
                  {status === 'sending' ? 'Sending…' : 'Send request'}
                  <Arrow width={17} height={17} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
