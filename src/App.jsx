import { useState, useCallback } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import DotGrid from './components/DotGrid'
import Services from './components/Services'
import Marquee from './components/Marquee'
import Process from './components/Process'
import Cta from './components/Cta'
import Footer from './components/Footer'
import RadarOverlay from './components/radar/RadarOverlay'

function App() {
  const [radarOpen, setRadarOpen] = useState(false)
  const [radarCategory, setRadarCategory] = useState(null)

  const openRadar = useCallback((categoryId = null) => {
    setRadarCategory(categoryId)
    setRadarOpen(true)
  }, [])

  const closeRadar = useCallback(() => {
    setRadarOpen(false)
    setRadarCategory(null)
  }, [])

  return (
    <LanguageProvider>
      <DotGrid />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="gradient-orb gradient-orb--blue" aria-hidden="true" />
      <div className="gradient-orb gradient-orb--warm" aria-hidden="true" />
      <Nav onOpenRadar={openRadar} />
      <main className="relative z-[1]">
        <Hero onOpenRadar={openRadar} />
        <Services onOpenRadar={openRadar} />
        <Marquee />
        <Process onOpenRadar={openRadar} />
        <Cta onOpenRadar={openRadar} />
      </main>
      <Footer />
      <RadarOverlay
        isOpen={radarOpen}
        onClose={closeRadar}
        preSelectedCategory={radarCategory}
      />
    </LanguageProvider>
  )
}

export default App
