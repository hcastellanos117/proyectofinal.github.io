import React, { useState, useEffect } from 'react';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

const AdvancedFilters = ({ products, onFiltersChange, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    categories: [],
    sizes: [],
    scents: []
  });

  // Sincronizar con filtros activos externos
  useEffect(() => {
    setFilters(activeFilters);
  }, [activeFilters]);

  // Obtener valores únicos para los filtros
  const getUniqueValues = (key) => {
    const values = products.map(product => product[key]).filter(Boolean);
    return [...new Set(values)].sort();
  };

  const categories = getUniqueValues('category');
  const sizes = getUniqueValues('size');
  const scents = getUniqueValues('scent');

  // Mapeo de categorías para mostrar nombres en español
  const categoryLabels = {
    'aromaticas': 'Aromáticas',
    'decorativas': 'Decorativas',
    'tematicas': 'Temáticas'
  };

  // Mapeo de tamaños
  const sizeLabels = {
    'Small': 'Pequeña',
    'Medium': 'Mediana',
    'Large': 'Grande'
  };

  const handleFilterChange = (filterType, value, isChecked = null) => {
    let newFilters = { ...filters };

    if (filterType === 'priceMin' || filterType === 'priceMax') {
      newFilters[filterType] = value;
    } else {
      // Para arrays (categorías, tamaños, aromas)
      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      }
    }

    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      priceMin: '',
      priceMax: '',
      categories: [],
      sizes: [],
      scents: []
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const hasActiveFilters = () => {
    return filters.priceMin || filters.priceMax || 
           filters.categories.length > 0 || 
           filters.sizes.length > 0 || 
           filters.scents.length > 0;
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.priceMin || filters.priceMax) count++;
    count += filters.categories.length;
    count += filters.sizes.length;
    count += filters.scents.length;
    return count;
  };

  return (
    <div className="relative">
      {/* Botón de filtros */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
          hasActiveFilters()
            ? 'bg-rose-50 border-rose-200 text-rose-700'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}
      >
        <FunnelIcon className="h-5 w-5" />
        <span>Filtros</span>
        {getActiveFiltersCount() > 0 && (
          <span className="bg-rose-600 text-white text-xs rounded-full px-2 py-1 min-w-[1.25rem] h-5 flex items-center justify-center">
            {getActiveFiltersCount()}
          </span>
        )}
      </button>

      {/* Panel de filtros */}
      {isOpen && (
        <>
          {/* Overlay para cerrar */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel de filtros */}
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filtros Avanzados</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Filtro de precio */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Rango de Precio (HNL)</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Mínimo</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Máximo</label>
                    <input
                      type="number"
                      placeholder="1000"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Filtro de categorías */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Categorías</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={(e) => handleFilterChange('categories', category, e.target.checked)}
                        className="rounded border-gray-300 text-rose-600 focus:ring-rose-500 transition-colors duration-200"
                      />
                      <span className="text-sm text-gray-700">
                        {categoryLabels[category] || category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro de tamaños */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Tamaños</h4>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={(e) => handleFilterChange('sizes', size, e.target.checked)}
                        className="rounded border-gray-300 text-rose-600 focus:ring-rose-500 transition-colors duration-200"
                      />
                      <span className="text-sm text-gray-700">
                        {sizeLabels[size] || size}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro de aromas */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Aromas</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {scents.map(scent => (
                    <label key={scent} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.scents.includes(scent)}
                        onChange={(e) => handleFilterChange('scents', scent, e.target.checked)}
                        className="rounded border-gray-300 text-rose-600 focus:ring-rose-500 transition-colors duration-200"
                      />
                      <span className="text-sm text-gray-700">{scent}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button
                  onClick={clearFilters}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  Limpiar
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md hover:bg-rose-700 transition-colors duration-200"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvancedFilters;