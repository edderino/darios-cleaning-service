import { useEffect, useState } from 'react'
import { BUSINESS, tel } from '../data'
import { Phone } from './Icons'

const NAV = [
  ['Services', '#services'],
  ['Work', '#work'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="leading-none" aria-label={BUSINESS.name}>
          <span className="font-tight text-[16px] font-semibold tracking-tight text-fg">
            {BUSINESS.wordmarkTop}
            <span className="text-accent">.</span>
          </span>
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-faint">
            {BUSINESS.wordmarkSub}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {label}
            </a>
          ))}
        </nav>

        <a href={tel} className="btn-accent !px-4 !py-2.5" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
          <Phone width={16} height={16} />
          <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}
