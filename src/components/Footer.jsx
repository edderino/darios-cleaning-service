import { Link } from 'react-router-dom'
import { BUSINESS, TEAM, mailto } from '../data'
import logo from '../assets/brand/logo.png'
import { Star } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link to="/#top" className="leading-none" aria-label={BUSINESS.name}>
            <img src={logo} alt={BUSINESS.name} className="h-11 w-auto" />
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <a href={mailto} className="transition-colors hover:text-fg">
              {BUSINESS.email}
            </a>
            <span className="text-faint">·</span>
            <Link to="/residential" className="transition-colors hover:text-fg">
              Residential
            </Link>
            <span className="text-faint">·</span>
            <Link to="/commercial" className="transition-colors hover:text-fg">
              Commercial
            </Link>
            <a
              href={BUSINESS.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3.5 py-1.5 text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              <Star width={13} height={13} />
              Leave a review
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <a href={`tel:${TEAM.dario.phoneRaw}`} className="transition-colors hover:text-fg">
              {TEAM.dario.name} (carpet, pressure, window, tile & water damage) · {TEAM.dario.phoneDisplay}
            </a>
            <a href={`tel:${TEAM.melissa.phoneRaw}`} className="transition-colors hover:text-fg">
              {TEAM.melissa.name} (general cleaning) · {TEAM.melissa.phoneDisplay}
            </a>
          </div>

          <p className="text-sm text-faint">
            {BUSINESS.hours} · © {new Date().getFullYear()} {BUSINESS.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
