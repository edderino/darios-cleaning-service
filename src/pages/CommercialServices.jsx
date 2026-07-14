import { BUSINESS, tel, mailto, COMMERCIAL_SERVICES } from '../data'
import { Phone, Mail } from '../components/Icons'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

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
              properties across Canberra and surrounds — scheduled around your hours,
              not ours.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="commercial-services" className="border-t border-line py-24 md:py-32">
        <div className="wrap space-y-20 md:space-y-24">
          {COMMERCIAL_SERVICES.map((s, i) => (
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
                  <p className="label">Serves</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.serves.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] leading-none text-fg/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Why Dario&rsquo;s</Eyebrow>
            <p className="mt-4 max-w-2xl text-[clamp(1.4rem,2.8vw,1.9rem)] font-semibold leading-snug tracking-tight text-fg">
              You deal with the same operator start to finish, work is scheduled around
              your business hours, and every job is completed to a standard you can put
              in front of your own customers.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Available for one-off cleans or ongoing scheduled maintenance — weekly,
              monthly or as needed.
            </p>
          </Reveal>
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
