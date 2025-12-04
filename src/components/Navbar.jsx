import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import logo from '../assets/logo2.png'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-primary-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <img src={logo} alt="Blend Software" className="h-20 md:h-24 w-auto brightness-125" />
            <span className="text-dark-600 dark:text-white font-mono tracking-tight text-xl md:text-2xl font-bold">BLEND SOFTWARE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicios')} 
                    className="text-dark-600 dark:text-dark-50/70 hover:text-primary-500 dark:hover:text-primary-300 transition-all duration-200 uppercase text-sm tracking-wider font-mono relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="text-dark-600 dark:text-dark-50/70 hover:text-primary-500 dark:hover:text-primary-300 transition-all duration-200 uppercase text-sm tracking-wider font-mono relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('equipo')} 
                    className="text-dark-600 dark:text-dark-50/70 hover:text-primary-500 dark:hover:text-primary-300 transition-all duration-200 uppercase text-sm tracking-wider font-mono relative group">
              Equipo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 border border-primary-400/40 hover:border-accent-400 hover:bg-accent-400/10 text-primary-500 hover:text-accent-400 transition-all duration-200 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button onClick={() => scrollToSection('contacto')} 
                    className="bg-accent-400 text-dark-900 px-6 py-2.5 hover:bg-accent-500 hover:scale-105 font-mono uppercase text-sm tracking-wider transition-all duration-200 shadow-lg hover:shadow-accent-400/50">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white hover:text-white/80 transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-primary-400/20">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button onClick={() => scrollToSection('servicios')} 
                    className="block w-full text-left px-4 py-3 text-dark-600 dark:text-dark-50/70 hover:text-primary-500 hover:bg-primary-400/10 transition-all duration-200 font-mono uppercase text-sm tracking-wider rounded">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} 
                    className="block w-full text-left px-4 py-3 text-dark-600 dark:text-dark-50/70 hover:text-primary-500 hover:bg-primary-400/10 transition-all duration-200 font-mono uppercase text-sm tracking-wider rounded">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('equipo')} 
                    className="block w-full text-left px-4 py-3 text-dark-600 dark:text-dark-50/70 hover:text-primary-500 hover:bg-primary-400/10 transition-all duration-200 font-mono uppercase text-sm tracking-wider rounded">
              Equipo
            </button>
            
            {/* Theme Toggle Mobile */}
            <button 
              onClick={toggleTheme}
              className="block w-full text-left px-4 py-3 border border-primary-400/40 hover:border-accent-400 hover:bg-accent-400/10 text-primary-500 hover:text-accent-400 transition-all duration-200 font-mono uppercase text-sm tracking-wider flex items-center gap-2 rounded"
            >
              {isDark ? <><Sun className="w-5 h-5" /> Modo Claro</> : <><Moon className="w-5 h-5" /> Modo Oscuro</>}
            </button>
            
            <button onClick={() => scrollToSection('contacto')} 
                    className="block w-full bg-accent-400 text-dark-900 px-4 py-3 font-mono uppercase text-sm tracking-wider transition-all duration-200 hover:bg-accent-500 hover:shadow-lg rounded">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
