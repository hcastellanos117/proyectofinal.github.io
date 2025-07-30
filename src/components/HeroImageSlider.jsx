import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../utils/asset'

const HeroImageSlider = ({ className = "" }) => {
  const [images, setImages] = useState([])
  
  // Función para obtener imágenes aleatorias del directorio public/images
  const getRandomImages = () => {
    // Lista de todas las imágenes disponibles en public/images
    const availableImages = [
      '1-rosa-lavanda.png', '2-espiritu-corcel.png', '3-sol-flor.png', '4-encanto-rosa.png',
      '5-canela-especiada.png', '6-ramo-encantado.png', '7-encanto-osito.png', '8-menta-refrescante.png',
      '9-sandalo-mistico.png', '10-naranja-alegre.png', '11-bergamota-citrica.png', '12-cedro-bosque.png',
      '13-ylang-ylang.png', '14-romero-herbal.png', '15-geranio-floral.png', '16-pachuli-terroso.png',
      '17-mandarina-dulce.png', '18-tomillo-silvestre.png', '19-gardenia-nocturna.png', '20-albahaca-fresca.png',
      '21-vetiver-elegante.png', '22-pomelo-energizante.png', '23-incienso-sagrado.png', '24-lemongrass-tropical.png',
      '25-neroli-delicado.png', '26-cristal-aurora.png', '27-perla-oceano.png', '28-diamante-brillante.png',
      '29-esmeralda-bosque.png', '30-zafiro-nocturno.png', '31-rubi-pasion.png', '32-topacio-dorado.png',
      '33-amatista-mistico.png', '34-cuarzo-transparente.png', '35-jade-serenidad.png', '36-opalo-iridiscente.png',
      '37-turquesa-calma.png', '38-granate-intenso.png', '39-citrino-solar.png', '40-obsidiana-proteccion.png',
      '41-aguamarina-pureza.png', '42-peridoto-renovacion.png', '43-tanzanita-rara.png', '44-labradorita-magica.png',
      '45-moonstone-lunar.png', '46-sunstone-solar.png', '47-amazonita-equilibrio.png', '48-fluorita-claridad.png',
      '49-malaquita-transformacion.png', '50-hematita-fuerza.png', '51-navidad-tradicional.png', '52-halloween-misterioso.png',
      '53-san-valentin-amor.png', '54-pascua-renacimiento.png', '55-dia-madres.png', '56-dia-padres.png',
      '57-graduacion-exito.png', '58-cumpleanos-celebracion.png', '59-aniversario-bodas.png', '60-baby-shower.png',
      '61-despedida-soltera.png', '62-housewarming-hogar.png', '63-jubilacion-descanso.png', '64-accion-gracias.png',
      '65-ano-nuevo.png', '66-dia-independencia.png', '67-dia-trabajador.png', '68-dia-tierra.png',
      '69-dia-mujer.png', '70-dia-nino.png', '71-dia-abuelos.png', '72-dia-maestros.png',
      '73-dia-amistad.png', '74-fin-ano-reflexion.png'
    ]
    
    // Función para mezclar array (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    }
    
    // Seleccionar 4 imágenes aleatorias únicas
    const shuffledImages = shuffleArray(availableImages)
    const selectedImages = shuffledImages.slice(0, 4)
    
    // Crear objetos de imagen con metadatos
    return selectedImages.map((imageName, index) => {
      const nameWithoutExtension = imageName.replace(/\.(png|jpg|webp)$/i, '')
      const formattedName = nameWithoutExtension
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return {
        src: asset(`images/${imageName}`),
        alt: `Vela ${formattedName} - Luam Candles`,
        title: formattedName
      }
    })
  }
  
  // Inicializar imágenes aleatorias al montar el componente
  useEffect(() => {
    setImages(getRandomImages())
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance slider cada 6 segundos
  useEffect(() => {
    if (isPaused || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, images.length])

  // Simular carga de imagen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleImageError = (e) => {
    console.error('Error al cargar imagen del slider');
    e.currentTarget.src = asset('images/placeholder.jpg');
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Skeleton shimmer mientras carga */}
      {isLoading && (
        <div className="absolute inset-0 rounded-3xl shimmer z-20" />
      )}

      {/* Contenedor del slider */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl mx-auto w-80 h-80 lg:w-96 lg:h-96">
        {images.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img 
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
                loading="eager"
                onError={handleImageError}
                style={{ aspectRatio: '4/5' }}
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 to-transparent" />
              
              {/* Título de la imagen */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-earth-800 shadow-lg">
                  {images[currentIndex].title}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Cargando imágenes...</span>
          </div>
        )}
      </div>

      {/* Indicadores del slider */}
      {images.length > 0 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-600 w-6' 
                  : 'bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Indicador de pausa */}
      {isPaused && (
        <motion.div
          className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Pausado
        </motion.div>
      )}
    </div>
  )
}

export default HeroImageSlider