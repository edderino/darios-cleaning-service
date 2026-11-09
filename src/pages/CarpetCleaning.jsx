import { Link } from 'react-router-dom'
import { BUSINESS, TEAM, tel, REVIEWS, CARPET } from '../data'
import { Phone, Arrow, Star } from '../components/Icons'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ServiceImage from '../components/ServiceImage'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import Contact from '../components/Contact'
import residentialCarpet from '../assets/photos/residential-carpet-cleaning.webp'
import carpetBefore from '../assets/photos/carpet-before.webp'
import carpetAfter from '../assets/photos/carpet-after.webp'
import carpetLivingRoomBefore from '../assets/photos/carpet-livingroom-before.webp'
import carpetLivingRoomAfter from '../assets/photos/carpet-livingroom-after.webp'
import couchBefore from '../assets/photos/couch-before.webp'
import couchAfter from '../assets/photos/couch-after.webp'

const URL = 'https://www.darioscleaning.com.au/carpet-cleaning-canberra'
const TITLE = "Carpet Cleaning Canberra | Steam Cleaning Since 1993 | Dario's"
const DESC =
  'Carpet, rug and upholstery cleaning across Canberra since 1993. Deep extraction for stains, traffic marks and odour, plus end-of-lease and commercial carpet. Call Dario on 0417 476 017.'

const carpetReviews = REVIEWS.filter((r) => /carpet/i.test(r.service))

export default function CarpetCleaning() {
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={URL} />

      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content="https://www.darioscleaning.com.au/social-share.webp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content="https://www.darioscleaning.com.au/social-share.webp" />

      <script type="application/ld+json">
        {JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Carpet Cleaning Canberra',
            serviceType: 'Carpet cleaning',
            url: URL,
            provider: { '@id': 'https://www.darioscleaning.com.au/#business' },
            areaServed: { '@type': 'City', name: 'Canberra' },
            description: DESC,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.darioscleaning.com.au/' },
              { '@type': 'ListItem', position: 2, name: 'Carpet Cleaning Canberra', item: URL },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: CARPET.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ])}
      </script>

      {/* Hero */}
      <section className="border-t border-transparent pt-32 pb-20 md:pt-44 md:pb-24">
        <div className="wrap grid items-center gap-x-12 gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Eyebrow>Carpet &amp; upholstery cleaning</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tighter">
              Carpet cleaning in Canberra since 1993.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
              Deep extraction cleaning, what most people call steam cleaning, for stained,
              marked and tired carpets, rugs and lounges. Dario quotes the job, does the job,
              and is the person you talk to the whole way through.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={tel} className="btn-accent text-[15px]">
                <Phone width={17} height={17} />
                Call {TEAM.dario.name} · {TEAM.dario.phoneDisplay}
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
              >
                Get a quote
                <Arrow width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <ServiceImage
              src={residentialCarpet}
              alt="Freshly cleaned living room carpet in a Canberra home, showing visible extraction lines"
            />
          </Reveal>
        </div>
      </section>

      {/* What we clean */}
      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>What we clean</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Carpets, rugs and the furniture that sits on them.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {CARPET.covers.map((c) => (
              <div key={c.title} className="bg-surface p-8">
                <h3 className="text-lg font-semibold tracking-tight text-fg">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section id="work" className="scroll-mt-20 border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>The work</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Real Canberra jobs, before and after.
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">Drag to compare.</p>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <Reveal delay={0.05} className="mx-auto w-full max-w-[360px]">
              <p className="mb-3 text-sm font-medium text-faint">Bedroom carpet</p>
              <BeforeAfterSlider
                before={carpetBefore}
                after={carpetAfter}
                beforeAlt="Stained bedroom carpet before professional cleaning, beside a sliding glass door"
                afterAlt="Bedroom carpet after professional cleaning, beside a sliding glass door"
              />
            </Reveal>
            <Reveal delay={0.1} className="mx-auto w-full max-w-[360px]">
              <p className="mb-3 text-sm font-medium text-faint">Living room carpet</p>
              <BeforeAfterSlider
                before={carpetLivingRoomBefore}
                after={carpetLivingRoomAfter}
                beforeAlt="Stained living room carpet before professional cleaning"
                afterAlt="Living room carpet after professional cleaning"
                afterPosition="object-[20%_25%]"
                afterClassName="scale-[2]"
              />
            </Reveal>
            <Reveal delay={0.15} className="mx-auto w-full max-w-[360px]">
              <p className="mb-3 text-sm font-medium text-faint">Lounge upholstery</p>
              <BeforeAfterSlider
                before={couchBefore}
                after={couchAfter}
                beforeAlt="Marked upholstered sofa before professional upholstery cleaning"
                afterAlt="Upholstered sofa after professional upholstery cleaning"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              From the first call to dry carpet.
            </h2>
          </Reveal>
          <ol className="grid gap-8 md:col-span-7">
            {CARPET.steps.map((s, i) => (
              <Reveal key={s.head} delay={i * 0.05}>
                <li className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                  <span className="font-tight text-2xl font-semibold text-faint">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-fg">{s.head}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Carpet cleaning across Canberra.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Based in Evatt and working right across Canberra and surrounds, including:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {CARPET.areas.map((a) => (
                <li key={a} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-faint">Not sure if you&rsquo;re covered? Call and ask.</p>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      {carpetReviews.length > 0 && (
        <section className="border-t border-line py-20 md:py-24">
          <div className="wrap">
            <Reveal>
              <Eyebrow>What locals say</Eyebrow>
              <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
                Carpets people have trusted Dario with for years.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {carpetReviews.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-xl2 border border-line bg-surface p-7">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} width={16} height={16} />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-fg/90">{r.quote}</blockquote>
                  <figcaption className="mt-6 text-sm text-muted">
                    <span className="font-medium text-fg">{r.name}</span> · {r.service}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight tracking-tighter">
              Carpet cleaning questions, answered.
            </h2>
          </Reveal>
          <div className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
            {CARPET.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-fg">
                  {f.q}
                  <Arrow width={16} height={16} className="shrink-0 text-faint transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Looking for something else?{' '}
            <Link to="/residential" className="text-fg underline underline-offset-4 hover:text-accent">
              All residential services
            </Link>{' '}
            ·{' '}
            <Link to="/commercial" className="text-fg underline underline-offset-4 hover:text-accent">
              Commercial cleaning
            </Link>
          </p>
        </div>
      </section>

      <Contact />
    </>
  )
}
