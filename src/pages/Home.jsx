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

      <Hero />
      <Services />
      <BeforeAfter />
      <Why />
      <Reviews />
      <Contact />
    </>
  )
}
