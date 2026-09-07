import { Link } from 'react-router-dom'
import { BUSINESS, tel } from '../data'
import { Phone, Arrow } from '../components/Icons'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

export default function NotFound() {
  return (
    <>
      <title>{`Page Not Found | ${BUSINESS.name}`}</title>
      <meta name="description" content="This page doesn't exist. Find carpet, pressure, window, tile and water-damage cleaning services for Canberra homes and businesses." />
      <meta name="robots" content="noindex" />

      <section className="border-t border-transparent pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="wrap">
          <Reveal>
            <Eyebrow>404</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-tighter">
              That page isn&rsquo;t here.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">
              It doesn&rsquo;t exist or has moved. Head back home, or get in touch if you were
              looking for something specific.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="btn-accent">
              Back to home
              <Arrow width={17} height={17} />
            </Link>
            <a href={tel} className="btn-outline">
              <Phone width={16} height={16} />
              Call {BUSINESS.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
