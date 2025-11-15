import { useState, useEffect } from 'react'

export const useScrollColor = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Esquema minimalista blanco y negro con variaciones sutiles
  const getColorScheme = () => {
    const opacity = 0.05 + (scrollProgress * 0.1) // Varía de 5% a 15%
    return {
      primary: '#ffffff',
      secondary: '#e5e5e5',
      accent: '#cccccc',
      bgOpacity: opacity
    }
  }

  return { scrollProgress, colors: getColorScheme() }
}
