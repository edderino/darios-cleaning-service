import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Drag-to-compare before/after slider.
 *
 * Designed for real paired photos that haven't been shot yet: pass `before`
 * and `after` image URLs to use them. With no images it renders dark, high-
 * contrast placeholder panels so the interaction reads correctly in the demo.
 */
export default function BeforeAfterSlider({ before, after, start = 50 }) {
  const [pos, setPos] = useState(start)
  const [active, setActive] = useState(false)
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  // Measure container width so the clipped "before" image never squishes.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width))
    ro.observe(el)
    setWidth(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const setFromClientX = useCallback((clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)))
  }, [])

  useEffect(() => {
    if (!active) return
    const move = (e) => setFromClientX(e.touches ? e.touches[0].clientX : e.clientX)
    const up = () => setActive(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [active, setFromClientX])

  const Panel = ({ src, alt, position = 'object-center', className = '' }) =>
    src ? (
      <img
        src={src}
        alt={alt}
        draggable="false"
        className={`h-full w-full object-cover ${position} ${className}`}
      />
    ) : (
      <div className="photo-zone h-full w-full" />
    )

  const badge =
    'rounded-full bg-bg/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-fg backdrop-blur-sm'

  return (
    <figure
      ref={ref}
      onMouseDown={(e) => {
        setActive(true)
        setFromClientX(e.clientX)
      }}
      onTouchStart={(e) => {
        setActive(true)
        setFromClientX(e.touches[0].clientX)
      }}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-xl2 border border-line bg-bg"
    >
      {/* AFTER — base layer */}
      <div className="absolute inset-0">
        <Panel src={after} alt="Carpet after professional cleaning, stains removed" position="object-bottom" />
        <span className={`absolute right-4 top-4 ${badge}`}>After</span>
      </div>

      {/* BEFORE — clipped overlay */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="h-full" style={{ width: width || '100%' }}>
          {/* Before tilted 2° clockwise; slight scale so corners stay covered. */}
          <Panel src={before} alt="Stained carpet before professional cleaning" className="rotate-2 scale-105" />
        </div>
        <span className={`absolute left-4 top-4 ${badge}`}>Before</span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-10 w-px bg-fg/70" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-accent text-bg shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </figure>
  )
}
