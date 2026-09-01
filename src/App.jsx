import Hero from './components/Hero.jsx'
import History from './components/History.jsx'
import Activities from './components/Activities.jsx'
import Tours from './components/Tours.jsx'
import Vendors from './components/Vendors.jsx'
import Sponsors from './components/Sponsors.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <History />
      <Activities />
      <Tours />
      <Vendors/>
      <Sponsors />
      <Footer />
    </div>
  )
}
