import { motion } from 'framer-motion'
import { WHY } from '../data'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

export default function Why() {
  return (
    <section id="why" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Why Dario&rsquo;s</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Clear, careful cleaning from quote to finish.
          </h2>
          <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
            We keep the process straightforward: honest advice, proper equipment,
            careful work and one accountable point of contact from the first call to the
            final result.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {WHY.map((w, i) => (
            <motion.div
              key={w.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-t border-line pt-7"
            >
              <div className="font-tight text-sm font-medium text-accent">{w.n}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg md:text-2xl">
                {w.head}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
