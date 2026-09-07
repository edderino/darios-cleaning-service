import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BUSINESS, tel } from '../data'
import { Phone, Menu, Close } from './Icons'
import logo from '../assets/brand/logo.png'

const NAV = [
  ['Services', '/#services'],
  ['Work', '/#work'],
  ['Contact', '/#contact'],
]

const PAGES = [
  ['Residential', '/residential'],
  ['Commercial', '/commercial'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    return () => document.body.classList.remove('overflow-hidden')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
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
          {PAGES.map(([label, href]) => (
            <Link key={href} to={href} className="text-sm text-muted transition-colors hover:text-fg">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={tel} className="btn-accent !px-4 !py-2.5" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
            <Phone width={16} height={16} />
            <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center text-fg md:hidden"
          >
            {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
          </button>
        </div>
      </div>
    </header>

    <div
      id="mobile-nav"
      className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg transition-opacity duration-200 md:hidden ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <nav className="wrap flex flex-col gap-1 py-8">
        {NAV.map(([label, href]) => (
          <Link
            key={href}
            to={href}
            onClick={() => setOpen(false)}
            className="border-b border-line py-4 text-2xl font-semibold tracking-tight text-fg"
          >
            {label}
          </Link>
        ))}
        {PAGES.map(([label, href]) => (
          <Link
            key={href}
            to={href}
            onClick={() => setOpen(false)}
            className="border-b border-line py-4 text-2xl font-semibold tracking-tight text-fg"
          >
            {label}
          </Link>
        ))}
        <a href={tel} className="btn-accent mt-6 w-full justify-center !py-3.5 text-base">
          <Phone width={17} height={17} />
          Call {BUSINESS.phoneDisplay}
        </a>
      </nav>
    </div>
    </>
  )
}
