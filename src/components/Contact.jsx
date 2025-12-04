import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simular envío (aquí conectarías con tu backend o servicio de email)
    setTimeout(() => {
      console.log('Form data:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-600 dark:text-dark-50 mb-6 font-mono tracking-tighter">
              TRABAJEMOS <span className="text-gradient">JUNTOS</span>
            </h2>

            <p className="text-base text-dark-600/80 dark:text-dark-50/70 mb-8 leading-relaxed font-mono">
              Si tu proyecto necesita un equipo que pueda manejar complejidad real, estamos listos. Cuéntanos qué necesitas.
            </p>

            {/* Why Contact Us */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 mt-2"></div>
                <div>
                  <div className="text-dark-600 dark:text-dark-50 font-mono text-sm mb-1 uppercase tracking-wider">Consultoría gratuita</div>
                  <div className="text-dark-600/80 dark:text-dark-50/70 text-xs font-mono">Te ayudamos a definir el alcance técnico sin costo.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent-400 mt-2"></div>
                <div>
                  <div className="text-dark-600 dark:text-dark-50 font-mono text-sm mb-1 uppercase tracking-wider">Propuesta en 48h</div>
                  <div className="text-dark-600/80 dark:text-dark-50/70 text-xs font-mono">Plan detallado con tiempos y costos.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary-400 mt-2"></div>
                <div>
                  <div className="text-dark-600 dark:text-dark-50 font-mono text-sm mb-1 uppercase tracking-wider">Sin intermediarios</div>
                  <div className="text-dark-600/80 dark:text-dark-50/70 text-xs font-mono">Hablas con los desarrolladores directamente.</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border border-primary-400/40 dark:border-primary-400/30 p-6">
              <div className="text-dark-600/70 dark:text-dark-50/50 text-xs mb-2 font-mono uppercase tracking-wider">Email directo</div>
              <a href="mailto:contactoblendsoftware@gmail.com" className="text-primary-400 hover:text-accent-400 font-mono text-xl md:text-2xl font-bold">
                contactoblendsoftware@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-minimal border border-gray-200 dark:border-primary-400/20 p-8 md:p-10 bg-white/50 dark:bg-transparent">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-600 dark:text-dark-50 mb-2 font-mono uppercase">MENSAJE ENVIADO</h3>
                <p className="text-dark-600/80 dark:text-dark-50/70 font-mono text-xs">Te responderemos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dark-600/80 dark:text-dark-50/70 font-mono text-xs uppercase tracking-wider mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-primary-400/5 border border-gray-300 dark:border-primary-400/30 text-dark-600 dark:text-dark-50 placeholder-dark-600/50 dark:placeholder-dark-50/50 focus:border-accent-400 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-dark-50/70 font-mono text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-primary-400/5 border border-gray-300 dark:border-primary-400/30 text-dark-600 dark:text-dark-50 placeholder-dark-600/50 dark:placeholder-dark-50/50 focus:border-accent-400 focus:outline-none transition-colors font-mono text-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-600/80 dark:text-dark-50/70 font-mono text-xs uppercase tracking-wider mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-primary-400/5 border border-gray-300 dark:border-primary-400/30 text-dark-600 dark:text-dark-50 placeholder-dark-600/50 dark:placeholder-dark-50/50 focus:border-accent-400 focus:outline-none transition-colors resize-none font-mono text-sm"
                    placeholder="Describe tu proyecto: ¿Qué necesitas? ¿Cuál es el objetivo?"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-dark-600/80 dark:text-dark-50/70 bg-primary-400/5 border border-primary-400/30 p-4 font-mono text-xs">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Error. Intenta de nuevo.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent-400 text-dark-900 px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-accent-500 hover:scale-105 disabled:bg-gray-300 dark:disabled:bg-primary-400/20 disabled:text-dark-600/40 dark:disabled:text-dark-50/40 transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-accent-400/50"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin"></div>
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      ENVIAR MENSAJE
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-dark-50/50 text-xs text-center font-mono">
                  Al enviar, aceptas que contactemos contigo.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
