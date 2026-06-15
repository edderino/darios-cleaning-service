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

## Replace before launch
- **Hero photo zone** (`Hero.jsx`) — one real full-bleed job/van shot.
- **Before/After slider** (`BeforeAfter.jsx`) — pass real paired photos:
  `<BeforeAfterSlider before="…" after="…" />`.
- **Gallery tiles** (`data.js` → `GALLERY`) — six real job photos behind the captions.
- **Contact form** (`Contact.jsx`) — composes an email to `dariogaz@outlook.com` (no backend).
  Wire to Formspree / Netlify Forms for real lead capture.

> Reviews are real, verified Google reviews (lightly trimmed for length) and ship as-is.
