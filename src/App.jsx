import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import ResidentialServices from './pages/ResidentialServices'
import CommercialServices from './pages/CommercialServices'

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
        </Routes>
      </main>
      <Footer />
    </>
  )
}
