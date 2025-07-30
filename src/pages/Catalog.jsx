import React, { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'
import AdvancedFilters from '../components/AdvancedFilters'
import { products } from '../data/products'
import { useCart } from '../components/CartContext'
import confetti from 'canvas-confetti'
import { asset } from '../utils/asset'
import { 
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [advancedFilters, setAdvancedFilters] = useState({
    priceMin: '',
    priceMax: '',
    categories: [],
    sizes: [],
    scents: []
  })
  const { addItem } = useCart()

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filtrar por categoría (filtro básico)
    if (selectedCategory !== 'todas') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.scent.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Aplicar filtros avanzados
    // Filtro de precio
    if (advancedFilters.priceMin) {
      const minPrice = parseFloat(advancedFilters.priceMin)
      filtered = filtered.filter(product => {
        const productPrice = typeof product.price === 'number' ? product.price : parseInt(product.price)
        return productPrice >= minPrice
      })
    }
    
    if (advancedFilters.priceMax) {
      const maxPrice = parseFloat(advancedFilters.priceMax)
      filtered = filtered.filter(product => {
        const productPrice = typeof product.price === 'number' ? product.price : parseInt(product.price)
        return productPrice <= maxPrice
      })
    }

    // Filtro de categorías avanzado
    if (advancedFilters.categories.length > 0) {
      filtered = filtered.filter(product => 
        advancedFilters.categories.includes(product.category)
      )
    }

    // Filtro de tamaños
    if (advancedFilters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        advancedFilters.sizes.includes(product.size)
      )
    }

    // Filtro de aromas
    if (advancedFilters.scents.length > 0) {
      filtered = filtered.filter(product => 
        advancedFilters.scents.includes(product.scent)
      )
    }

    // Ordenar productos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return (typeof a.price === 'number' ? a.price : parseInt(a.price)) - 
                 (typeof b.price === 'number' ? b.price : parseInt(b.price))
        case 'price-high':
          return (typeof b.price === 'number' ? b.price : parseInt(b.price)) - 
                 (typeof a.price === 'number' ? a.price : parseInt(a.price))
        case 'category':
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, searchTerm, sortBy, advancedFilters])

  const handleViewDetails = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCartFromModal = (e) => {
    addItem(selectedProduct)
    
    // Efecto de confeti desde el centro del modal
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#f43f5e', '#ec4899', '#d946ef', '#a855f7'],
      scalar: 1,
      gravity: 1.2,
      drift: 0,
      ticks: 120
    })
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-earth-600 to-candle-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Catálogo de Velas
            </h1>
            <p className="text-xl text-earth-100 max-w-2xl mx-auto">
              Explora nuestra colección completa de 75 velas artesanales únicas, 
              cada una creada con amor y dedicación.
            </p>
          </div>
        </div>
      </section>



      <div className="container-custom section-padding">
        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Búsqueda */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar velas por nombre, descripción o aroma..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
              />
            </div>

            {/* Filtros avanzados y ordenar */}
            <div className="flex items-center space-x-4">
              <AdvancedFilters 
                products={products}
                onFiltersChange={setAdvancedFilters}
                activeFilters={advancedFilters}
              />
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500"
              >
                <option value="name">Ordenar por Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="category">Categoría</option>
              </select>

              {/* Botón de filtros móvil */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn-primary flex items-center"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
                Filtros
              </button>
            </div>
          </div>

          {/* Resultados */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
            <span>
              Mostrando {filteredProducts.length} de {products.length} productos
            </span>
            {searchTerm && (
              <div className="flex items-center space-x-4">
                {searchTerm && (
                  <span>
                    Búsqueda: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 text-earth-600 hover:text-earth-700"
                    >
                      Limpiar
                    </button>
                  </span>
                )}
                {(advancedFilters.priceMin || advancedFilters.priceMax || 
                  advancedFilters.categories.length > 0 || 
                  advancedFilters.sizes.length > 0 || 
                  advancedFilters.scents.length > 0) && (
                  <span className="text-rose-600">
                    Filtros activos
                    <button
                      onClick={() => setAdvancedFilters({
                        priceMin: '',
                        priceMax: '',
                        categories: [],
                        sizes: [],
                        scents: []
                      })}
                      className="ml-2 text-rose-600 hover:text-rose-700"
                    >
                      Limpiar
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros laterales */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Grid de productos */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-700 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-500 mb-4">
                  Intenta ajustar tus filtros o términos de búsqueda
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('todas')
                    setAdvancedFilters({
                      priceMin: '',
                      priceMax: '',
                      categories: [],
                      sizes: [],
                      scents: []
                    })
                  }}
                  className="btn-primary"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de detalles del producto */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>

              {/* Imagen del producto */}
              <div className="h-64 bg-gray-100 rounded-t-2xl overflow-hidden">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Información del producto */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-earth-800 mb-2">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-earth-100 text-earth-700 px-2 py-1 rounded">
                        {selectedProduct.category === 'aromaticas' ? 'Aromática' :
                         selectedProduct.category === 'decorativas' ? 'Decorativa' : 'Temática'}
                      </span>
                      <span>{selectedProduct.size === 'Small' ? 'Pequeña' :
                             selectedProduct.size === 'Medium' ? 'Mediana' : 'Grande'}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-earth-700">
                      L. {typeof selectedProduct.price === 'number' ? selectedProduct.price : parseInt(selectedProduct.price)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Aroma</h4>
                    <p className="text-gray-600">{selectedProduct.scent}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Tamaño</h4>
                    <p className="text-gray-600">
                      {selectedProduct.size === 'Small' ? 'Pequeña' :
                       selectedProduct.size === 'Medium' ? 'Mediana' : 'Grande'}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={handleAddToCartFromModal}
                    className="btn-primary flex-1 transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Agregar al Carrito
                  </button>
                  <button className="btn-secondary transition-all duration-200 transform hover:scale-105">
                    Personalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección de descarga del catálogo PDF */}
      <section className="bg-white border-t border-gray-200 mt-12">
        <div className="container-custom py-12">
          <div className="bg-gradient-to-r from-earth-50 to-candle-50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-earth-100 to-candle-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentArrowDownIcon className="w-8 h-8 text-earth-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-earth-800 mb-3">
                Descarga Nuestro Catálogo Completo
              </h2>
              <p className="text-gray-600 mb-6">
                Obtén acceso a nuestro catálogo completo en PDF con todas las 75 velas artesanales, 
                incluyendo descripciones detalladas, precios y especificaciones técnicas.
              </p>
              <a 
                href={asset('images/Catolog/Catalogo LUAM .pdf')}
                download="Catalogo_LUAM_Candles.pdf"
                className="bg-gradient-to-r from-earth-600 to-candle-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-earth-700 hover:to-candle-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
                Descargar Catálogo PDF
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Archivo PDF • Tamaño: ~2MB • Última actualización: Julio 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalog