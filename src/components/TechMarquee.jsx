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
    <div className="py-16 overflow-hidden border-y border-gray-200 dark:border-primary-400/20">
      <Marquee speed={40} gradient={false}>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="mx-8"
          >
            <div className="px-6 py-2 border border-primary-400/40 dark:border-primary-400/30 hover:border-accent-400 transition-all duration-300">
              <span className="text-dark-600/70 dark:text-dark-50/60 hover:text-primary-400 font-mono text-sm uppercase tracking-wider transition-colors">
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
