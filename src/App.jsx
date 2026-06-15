import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Why from './components/Why'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Why />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
