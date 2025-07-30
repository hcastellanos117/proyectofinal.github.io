import React, { useState, useEffect } from 'react'
import { HeartIcon, EyeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import LazyLoad from 'react-lazyload'
import toast from 'react-hot-toast'
import confetti from 'canvas-confetti'
import { useCart } from './CartContext'
import { asset } from '../utils/asset'

const ProductCard = ({ product, onViewDetails }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem } = useCart()

  // Resetear el estado de carga de imagen cuando cambie el producto
  useEffect(() => {
    setImageLoaded(false)
  }, [product.id])

  const handleLike = (e) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
    toast.success(isLiked ? 'Removido de favoritos' : 'Agregado a favoritos')
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    
    // Agregar al carrito
    addItem(product)
    
    // Efecto de confeti
    const rect = e.target.getBoundingClientRect()
    confetti({
      particleCount: 30,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      },
      colors: ['#f43f5e', '#ec4899', '#d946ef', '#a855f7'],
      scalar: 0.8,
      gravity: 1.2,
      drift: 0,
      ticks: 100
    })
  }

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product)
    }
  }

  const getSizeLabel = (size) => {
    const sizeMap = {
      'Small': 'Pequeña',
      'Medium': 'Mediana', 
      'Large': 'Grande'
    }
    return sizeMap[size] || size
  }

  const getCategoryLabel = (category) => {
    const categoryMap = {
      'aromaticas': 'Aromática',
      'decorativas': 'Decorativa',
      'tematicas': 'Temática'
    }
    return categoryMap[category] || category
  }

  return (
    <div 
      className="card group cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={handleViewDetails}
    >
      {/* Imagen del producto */}
      <div className="relative overflow-hidden">
        <LazyLoad height={250} offset={100} key={product.id}>
          <div className="relative h-64 bg-gray-100">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loading-spinner"></div>
              </div>
            )}
            <img
              src={product.img}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                console.error('Error loading image:', product.img);
                e.currentTarget.src = asset('images/placeholder.jpg');
                setImageLoaded(true);
              }}
              loading="lazy"
            />
            
            {/* Overlay con acciones */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleViewDetails()
                  }}
                  className="bg-white text-earth-600 p-2 rounded-full hover:bg-earth-600 hover:text-white transition-colors duration-200"
                  title="Ver detalles"
                >
                  <EyeIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-earth-600 hover:bg-red-500 hover:text-white'
                  }`}
                  title={isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  {isLiked ? (
                    <HeartSolidIcon className="w-5 h-5" />
                  ) : (
                    <HeartIcon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleAddToCart}
                  className="bg-white text-earth-600 p-2 rounded-full hover:bg-earth-600 hover:text-white transition-all duration-200 transform hover:scale-110 active:scale-95"
                  title="Agregar al carrito"
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Badge de categoría */}
            <div className="absolute top-3 left-3">
              <span className="bg-earth-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                {getCategoryLabel(product.category)}
              </span>
            </div>
            
            {/* Badge de tamaño */}
            <div className="absolute top-3 right-3">
              <span className="bg-white text-earth-600 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                {getSizeLabel(product.size)}
              </span>
            </div>
          </div>
        </LazyLoad>
      </div>
      
      {/* Información del producto */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-earth-800 mb-2 group-hover:text-earth-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Información adicional */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-candle-400 rounded-full"></div>
            <span className="text-xs text-gray-500">{product.scent}</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
        </div>
        
        {/* Precio y botón */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-earth-700">
            L. {typeof product.price === 'number' ? product.price : parseInt(product.price)}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-earth-600 hover:bg-earth-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Agregar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-200"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard