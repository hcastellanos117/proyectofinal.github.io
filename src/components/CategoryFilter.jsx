import React from 'react'
import { products } from '../data/products'
import { BeakerIcon, AcademicCapIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'todas', label: 'Todas las Velas', count: products.length, color: 'from-amber-300 to-amber-500', icon: BeakerIcon },
    { id: 'aromaticas', label: 'Aromáticas', count: products.filter(p => p.category === 'aromaticas').length, color: 'from-rose-300 to-rose-500', icon: AcademicCapIcon },
    { id: 'decorativas', label: 'Decorativas', count: products.filter(p => p.category === 'decorativas').length, color: 'from-sky-300 to-sky-500', icon: GlobeAltIcon },
    { id: 'tematicas', label: 'Temáticas', count: products.filter(p => p.category === 'tematicas').length, color: 'from-lime-300 to-lime-500', icon: LightBulbIcon },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-bold text-primary-800 mb-2">
          Explora Nuestras Categorías
        </h3>
        <p className="text-gray-600 text-sm">Encuentra la vela perfecta para cada momento</p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id
          
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`relative w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-4 shadow-lg transition-all duration-300 ease-in-out
                bg-gradient-to-br ${category.color}
                ${isSelected ? 'ring-4 ring-pink-500 ring-offset-2 scale-105' : 'hover:scale-105 hover:shadow-xl'}`}
            >
              {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" />}
              <span className="text-white text-lg md:text-xl font-semibold leading-tight text-center break-words max-w-full px-2">{category.label}</span>
              <span className="text-white text-sm md:text-base opacity-90 mt-1">{category.count} velas</span>
            </button>
          )
        })}
      </div>
      
      <div className="flex items-center justify-center text-gray-700 text-xl mt-8">
        <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
        <span className="font-semibold">Productos disponibles:</span>{' '}
        <span className="text-pink-600 font-bold text-2xl ml-2">
          {selectedCategory === 'todas' 
            ? categories.find(c => c.id === 'todas')?.count || products.length
            : categories.find(c => c.id === selectedCategory)?.count || 0
          }
        </span>{' '}
        <span className="ml-1">velas</span>
      </div>
    </div>
  )
}

export default CategoryFilter