import { motion } from 'framer-motion'
import { BUSINESS, REVIEWS } from '../data'
import { Arrow, Star } from './Icons'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>What locals say</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            The kind of clean people remember.
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

        <Reveal>
          <div className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              Worked with us before? A quick review helps other Canberra locals find us.
            </p>
            <a
              href={BUSINESS.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0 text-[15px]"
            >
              Leave a review
              <Arrow width={17} height={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
