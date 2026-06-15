import { motion } from 'framer-motion'
import { SERVICES } from '../data'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Everything a clean property needs.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-surface p-8 transition-colors duration-300 hover:bg-elevated"
            >
              <div className="font-tight text-sm font-medium text-faint transition-colors group-hover:text-accent">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
