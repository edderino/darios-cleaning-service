// The spine of the visual hierarchy: identical small orange section labels.
// Uppercase, letter-spaced, with a short dash before the text.
export default function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent ${className}`}
    >
      <span className="h-px w-5 bg-accent/70" />
      {children}
    </p>
  )
}
