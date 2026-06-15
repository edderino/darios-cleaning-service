import { BUSINESS, tel, mailto } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <a href="#top" className="leading-none" aria-label={BUSINESS.name}>
          <span className="font-tight text-[16px] font-semibold tracking-tight text-fg">
            {BUSINESS.wordmarkTop}
            <span className="text-accent">.</span>
          </span>
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-faint">
            {BUSINESS.wordmarkSub}
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
          <a href={tel} className="transition-colors hover:text-fg">
            {BUSINESS.phoneDisplay}
          </a>
          <span className="text-faint">·</span>
          <a href={mailto} className="transition-colors hover:text-fg">
            {BUSINESS.email}
          </a>
        </div>

        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {BUSINESS.name}
        </p>
      </div>
    </footer>
  )
}
