import { motion } from 'framer-motion'
import { REVIEWS } from '../data'
import { Star } from './Icons'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>What locals say</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Three decades of repeat customers.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              className="flex flex-col rounded-xl2 border border-line bg-surface p-7 transition-colors duration-200 hover:border-fg/20"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} width={16} height={16} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-fg/90">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-medium text-fg">{r.name}</span> · {r.service}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-7">
          <p className="text-sm text-faint">Verified Google reviews — read more on Google.</p>
        </Reveal>
      </div>
    </section>
  )
}
