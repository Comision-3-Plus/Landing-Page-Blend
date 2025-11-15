import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const TechMarquee = () => {
  const technologies = [
    'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'FastAPI',
    'Python', 'Go', 'Docker', 'PostgreSQL', 'MongoDB',
    'Redis', 'RabbitMQ', 'Firebase', 'Groq AI', 'spaCy'
  ]

  return (
    <div className="py-16 overflow-hidden border-y border-white/10">
      <Marquee speed={40} gradient={false}>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="mx-8"
          >
            <div className="px-6 py-2 border border-white/20 hover:border-white/40 transition-all duration-300">
              <span className="text-white/60 hover:text-white font-mono text-sm uppercase tracking-wider transition-colors">
                {tech}
              </span>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  )
}

export default TechMarquee
