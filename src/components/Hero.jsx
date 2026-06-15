import { motion } from 'framer-motion'
import { tel, HERO_TRUST } from '../data'
import { Phone, Arrow } from './Icons'
import Eyebrow from './Eyebrow'
import heroDario from '../assets/photos/hero-dario.webp'

const ease = [0.25, 0.1, 0.25, 1]
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease },
})

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[75vh] w-full overflow-hidden md:min-h-[85vh]">
      {/* Full-bleed hero: Dario on the job. Positioned to keep him in frame. */}
      <img
        src={heroDario}
        alt="Dario cleaning a tiled commercial floor with his extraction gear"
        className="absolute inset-0 h-full w-full object-cover object-[50%_34%]"
      />
      {/* Charcoal gradient: opaque bottom-left, fading to transparent top-right */}
      <div className="absolute inset-0 bg-gradient-to-tr from-bg via-bg/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/20 to-transparent" />
      {/* Extra darken on mobile so Dario and the text stay legible together */}
      <div className="absolute inset-0 bg-bg/30 md:hidden" />

      {/* Overlaid text, left-aligned, anchored low */}
      <div className="wrap relative flex min-h-[75vh] flex-col justify-end pb-16 pt-32 md:min-h-[85vh] md:pb-20">
        <motion.div {...rise(0)}>
          <Eyebrow>Full-service cleaning</Eyebrow>
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter"
        >
          Dirt&rsquo;s final
          <br />
          <span className="text-accent">destination.</span>
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-7 max-w-md text-lg leading-relaxed text-muted">
          Professional carpet and surface cleaning across Canberra, Queanbeyan and
          surrounds.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
          <a href={tel} className="btn-accent text-[15px]">
            <Phone width={17} height={17} />
            Call
          </a>
          <a href="#contact" className="btn-outline text-[15px]">
            Get a quote
            <Arrow width={17} height={17} />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.ul
          {...rise(0.32)}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {HERO_TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
