import { motion } from 'framer-motion'
import { tel } from '../data'
import { Phone, Arrow } from './Icons'
import Eyebrow from './Eyebrow'
import heroImage from '../assets/photos/pressure-cleaning.webp'

const ease = [0.25, 0.1, 0.25, 1]
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease },
})

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-bg">
      {/* The full photo at its natural ratio, spanning the entire width. Because
          the whole image is shown, nothing is ever cropped — Dario's head AND the
          rotary surface cleaner are always fully visible, edge to edge. */}
      <img
        src={heroImage}
        alt="Dario pressure-cleaning a paved area with his rotary surface cleaner"
        className="block w-full"
      />
      {/* Desktop: gradient overlay on the photo for text legibility. */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/55 to-transparent md:block" />

      {/* Content: stacked below the photo on mobile, overlaid & centred on desktop. */}
      <div className="relative md:absolute md:inset-0 md:flex md:items-center">
        <div className="wrap py-10 md:py-0">
          <motion.div {...rise(0)}>
            <Eyebrow>Dario&rsquo;s Cleaning Service · Established 1993 · Canberra</Eyebrow>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.96] tracking-tighter"
          >
            Dirt&rsquo;s final
            <br />
            <span className="text-accent">destination.</span>
          </motion.h1>

          <motion.p {...rise(0.16)} className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            Professional cleaning across Canberra and surrounds.
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
        </div>
      </div>
    </section>
  )
}
