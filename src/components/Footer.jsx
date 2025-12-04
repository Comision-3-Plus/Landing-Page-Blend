import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import logo from '../assets/logo2.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 dark:border-primary-400/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Blend Software" className="h-24 md:h-28 w-auto brightness-125" />
              <h3 className="text-2xl md:text-3xl font-bold text-dark-600 dark:text-dark-50 font-mono tracking-tight">BLEND SOFTWARE</h3>
            </div>
            <p className="text-dark-600/80 dark:text-dark-50/70 text-xs font-mono">
              Software de alta complejidad desde Mendoza, Argentina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-600 dark:text-dark-50 font-mono text-sm mb-3 uppercase tracking-wider">Navegación</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dark-600/70 dark:text-dark-50/60 hover:text-primary-500 hover:translate-x-1 text-xs font-mono transition-all duration-200">
                Servicios
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dark-600/70 dark:text-dark-50/60 hover:text-primary-500 hover:translate-x-1 text-xs font-mono transition-all duration-200">
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dark-600/70 dark:text-dark-50/60 hover:text-primary-500 hover:translate-x-1 text-xs font-mono transition-all duration-200">
                Equipo
              </button>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-dark-600/70 dark:text-dark-50/60 hover:text-primary-500 hover:translate-x-1 text-xs font-mono transition-all duration-200">
                Contacto
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-600 dark:text-dark-50 font-mono text-sm mb-3 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-2 mb-4">
              <a href="mailto:contactoblendsoftware@gmail.com" className="flex items-center gap-2 text-dark-600/70 dark:text-dark-50/60 hover:text-primary-500 text-xs font-mono transition-all duration-200 hover:gap-3">
                <Mail className="w-4 h-4" />
                contactoblendsoftware@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="#"
                className="flex items-center justify-center w-9 h-9 border-2 border-primary-400/40 hover:border-accent-400 text-primary-500 hover:text-accent-400 hover:bg-accent-400/10 hover:scale-110 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#"
                className="flex items-center justify-center w-9 h-9 border-2 border-primary-400/40 hover:border-accent-400 text-primary-500 hover:text-accent-400 hover:bg-accent-400/10 hover:scale-110 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-primary-400/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-600/70 dark:text-dark-50/50 text-xs font-mono">
            © {currentYear} BLEND SOFTWARE. Mendoza, Argentina.
          </p>
          <div className="flex gap-6 text-dark-600/70 dark:text-dark-50/50 text-xs font-mono">
            <button className="hover:text-primary-500 hover:underline transition-all duration-200">Privacidad</button>
            <button className="hover:text-primary-500 hover:underline transition-all duration-200">Términos</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
