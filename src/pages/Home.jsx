import Hero from '../components/Hero'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import Why from '../components/Why'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <title>Dario's Cleaning Service | Carpet, Pressure & Window Cleaning Canberra</title>
      <meta
        name="description"
        content="Dario's Cleaning Service: carpet, pressure, window, tile and water-damage cleaning for homes and businesses across Canberra and surrounds. Operating since 1993."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.darioscleaning.com.au/" />

      <meta property="og:site_name" content="Dario's Cleaning Service" />
      <meta property="og:url" content="https://www.darioscleaning.com.au/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dario's Cleaning Service | Carpet, Pressure & Window Cleaning Canberra" />
      <meta
        property="og:description"
        content="Dario's Cleaning Service: carpet, pressure, window, tile and water-damage cleaning for homes and businesses across Canberra and surrounds. Operating since 1993."
      />
      <meta property="og:image" content="https://www.darioscleaning.com.au/social-share.webp" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dario's Cleaning Service | Carpet, Pressure & Window Cleaning Canberra" />
      <meta
        name="twitter:description"
        content="Dario's Cleaning Service: carpet, pressure, window, tile and water-damage cleaning for homes and businesses across Canberra and surrounds. Operating since 1993."
      />
      <meta name="twitter:image" content="https://www.darioscleaning.com.au/social-share.webp" />

      <Hero />
      <Services />
      <BeforeAfter />
      <Why />
      <Reviews />
      <Contact />
    </>
  )
}
