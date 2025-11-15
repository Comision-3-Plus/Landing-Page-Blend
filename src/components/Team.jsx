import React from 'react'
import { Server, Palette, Shield, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollColor } from '../hooks/useScrollColor'

const Team = () => {
  const { colors } = useScrollColor()
  const teamMembers = [
    {
      name: 'Juani Sarmiento',
      role: 'Backend & Project Lead',
      icon: Server,
      description: 'Arquitecto de soluciones backend robustas. Especialista en IA, microservicios y gestión de proyectos complejos.',
      skills: ['FastAPI', 'Go', 'Python', 'IA & ML', 'Arquitectura'],
      gradient: 'from-blue-600 to-primary-600',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Lautaro Salinas',
      role: 'Frontend Lead',
      icon: Palette,
      description: 'Maestro del frontend moderno. Convierte ideas en interfaces intuitivas y experiencias de usuario excepcionales.',
      skills: ['Next.js 15', 'React', 'TypeScript', 'TailwindCSS', 'UI/UX'],
      gradient: 'from-primary-600 to-purple-600',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Franco Mellimaci',
      role: 'DevOps & Security',
      icon: Shield,
      description: 'Guardián de la infraestructura. Experto en orquestación, seguridad y arquitectura de sistemas distribuidos.',
      skills: ['Docker', 'Microservicios', 'Go', 'RabbitMQ', 'PostGIS'],
      gradient: 'from-purple-600 to-pink-600',
      github: '#',
      linkedin: '#'
    }
  ]

  return (
    <section id="equipo" className="relative py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-mono tracking-tighter">
            EL <span className="text-white/40">TRIDENTE</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto font-mono">
            Tres especialistas. Un objetivo: soluciones técnicas que funcionan.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative glass-minimal border border-white/20 p-8 transition-all duration-300 hover:border-white/40"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 square-grid opacity-30" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: [0, 360] }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-6 group-hover:border-white/40 transition-all"
                >
                  <member.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors" />
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-white mb-2 font-mono uppercase tracking-tight">
                  {member.name}
                </h3>
                <div className="text-white/40 font-mono text-sm mb-4 uppercase tracking-wider">
                  {member.role}
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 font-mono text-xs">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="text-white/40 text-xs font-mono mb-2 uppercase tracking-wider">
                    Especialidades
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 border border-white/20 text-white/70 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href={member.github}
                    className="flex items-center justify-center w-10 h-10 border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="glass-minimal border border-white/20 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono uppercase tracking-tight">
            UN EQUIPO, <span className="text-white/40">NO FREELANCERS</span>
          </h3>
          <p className="text-white/60 text-sm max-w-3xl mx-auto mb-6 font-mono">
            Trabajamos juntos en cada proyecto. Backend, frontend e infraestructura integrados desde el día uno. Sin fricción, sin descoordinación.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span>Comunicación directa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span>Metodologías ágiles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span>Entrega continua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
