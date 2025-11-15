import React from 'react'
import { Cpu, ShoppingCart, Bot, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollColor } from '../hooks/useScrollColor'

const Services = () => {
  const { colors } = useScrollColor()
  const services = [
    {
      icon: Cpu,
      title: 'Software a Medida',
      description: 'No hacemos "paginitas". Construimos sistemas ERP, gestión de inventario, plataformas logísticas y soluciones empresariales que otros equipos no pueden.',
      features: [
        'Arquitectura de microservicios',
        'Sistemas ERP robustos',
        'Gestión de inventario y logística',
        'Integración con sistemas legacy'
      ],
      gradient: 'from-primary-500/20 to-purple-500/20'
    },
    {
      icon: ShoppingCart,
      title: 'Plataformas E-commerce',
      description: 'Marketplaces, tiendas online full-stack y plataformas escalables. Con pagos, geolocalización, chat en tiempo real y todo lo que tu negocio necesita.',
      features: [
        'Marketplaces multi-vendor',
        'Integración MercadoPago/Stripe',
        'Chat en tiempo real',
        'Búsqueda geolocalizada (PostGIS)'
      ],
      gradient: 'from-blue-500/20 to-primary-500/20'
    },
    {
      icon: Bot,
      title: 'Automatización & IA',
      description: 'Asistentes de IA con NLP, automatización de procesos, integración con APIs externas y chatbots que entienden a tus clientes.',
      features: [
        'Chatbots con NLP (spaCy)',
        'Integración con Groq, OpenAI',
        'Workers asíncronos (Celery)',
        'APIs de ML Libre, Google, etc.'
      ],
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ]

  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono tracking-tighter">
            QUÉ <span className="text-white/40">CONSTRUIMOS</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto font-mono">
            Soluciones de negocio robustas que escalan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative glass-minimal p-10 hover:border-white/20 transition-all duration-300 border border-white/10"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-8 group-hover:border-white/40 transition-colors"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-tight uppercase">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-6 leading-relaxed text-sm font-mono">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-white/40 font-mono">
                      <ArrowRight className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/60 hover:text-white font-mono flex items-center gap-2 group/btn uppercase text-xs tracking-wider">
                  Conversemos
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/40 text-base mb-6 font-mono">
            ¿No ves lo que buscas? <span className="text-white font-semibold">Soluciones a medida</span>.
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white hover:bg-white/5 font-mono uppercase text-xs tracking-wider transition-all">
            Cuéntanos tu proyecto
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
