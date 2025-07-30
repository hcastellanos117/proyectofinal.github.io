import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import HeroImageSlider from './HeroImageSlider'
import AnimatedParticles from './AnimatedParticles'
import ButterflyIcon from './ButterflyIcon'
import CandleIcon from './CandleIcon'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para crear elementos flotantes con parallax
  const createFloatingElements = () => {
    const elements = []
    for (let i = 0; i < 6; i++) {
      const parallaxSpeed = 0.15 // 15% de la velocidad de scroll
      elements.push(
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary-300 rounded-full opacity-25 parallax-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * parallaxSpeed}px)`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3
          }}
        />
      )
    }
    return elements
  }

  // Animaciones para texto con efecto "candle glow"
  const textAnim = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Animación de glow cíclico para títulos (simula parpadeo de vela)
  const glowAnim = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Animación float para imagen (simula movimiento de llama)
  const floatAnim = {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Animación pulsante para glow de imagen
  const glowPulse = {
    opacity: [0.25, 0.4, 0.25],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden py-20 lg:py-28">
      {/* Partículas animadas */}
      <AnimatedParticles count={12} className="-z-10" />
      
      {/* Partículas rosadas flotantes con parallax */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {createFloatingElements()}
      </div>
      
      {/* Elementos decorativos de fondo con parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-rose-200 rounded-full opacity-25"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-candle-300 rounded-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.14}px)` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
      </div>
      
      {/* Mariposa corporativa */}
      <div className="absolute top-1/4 right-1/4 hidden lg:block">
        <ButterflyIcon className="w-20 h-20" color="#E3167A" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left max-w-lg order-2 lg:order-1">
            <motion.div 
              className="flex items-center justify-center lg:justify-start mb-6"
              variants={textAnim}
              initial="hidden"
              animate="visible"
            >
              <CandleIcon className="w-8 h-8 text-primary-500 mr-3" />
              <span className="text-primary-600 font-medium text-lg tracking-wide">
                Velas Artesanales Hondureñas
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-earth-800 mb-6 leading-tight"
              variants={textAnim}
              initial="hidden"
              animate={["visible", glowAnim]}
            >
              Ilumina tu mundo con
              <motion.span 
                className="block gradient-text hidden lg:block"
                animate={glowAnim}
              >
                Luam Candles
              </motion.span>
              <span className="block text-primary-700 lg:hidden">
                Luam Candles
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={textAnim}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Descubre nuestra colección de 75 velas únicas, creadas a mano con amor y 
              dedicación. Cada vela cuenta una historia y transforma tu espacio en un 
              refugio de paz y armonía.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textAnim}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/catalogo" 
                  className="btn-primary ripple-effect inline-flex items-center justify-center group hover:shadow-xl hover:shadow-pink-400/50 hover:bg-primary-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  aria-label="Explorar catálogo de velas artesanales"
                >
                  Explorar Catálogo
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/nosotros" 
                  className="btn-secondary inline-flex items-center justify-center hover:shadow-xl hover:shadow-emerald-400/50 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                  aria-label="Conocer nuestra historia"
                >
                  Nuestra Historia
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Estadísticas */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-earth-200"
              variants={textAnim}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="font-playfair text-2xl md:text-3xl font-bold text-earth-700">75+</div>
                <div className="text-sm text-gray-600 mt-1">Velas Únicas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl md:text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Artesanal
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl md:text-3xl font-bold text-earth-700">5★</div>
                <div className="text-sm text-gray-600 mt-1">Calidad</div>
              </div>
            </motion.div>
          </div>
          
          {/* Slider de imágenes con animaciones */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={floatAnim}
            >
              {/* Efecto glow pulsante detrás del slider */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-300 to-candle-300 blur-2xl -z-10"
                animate={glowPulse}
              />
              
              {/* Slider de imágenes */}
              <HeroImageSlider className="relative z-10" />
              
              {/* Elementos decorativos alrededor del slider */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-candle-400 to-earth-500 rounded-full opacity-80 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-primary-500 rounded-full opacity-60 blur-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Chips/etiquetas con mejor legibilidad y animaciones */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-6 lg:mt-8 ml-0 lg:ml-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.span 
                className="relative z-20 inline-flex items-center px-4 py-2 rounded-full bg-white hover:bg-emerald-50 text-sm font-medium text-neutral-800 shadow-md hover:shadow-lg text-shadow-sm transition-all duration-300 hover-lift"
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                100% Cera Natural
              </motion.span>
              
              <motion.span 
                className="relative z-20 inline-flex items-center px-4 py-2 rounded-full bg-white hover:bg-candle-50 text-sm font-medium text-neutral-800 shadow-md hover:shadow-lg text-shadow-sm transition-all duration-300 hover-lift"
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="w-3 h-3 bg-candle-500 rounded-full mr-3"></div>
                Hecho en Honduras
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Flecha de scroll animada */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
          const nextSection = document.querySelector('#next-section') || document.querySelector('section:nth-of-type(2)')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center text-earth-600 hover:text-primary-600 transition-colors duration-300">
           <span className="text-sm font-medium mb-2 opacity-80">Descubre más</span>
           <ChevronDownIcon className="w-6 h-6" />
         </div>
       </motion.div>

       {/* Redes Sociales */}
       <div className="absolute bottom-8 right-8 flex flex-col space-y-4">
         <motion.a
           href="https://www.facebook.com/share/14F3DBbgBs1/?mibextid=wwXIfr"
           target="_blank"
           rel="noopener noreferrer"
           className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 hover:text-blue-700 hover:scale-110"
           whileHover={{ scale: 1.1, rotate: 5 }}
           whileTap={{ scale: 0.95 }}
           aria-label="Síguenos en Facebook"
         >
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
           </svg>
         </motion.a>
         
         <motion.a
           href="https://www.instagram.com/luam_candles/"
           target="_blank"
           rel="noopener noreferrer"
           className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-pink-600 hover:text-pink-700 hover:scale-110"
           whileHover={{ scale: 1.1, rotate: -5 }}
           whileTap={{ scale: 0.95 }}
           aria-label="Síguenos en Instagram"
         >
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
           </svg>
         </motion.a>
       </div>
     </section>
  )
}

export default Hero