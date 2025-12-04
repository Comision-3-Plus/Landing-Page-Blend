import React, { useEffect, useRef } from 'react'
import { useScrollColor } from '../hooks/useScrollColor'
import { useTheme } from '../context/ThemeContext'

const ScrollColorBackground = () => {
  const { scrollProgress, colors } = useScrollColor()
  const { isDark } = useTheme()
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

    // Círculos flotantes pulsantes
    const circles = []
    const circleCount = 8
    for (let i = 0; i < circleCount; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 20,
        baseOpacity: Math.random() * 0.08 + 0.02,
        speed: { x: (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 0.3 },
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2
      })
    }

    // Cuadrados pequeños flotantes
    const squares = []
    const squareCount = 12
    for (let i = 0; i < squareCount; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        opacity: Math.random() * 0.06 + 0.02,
        speed: { x: (Math.random() - 0.5) * 0.4, y: (Math.random() - 0.5) * 0.4 },
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fondo con variación sutil usando colores del logo
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      
      if (isDark) {
        gradient.addColorStop(0, `rgba(15, 15, 15, 1)`)
        gradient.addColorStop(0.3, `rgba(31, 49, 56, 0.3)`)
        gradient.addColorStop(0.7, `rgba(58, 58, 58, 0.2)`)
        gradient.addColorStop(1, `rgba(15, 15, 15, 1)`)
      } else {
        gradient.addColorStop(0, `rgba(255, 255, 255, 1)`)
        gradient.addColorStop(0.3, `rgba(240, 248, 250, 0.8)`)
        gradient.addColorStop(0.7, `rgba(245, 245, 245, 0.9)`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 1)`)
      }
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Líneas horizontales sutiles con color teal
      lines.forEach(line => {
        ctx.strokeStyle = `rgba(91, 154, 169, ${line.opacity * (isDark ? 1 : 1.5)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, line.y)
        ctx.lineTo(canvas.width, line.y)
        ctx.stroke()

        line.y += line.speed
        if (line.y > canvas.height) line.y = 0
      })

      // Círculos pulsantes
      circles.forEach(circle => {
        circle.pulsePhase += circle.pulseSpeed
        const currentOpacity = circle.baseOpacity + Math.sin(circle.pulsePhase) * circle.baseOpacity * 0.5
        
        ctx.strokeStyle = `rgba(91, 154, 169, ${currentOpacity * (isDark ? 0.8 : 1.2)})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.stroke()

        circle.x += circle.speed.x
        circle.y += circle.speed.y

        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius
      })

      // Cuadrados flotantes rotantes
      squares.forEach(square => {
        ctx.save()
        ctx.translate(square.x + square.size / 2, square.y + square.size / 2)
        ctx.rotate(square.rotation)
        
        ctx.strokeStyle = `rgba(200, 168, 130, ${square.opacity * (isDark ? 0.8 : 1.2)})`
        ctx.lineWidth = 1.5
        ctx.strokeRect(-square.size / 2, -square.size / 2, square.size, square.size)
        
        ctx.restore()

        square.x += square.speed.x
        square.y += square.speed.y
        square.rotation += square.rotationSpeed

        if (square.x < -square.size) square.x = canvas.width + square.size
        if (square.x > canvas.width + square.size) square.x = -square.size
        if (square.y < -square.size) square.y = canvas.height + square.size
        if (square.y > canvas.height + square.size) square.y = -square.size
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
  }, [colors, scrollProgress, isDark])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.4 : 0.3 }}
    />
  )
}

export default ScrollColorBackground
