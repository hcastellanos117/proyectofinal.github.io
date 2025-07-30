import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/solid'
import { homeVideos } from '../data/homeVideos'

const cardAnim = {
  hidden: { y: 50, opacity: 0, rotateY: 3, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotateY: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
}

const containerAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15
    }
  }
}

export default function HeroVideos() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-800 mb-4">
            Pedidos Realizados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos personalizados y la calidad artesanal de nuestras velas
          </p>
        </motion.div>

        <motion.div 
          variants={containerAnim}
          initial="hidden"
          animate="visible"
          style={{ perspective: 1200 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto justify-center"
        >
          {homeVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function VideoCard({ video, index }) {
  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { amount: 0.25, once: true })
  const [playing, setPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Pausa si sale del viewport
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && playing) {
          videoElement.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(videoElement)
    return () => observer.disconnect()
  }, [playing])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const handlePause = () => {
    setPlaying(false)
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    console.error(`Error al cargar el video: ${video.src}. Verifique que el archivo existe y es accesible.`)
    setIsLoaded(true)
    setError(true)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardAnim}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.15 }}
      whileHover={{ scale: 1.03, rotate: 0.5 }}
      className="w-full max-w-[480px] rounded-2xl shadow-lg overflow-hidden bg-white mx-auto hover:shadow-xl transition-all duration-300 relative group"
    >
      {/* Elementos decorativos artesanales */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-cream-100 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
      <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-earth-200 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-0"></div>
      
      {/* Borde decorativo que aparece en hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-earth-300/0 group-hover:border-earth-300/40 transition-colors duration-500 pointer-events-none"></div>
      <div className="relative aspect-video bg-gray-100">
        <video
          ref={videoRef}
          poster={video.poster}
          preload="metadata"
          muted
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={handlePause}
          onEnded={handlePause}
          onLoadedData={handleLoadedData}
          onError={handleError}
          aria-label={`Pedido personalizado: ${video.title}`}
          className="absolute inset-0 w-full h-full object-cover"
          src={video.src}
        >
          Tu navegador no soporta la reproducción de videos.
        </video>
        
        {/* Overlay de carga y error */}
        {!isLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-earth-600"></div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
            <div className="text-center text-gray-600 p-4">
              <p className="text-sm font-medium mb-2">No se pudo cargar el video</p>
              <p className="text-xs text-gray-500">{video.title}</p>
              <div className="mt-3 bg-earth-100 text-earth-600 px-3 py-1 rounded-full text-xs inline-block">
                Intenta recargar la página
              </div>
            </div>
          </div>
        )}
        
        {/* Botón de play */}
        {!playing && isLoaded && !error && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Reproducir ${video.title}`}
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors duration-300 group"
          >
            <div className="bg-white rounded-full p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-cream-50">
              <PlayIcon className="w-8 h-8 text-earth-600 ml-1 group-hover:text-earth-700" />
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-earth-600/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2">Ver vídeo</span>
          </motion.button>
        )}
        
        {/* Controles de video cuando está reproduciendo */}
        {playing && (
          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => videoRef.current?.pause()}
              className="bg-black/50 text-white px-3 py-1 rounded-lg text-sm hover:bg-black/70 transition-colors"
            >
              Pausar
            </button>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-center font-display font-semibold text-earth-800 text-lg relative">
          <span className="relative inline-block">
            {video.title}
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-earth-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h3>
        <p className="text-center text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Haz clic para reproducir</p>
      </div>
    </motion.div>
  )
}