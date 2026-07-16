import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
        alt="Dario pressure cleaning a paved outdoor area in Canberra with a rotary surface cleaner"
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

          <motion.div {...rise(0.24)} className="mt-10 flex max-w-md flex-col gap-6 sm:flex-row sm:gap-10">
            <Link to="/residential" className="group">
              <span className="flex items-center gap-2 text-xl font-semibold tracking-tight text-fg md:text-2xl">
                Residential
                <Arrow
                  width={16}
                  height={16}
                  className="text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                />
              </span>
              <p className="mt-1.5 text-sm text-muted">Cleaning for your home</p>
              <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-accent/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>

            <div className="hidden w-px self-stretch bg-line sm:block" />

            <Link to="/commercial" className="group">
              <span className="flex items-center gap-2 text-xl font-semibold tracking-tight text-fg md:text-2xl">
                Commercial
                <Arrow
                  width={16}
                  height={16}
                  className="text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                />
              </span>
              <p className="mt-1.5 text-sm text-muted">Cleaning for your business</p>
              <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-accent/70 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>

          <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap items-center gap-5">
            <a href={tel} className="btn-accent text-[15px]">
              <Phone width={17} height={17} />
              Call
            </a>
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              Get a quote
              <Arrow width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
