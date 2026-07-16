import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data'
import { Arrow } from './Icons'
import Reveal from './Reveal'
import Eyebrow from './Eyebrow'

// Rendered by index within its own row-group, so the stagger lines up by
// column whether it's in the 3-card top row or the 2-card row beneath.
function ServiceCard(s, i) {
  return (
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
  )
}

export default function Services() {
  const primary = SERVICES.slice(0, 3)
  const secondary = SERVICES.slice(3)

  return (
    <section id="services" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
            Specialist cleaning for the jobs regular cleaning can&rsquo;t reach.
          </h2>
          <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
            From carpets and upholstery to windows, grout, pressure cleaning and water
            damage, we handle the deeper work with the right equipment, experience and
            care.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-3">
          {primary.map((s, i) => ServiceCard(s, i))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:mx-auto lg:max-w-[66.6667%]">
          {secondary.map((s, i) => ServiceCard(s, i))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            to="/residential"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            Residential services
            <Arrow width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/commercial"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            Commercial services
            <Arrow width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
