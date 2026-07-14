import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't scroll on navigation. On every route change, scroll
// to the hash target if the URL carries one (e.g. arriving at /#services
// from another page), otherwise jump to the top of the new page.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
