import React, { useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollColor } from '../hooks/useScrollColor'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { colors } = useScrollColor()

  const projects = [
    {
      title: 'Stock-in-Order',
      category: 'ERP / Gestión Empresarial',
      description: 'Sistema de gestión (ERP) completo para PyMEs. Maneja inventario, órdenes de compra, ventas y logística con una arquitectura de microservicios de alto rendimiento.',
      technologies: ['Go (Golang)', 'React', 'Vite', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/FMelli02/stock-in-order.git',
      gradient: 'from-blue-600 to-purple-600',
      highlight: 'Microservicios en Go'
    },
    {
      title: 'ConectarProfesionales',
      category: 'Marketplace / Gig Economy',
      description: 'Plataforma tipo "Uber/Rappi" para conectar profesionales y clientes. Arquitectura de microservicios, búsquedas gelocalizadas (PostGIS), chat en tiempo real e integración de pagos.',
      technologies: ['FastAPI', 'Next.js', 'PostGIS', 'MercadoPago', 'Firebase', 'Docker'],
      github: 'https://github.com/Comision-3-Plus/ConectarProfesionales.git',
      gradient: 'from-primary-600 to-blue-600',
      highlight: 'Geolocalización PostGIS'
    },
    {
      title: 'VOID E-Commerce',
      category: 'E-commerce con IA',
      description: 'Tienda online full-stack con asistente de IA (Groq) para consultas de clientes y sistema de workers (Celery) para tareas asíncronas como envío de emails.',
      technologies: ['FastAPI', 'React', 'Celery', 'Redis', 'Groq AI', 'MercadoPago'],
      github: 'https://github.com/Timba-SA/VOID-E-COMMERCE.git',
      gradient: 'from-purple-600 to-pink-600',
      highlight: 'Asistente IA + Workers'
    },
    {
      title: 'Orion',
      category: 'IA Conversacional / NLP',
      description: 'Asistente de IA (chatbot) avanzado con Procesamiento de Lenguaje Natural. Diseñado para conectarse a cualquier sistema y dar respuestas complejas sobre pedidos, stock o quejas.',
      technologies: ['FastAPI', 'spaCy (NLP)', 'Microservicios', 'MongoDB', 'Docker'],
      github: 'https://github.com/JuaniSarmiento/Orion.git',
      gradient: 'from-indigo-600 to-primary-600',
      highlight: 'NLP con spaCy'
    },
    {
      title: 'Crow Repuestos',
      category: 'Frontend E-commerce',
      description: 'Demostración de frontend de alto rendimiento. E-commerce ultra-rápido y moderno construido con las últimas tecnologías de React, enfocado en UX.',
      technologies: ['Next.js 15', 'React Query', 'Zustand', 'TailwindCSS', 'TypeScript'],
      github: 'https://github.com/lautigit1/Crow-v2.git',
      gradient: 'from-gray-700 to-gray-900',
      highlight: 'Next.js 15 + Performance'
    }
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="portfolio" className="relative py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono tracking-tighter">
            PROYECTOS <span className="text-white/40">COMPLEJOS</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto font-mono">
            Sistemas reales y productivos que demuestran capacidad.
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-minimal overflow-hidden border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-0">
                {/* Project Info */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    {/* Category Badge */}
                  <div className="inline-block px-4 py-1.5 border border-white/20 text-white/60 text-xs font-mono uppercase tracking-wider mb-6">
                    {currentProject.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-tight uppercase">
                    {currentProject.title}
                  </h3>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-white animate-pulse"></div>
                    <span className="text-white/60 font-mono text-xs uppercase tracking-wider">{currentProject.highlight}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6 text-sm font-mono">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white/40 text-xs font-mono mb-3 uppercase tracking-wider">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 border border-white/20 text-white/80 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GitHub Link */}
                <a 
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white font-mono uppercase text-xs tracking-wider group">
                  <Github className="w-5 h-5" />
                  Ver repositorio
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Visual Side */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-hidden border-l border-white/10">
                {/* Patrón de fondo animado */}
                <div className="absolute inset-0 square-grid" />
                
                {/* Cuadrados flotantes */}
                <motion.div
                  className="absolute top-10 left-10 w-32 h-32 border border-white/10"
                  animate={{
                    rotate: [0, 45, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-40 h-40 border border-white/10"
                  animate={{
                    rotate: [0, -45, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative text-center z-10">
                  <motion.div 
                    className="text-7xl md:text-9xl font-black text-white/10 mb-4 font-mono"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {String(currentIndex + 1).padStart(2, '0')}
                  </motion.div>
                  <div className="text-white/60 text-lg font-mono uppercase tracking-wider">
                    {currentProject.title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-black border border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-black border border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all ${
                idx === currentIndex 
                  ? 'w-12 bg-white' 
                  : 'w-3 bg-white/20 hover:bg-white/40'
              } h-3`}
            />
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 border transition-all text-left ${
                idx === currentIndex
                  ? 'bg-white/5 border-white/40'
                  : 'border-white/10 hover:border-white/20'
              }`}>
              <div className="text-white font-mono text-sm mb-1 uppercase">{project.title}</div>
              <div className="text-white/40 text-xs font-mono">{project.category}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
