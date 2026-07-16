import { BUSINESS, tel, mailto, COMMERCIAL_SERVICES } from '../data'
import { Phone, Mail } from '../components/Icons'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ServiceRow from '../components/ServiceRow'

export default function CommercialServices() {
  return (
    <>
      <title>Commercial Cleaning Canberra | Offices, Retail & Strata | Dario's</title>
      <meta
        name="description"
        content="Commercial pressure, tile & grout and window cleaning for offices, retail, education and strata properties across Canberra and surrounds. Scheduled around your business hours."
      />

      <section className="border-t border-transparent pt-32 pb-20 md:pt-44 md:pb-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Commercial Cleaning</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tighter">
              Cleaning for your business, done properly.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
              Pressure, tile, grout and window cleaning for commercial and managed
              properties across Canberra and surrounds, scheduled around your hours,
              not ours.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="commercial-services" className="border-t border-line py-10 md:py-16">
        <div className="wrap">
          {COMMERCIAL_SERVICES.map((s, i) => (
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

      <section id="commercial-contact" className="border-t border-line py-24 md:py-32">
        <div className="wrap">
          <Reveal className="max-w-lg">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Talk to us about your premises.
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Tell us the property type and what needs doing, and we&rsquo;ll sort a quote.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={tel} className="btn-accent text-[15px]">
                <Phone width={17} height={17} />
                {BUSINESS.phoneDisplay}
              </a>
              <a href={mailto} className="btn-outline text-[15px]">
                <Mail width={17} height={17} />
                {BUSINESS.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
