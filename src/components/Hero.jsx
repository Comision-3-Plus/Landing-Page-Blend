import React, { useEffect, useRef } from 'react'
import { ArrowRight, Code2, Zap, Shield, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollColor } from '../hooks/useScrollColor'

const Hero = () => {
  const { colors } = useScrollColor()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid de fondo */}
      <div className="absolute inset-0 square-grid"></div>
      
      {/* Cuadrados flotantes */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 border border-white/5"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 border border-white/5"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          rotate: [0, -45, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-mono text-white/80 uppercase tracking-wider">Equipo Full-Stack</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tighter">
            SOFTWARE
            <br />
            <span className="text-white/40">COMPLEJO</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-white/60 leading-relaxed font-mono">
            Construimos ERP, E-commerce y plataformas de IA que escalan tu negocio.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 md:gap-16 pt-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white font-mono">03</div>
              <div className="text-white/40 text-xs mt-2 uppercase tracking-wider font-mono">Desarrolladores</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white font-mono">05+</div>
              <div className="text-white/40 text-xs mt-2 uppercase tracking-wider font-mono">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white font-mono">100%</div>
              <div className="text-white/40 text-xs mt-2 uppercase tracking-wider font-mono">A Medida</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={scrollToContact}
              className="group px-10 py-4 bg-white text-black hover:bg-white/90 font-mono uppercase text-sm tracking-wider transition-all flex items-center gap-2 glow-white">
              Contacto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="px-10 py-4 border border-white/20 text-white hover:bg-white/5 font-mono uppercase text-sm tracking-wider transition-all">
              Portfolio
            </button>
          </motion.div>

          {/* Tech Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 pt-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-white" />
              <span className="text-xs text-white/40 font-mono uppercase tracking-wider">React • Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-xs text-white/40 font-mono uppercase tracking-wider">FastAPI • Go</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-xs text-white/40 font-mono uppercase tracking-wider">Docker • Microservicios</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default Hero
