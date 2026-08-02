import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS, tel } from '../data'
import { Phone } from './Icons'
import logo from '../assets/brand/logo.png'

const NAV = [
  ['Services', '/#services'],
  ['Work', '/#work'],
  ['Contact', '/#contact'],
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
        <Link to="/#top" className="leading-none" aria-label={BUSINESS.name}>
          <img src={logo} alt={BUSINESS.name} className="h-11 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {label}
            </Link>
          ))}
          <Link to="/residential" className="text-sm text-muted transition-colors hover:text-fg">
            Residential
          </Link>
          <Link to="/commercial" className="text-sm text-muted transition-colors hover:text-fg">
            Commercial
          </Link>
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
