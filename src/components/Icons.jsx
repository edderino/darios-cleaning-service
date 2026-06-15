const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l3 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const Arrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Star = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.9 5.9 6.6 1-4.8 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.5 9.4l6.6-1L12 2.5z" />
  </svg>
)
