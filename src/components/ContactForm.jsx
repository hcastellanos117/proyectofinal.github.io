import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

// Esquema de validación con Yup
const schema = yup.object({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingresa un email válido'),
  telefono: yup
    .string()
    .required('El teléfono es obligatorio')
    .matches(/^[0-9+\-\s()]+$/, 'Ingresa un teléfono válido')
    .min(8, 'El teléfono debe tener al menos 8 dígitos'),
  tipoVela: yup
    .string()
    .required('Selecciona el tipo de vela'),
  descripcion: yup
    .string()
    .required('La descripción es obligatoria')
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres')
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Datos del formulario:', data)
      
      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
      reset()
    } catch (error) {
      toast.error('Error al enviar el mensaje. Inténtalo nuevamente.')
    }
  }

  const tiposVela = [
    { value: '', label: 'Selecciona el tipo de vela' },
    { value: 'aromatica', label: 'Vela Aromática' },
    { value: 'decorativa', label: 'Vela Decorativa' },
    { value: 'tematica', label: 'Vela Temática' },
    { value: 'personalizada', label: 'Vela Personalizada' },
    { value: 'regalo', label: 'Set de Regalo' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header del formulario */}
      <div className="bg-gradient-to-r from-earth-600 to-candle-600 px-8 py-6">
        <div className="flex items-center space-x-3">
          <SparklesIcon className="w-8 h-8 text-white" />
          <div>
            <h3 className="text-2xl font-display font-bold text-white">
              Pedidos Especiales
            </h3>
            <p className="text-earth-100 mt-1">
              Cuéntanos sobre tu vela ideal y la crearemos para ti
            </p>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
            <UserIcon className="w-4 h-4 inline mr-2" />
            Nombre Completo
          </label>
          <input
            type="text"
            id="nombre"
            {...register('nombre')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors duration-200 ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <EnvelopeIcon className="w-4 h-4 inline mr-2" />
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
            <PhoneIcon className="w-4 h-4 inline mr-2" />
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            {...register('telefono')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors duration-200 ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+504 9999-9999"
          />
          {errors.telefono && (
            <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
          )}
        </div>

        {/* Tipo de vela */}
        <div>
          <label htmlFor="tipoVela" className="block text-sm font-medium text-gray-700 mb-2">
            <SparklesIcon className="w-4 h-4 inline mr-2" />
            Tipo de Vela
          </label>
          <select
            id="tipoVela"
            {...register('tipoVela')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors duration-200 ${
              errors.tipoVela ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {tiposVela.map((tipo) => (
              <option key={tipo.value} value={tipo.value}>
                {tipo.label}
              </option>
            ))}
          </select>
          {errors.tipoVela && (
            <p className="mt-1 text-sm text-red-600">{errors.tipoVela.message}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-2">
            <ChatBubbleLeftRightIcon className="w-4 h-4 inline mr-2" />
            Descripción de Personalización
          </label>
          <textarea
            id="descripcion"
            rows={4}
            {...register('descripcion')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors duration-200 resize-none ${
              errors.descripcion ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe tu vela ideal: colores, aromas, tamaño, ocasión especial, etc."
          />
          {errors.descripcion && (
            <p className="mt-1 text-sm text-red-600">{errors.descripcion.message}</p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-earth-600 hover:bg-earth-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            'Enviar Solicitud'
          )}
        </button>

        {/* Información adicional */}
        <div className="bg-cream-50 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-600 text-center">
            <strong>Tiempo de respuesta:</strong> Te contactaremos en menos de 24 horas.
            <br />
            <strong>Tiempo de elaboración:</strong> 3-7 días hábiles según la complejidad.
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm