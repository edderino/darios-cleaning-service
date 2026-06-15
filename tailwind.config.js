/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Charcoal system — near-black background, layered surfaces.
        bg: '#0D0D0D',
        surface: '#151515',
        elevated: '#1C1C1C',
        line: 'rgba(255,255,255,0.09)',
        // Neutral off-white (deliberately not warm — no cream).
        fg: '#F4F4F3',
        muted: '#9B9B98',
        faint: '#6E6E6B',
        // Single accent, used sparingly.
        accent: '#E8703A',
        'accent-hover': '#F0834E',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        tight: ['"Inter Tight"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightish: '-0.02em',
      },
      maxWidth: {
        content: '1160px',
      },
      borderRadius: {
        xl2: '14px',
      },
    },
  },
  plugins: [],
}
