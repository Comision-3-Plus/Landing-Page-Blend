import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollColorBackground from './components/ScrollColorBackground'
import TechMarquee from './components/TechMarquee'

function App() {
  return (
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-dark-900 relative transition-colors duration-300">
      {/* Fixed background for entire page */}
      <div className="fixed inset-0 z-0">
        <ScrollColorBackground />
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
