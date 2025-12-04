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
      
      {/* Cuadrados flotantes - más variedad */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 border border-primary-400/20 dark:border-primary-400/10"
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
        className="absolute bottom-20 right-20 w-96 h-96 border border-accent-400/20 dark:border-accent-400/10"
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
      {/* Cuadrado pequeño flotante rápido */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary-400/15 dark:border-primary-400/10"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Círculo flotante medio */}
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full border border-accent-400/15 dark:border-accent-400/8"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Pequeño cuadrado animado lento */}
      <motion.div 
        className="absolute top-2/3 right-1/3 w-24 h-24 border border-primary-400/10 dark:border-primary-400/5"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          rotate: [0, -30, 0]
        }}
        transition={{
          duration: 30,
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
            className="inline-flex items-center gap-2 px-4 py-2 border border-primary-400/40 dark:border-primary-400/30 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-mono text-primary-400 dark:text-primary-400/90 uppercase tracking-wider">Equipo Full-Stack</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-dark-600 dark:text-dark-50 leading-tight tracking-tighter">
            SOFTWARE
            <br />
            <span className="text-gradient">COMPLEJO</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-dark-600/80 dark:text-dark-50/70 leading-relaxed font-mono">
            Construimos ERP, E-commerce y plataformas de IA que escalan tu negocio.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-12 md:gap-16 pt-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-400 font-mono">03</div>
              <div className="text-dark-600/60 dark:text-dark-50/50 text-xs mt-2 uppercase tracking-wider font-mono">Desarrolladores</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent-400 font-mono">05+</div>
              <div className="text-dark-600/60 dark:text-dark-50/50 text-xs mt-2 uppercase tracking-wider font-mono">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-400 font-mono">100%</div>
              <div className="text-dark-600/60 dark:text-dark-50/50 text-xs mt-2 uppercase tracking-wider font-mono">A Medida</div>
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
              className="group px-10 py-4 bg-accent-400 text-dark-900 hover:bg-accent-500 hover:scale-105 font-mono uppercase text-sm tracking-wider transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-accent-400/50">
              Contacto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="px-10 py-4 border-2 border-primary-400/50 dark:border-primary-400/30 text-primary-500 dark:text-primary-400 hover:bg-primary-400/15 hover:border-primary-400 hover:scale-105 font-mono uppercase text-sm tracking-wider transition-all duration-200">
              Portfolio
            </button>
          </motion.div>

          {/* Tech Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 pt-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="text-xs text-primary-700 dark:text-primary-200 font-mono uppercase tracking-wider font-semibold">React • Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-500 dark:text-accent-400" />
              <span className="text-xs text-accent-700 dark:text-accent-200 font-mono uppercase tracking-wider font-semibold">FastAPI • Go</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="text-xs text-primary-700 dark:text-primary-200 font-mono uppercase tracking-wider font-semibold">Docker • Microservicios</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-900 to-transparent"></div>
    </section>
  )
}

export default Hero
