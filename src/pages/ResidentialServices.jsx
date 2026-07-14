import { Arrow } from '../components/Icons'
import { RESIDENTIAL_SERVICES } from '../data'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

export default function ResidentialServices() {
  return (
    <>
      <title>Residential Cleaning Canberra | Carpet, Tile & Window Cleaning | Dario's</title>
      <meta
        name="description"
        content="Carpet & upholstery, high-pressure, tile & grout and window cleaning for homes across Canberra and surrounds."
      />

      <section className="border-t border-transparent pt-32 pb-20 md:pt-44 md:pb-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Residential Cleaning</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tighter">
              A deeper clean for your home.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
              Carpet, upholstery, pressure, tile, grout and window cleaning for homes
              across Canberra and surrounds.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="residential-services" className="border-t border-line py-24 md:py-32">
        <div className="wrap space-y-20 md:space-y-24">
          {RESIDENTIAL_SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="border-t border-line pt-12 first:border-t-0 first:pt-0">
              <div className="grid gap-x-12 gap-y-6 md:grid-cols-12">
                <div className="md:col-span-5">
                  <div className="font-tight text-sm font-medium text-accent">{s.n}</div>
                  <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-tight text-fg">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">{s.intro}</p>
                </div>

                <div className="md:col-span-7">
                  <p className="label">Covers</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.covers.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] leading-none text-fg/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.note && <p className="mt-4 text-sm text-faint">{s.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-muted">Servicing Canberra and surrounds.</p>
            <a href="/#contact" className="btn-accent text-[15px]">
              Get a quote
              <Arrow width={17} height={17} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
