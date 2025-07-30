import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedParticles = ({ count = 15, className = "" }) => {
  const [particles, setParticles] = useState([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Verificar preferencias de movimiento reducido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setParticles([])
      return
    }

    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4, // 4-12px
          opacity: Math.random() * 0.15 + 0.1, // 0.1-0.25
          duration: Math.random() * 10 + 15, // 15-25s
          delay: Math.random() * 5
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [count, prefersReducedMotion])

  if (prefersReducedMotion || particles.length === 0) {
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(135deg, #FDE2EE ${Math.random() * 30}%, #F8B4D9 ${70 + Math.random() * 30}%)`,
            opacity: particle.opacity
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedParticles