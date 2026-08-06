import { BUSINESS, TEAM, mailto, RESIDENTIAL_SERVICES } from '../data'
import { Phone, Mail } from '../components/Icons'
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
              team={s.team}
              image={s.image}
              imageAlt={s.imageAlt}
              imagePosition={s.imagePosition}
              delay={i * 0.05}
            />
          ))}
        </div>
      </section>

      <section id="residential-contact" className="border-t border-line py-24 md:py-32">
        <div className="wrap">
          <Reveal className="max-w-lg">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Talk to us about your home.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Carpet, pressure, tile, window and water damage work goes to Dario.
              General cleaning goes to Melissa. Call whichever fits, or email and
              we&rsquo;ll point you the right way.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl2 border border-line bg-surface p-5">
                <p className="text-sm font-medium text-fg">{TEAM.dario.name}</p>
                <p className="mt-1 text-sm text-faint">{TEAM.dario.role}</p>
                <a href={`tel:${TEAM.dario.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 text-[15px] text-fg transition-colors hover:text-accent">
                  <Phone width={16} height={16} className="text-accent" />
                  {TEAM.dario.phoneDisplay}
                </a>
              </div>
              <div className="rounded-xl2 border border-line bg-surface p-5">
                <p className="text-sm font-medium text-fg">{TEAM.melissa.name}</p>
                <p className="mt-1 text-sm text-faint">{TEAM.melissa.role}</p>
                <a href={`tel:${TEAM.melissa.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 text-[15px] text-fg transition-colors hover:text-accent">
                  <Phone width={16} height={16} className="text-accent" />
                  {TEAM.melissa.phoneDisplay}
                </a>
              </div>
            </div>

            <a href={mailto} className="btn-outline mt-6 text-[15px]">
              <Mail width={17} height={17} />
              {BUSINESS.email}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
