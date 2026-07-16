import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { Arrow } from './Icons'

// Numbered editorial row: big muted index, large service name, one strong
// sentence, an optional secondary "who it's for" line, and full specifics
// tucked behind "View details" instead of a pill row.
export default function ServiceRow({ n, title, sentence, who, details, delay = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={delay} className="border-t border-line py-14 first:border-t-0 first:pt-0 md:py-20">
      <div className="grid grid-cols-[2.5rem_1fr] gap-x-6 md:grid-cols-[4.5rem_1fr] md:gap-x-10">
        <div className="font-tight text-2xl font-semibold text-faint md:text-4xl">{n}</div>

        <div>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.03] tracking-tighter text-fg">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{sentence}</p>
          {who && <p className="mt-2 max-w-xl text-sm text-faint">{who}</p>}

          {details && (
            <>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="group mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
                aria-expanded={open}
              >
                {open ? 'Hide details' : 'View details'}
                <Arrow
                  width={14}
                  height={14}
                  className={`transition-transform duration-200 ${open ? '-rotate-90' : ''} group-hover:translate-x-0.5`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-3 max-w-xl overflow-hidden text-[15px] leading-relaxed text-faint"
                  >
                    {details}
                  </motion.p>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </Reveal>
  )
}
