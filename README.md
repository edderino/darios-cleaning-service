# Dario's Cleaning Service

Modern, restrained marketing site. **React + Vite + Tailwind + Framer Motion.**

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Design
- **Charcoal** (`#0D0D0D` bg) + **single orange accent** (`#E8703A`) + neutral off-white text.
- **Inter / Inter Tight**, tight tracking on headlines.
- Subtle motion only (fade/slide on scroll, consistent hover lift + brightness).
- Consistent section eyebrows via `components/Eyebrow.jsx`.
- Sections: Header · Hero (full-bleed overlay) · Services · Work (slider + gallery) ·
  Why Dario's · Reviews · Contact · Footer.
- Content lives in `src/data.js`.
- Real logo (`src/assets/brand/logo.png`) in the header and footer; real branded
  van photo (`src/assets/photos/van-branded.jpg`) on the Commercial page hero
  (Residential uses the equipment shot, `van.webp`).

## Two people, two jobs
The business is run by two people, and the site is explicit about who does
what everywhere a customer might ask — service rows, the Commercial contact
section, the homepage Contact section, and the footer:

- **Dario** — carpet & upholstery, pressure cleaning, windows, tile & grout,
  water damage.
- **Melissa** — general cleaning, domestic and commercial.

Both are defined in `src/data.js` → `TEAM`. Update names, numbers or roles
there and every section that references `TEAM.dario` / `TEAM.melissa` picks
it up automatically.

## Contact form
The form (`Contact.jsx`) POSTs JSON to `VITE_CONTACT_API_URL` (default
`/api/contact`, a Vercel serverless function at `api/contact.js`). The
function sends the enquiry via **Mailgun**, server-side only — Mailgun
credentials never reach the browser.

**Request body** (stable regardless of email provider):
```json
{ "clientId": "darios-cleaning", "name": "", "phone": "", "suburb": "", "message": "", "pageUrl": "" }
```

**Response:**
```json
{ "success": true }
```
or
```json
{ "success": false, "error": "..." }
```

### Setup
1. Create a Mailgun account and a sending domain (or use their sandbox domain
   for testing).
2. In the Vercel project → Settings → Environment Variables, set:
   - `MAILGUN_API_KEY`
   - `MAILGUN_DOMAIN`
   - `MAILGUN_TO` — the inbox that should receive quote requests
   - `MAILGUN_FROM` — e.g. `"Dario's Cleaning Service <noreply@yourdomain>"`
3. Redeploy. See `.env.example` for the full list.

### Moving to a shared, multi-client contact API later
Because the frontend only knows about `VITE_CONTACT_API_URL` and a stable
JSON contract — not Mailgun specifically — switching every client site over
to one central contact API later is a one-line change per site: set
`VITE_CONTACT_API_URL` to the shared endpoint's URL (e.g.
`https://contact.yourdomain.com/submit`) in that site's environment
variables. The shared API just needs to accept the same request shape,
route on `clientId`, and return the same `{ success, error }` response — no
changes needed in `Contact.jsx` itself.

## Replace before launch
- **Hero photo zone** (`Hero.jsx`) — one real full-bleed job/van shot.
- **Before/After slider** (`BeforeAfter.jsx`) — pass real paired photos:
  `<BeforeAfterSlider before="…" after="…" />`.
- **Gallery tiles** (`data.js` → `GALLERY`) — six real job photos behind the captions.

> Reviews are real, verified Google reviews (lightly trimmed for length) and ship as-is.
