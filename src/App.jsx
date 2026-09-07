import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import ResidentialServices from './pages/ResidentialServices'
import CommercialServices from './pages/CommercialServices'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<ResidentialServices />} />
          <Route path="/commercial" element={<CommercialServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
