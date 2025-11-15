import React, { useEffect, useRef } from 'react'
import { useScrollColor } from '../hooks/useScrollColor'

const ScrollColorBackground = () => {
  const { scrollProgress, colors } = useScrollColor()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Grid de líneas minimalistas
    const lines = []
    const lineCount = 15

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        y: (canvas.height / lineCount) * i,
        opacity: Math.random() * 0.1 + 0.02,
        speed: Math.random() * 0.2 + 0.1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fondo con variación sutil
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, `rgba(0, 0, 0, 1)`)
      gradient.addColorStop(0.5, `rgba(10, 10, 10, 1)`)
      gradient.addColorStop(1, `rgba(0, 0, 0, 1)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Líneas horizontales sutiles
      lines.forEach(line => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, line.y)
        ctx.lineTo(canvas.width, line.y)
        ctx.stroke()

        line.y += line.speed
        if (line.y > canvas.height) line.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [colors, scrollProgress])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export default ScrollColorBackground
