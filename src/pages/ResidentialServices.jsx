import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons'
import { RESIDENTIAL_SERVICES } from '../data'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ServiceImage from '../components/ServiceImage'
import ServiceRow from '../components/ServiceRow'
import van from '../assets/photos/van.webp'

export default function ResidentialServices() {
  return (
    <>
      <title>Residential Cleaning Canberra | Carpet, Tile & Window Cleaning | Dario's</title>
      <meta
        name="description"
        content="Carpet & upholstery, high-pressure, tile & grout and window cleaning for homes across Canberra and surrounds."
      />

      <section className="border-t border-transparent pt-32 pb-20 md:pt-44 md:pb-24">
        <div className="wrap grid items-center gap-x-12 gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Eyebrow>Residential Cleaning</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tighter">
              A deeper clean for your home.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
              Carpet, upholstery, pressure, tile, grout and window cleaning for homes
              across Canberra and surrounds.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <ServiceImage src={van} alt="Dario's fully equipped cleaning van with carpet cleaning equipment ready for a job" />
          </Reveal>
        </div>
      </section>

      <section id="residential-services" className="border-t border-line py-10 md:py-16">
        <div className="wrap">
          {RESIDENTIAL_SERVICES.map((s, i) => (
            <ServiceRow
              key={s.n}
              n={s.n}
              title={s.title}
              sentence={s.sentence}
              who={s.who}
              details={s.details}
              delay={i * 0.05}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-muted">Servicing Canberra and surrounds.</p>
            <Link to="/#contact" className="btn-accent text-[15px]">
              Get a quote
              <Arrow width={17} height={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
