import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Ubicación',
      details: [
        'Tegucigalpa, Honduras',
        'Colonia Palmira, Avenida Principal #123'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      details: [
        '+504 9999-9999',
        '+504 2222-2222'
      ]
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: [
        'info@luamcandles.com',
        'pedidos@luamcandles.com'
      ]
    },
    {
      icon: ClockIcon,
      title: 'Horarios',
      details: [
        'Lunes - Viernes: 8:00 AM - 6:00 PM',
        'Sábados: 9:00 AM - 4:00 PM'
      ]
    }
  ]

  const faqs = [
    {
      question: '¿Cuánto tiempo toma crear una vela personalizada?',
      answer: 'El tiempo de creación varía según la complejidad del diseño, pero generalmente toma entre 3-7 días hábiles. Para pedidos especiales o en grandes cantidades, puede tomar hasta 2 semanas.'
    },
    {
      question: '¿Qué tipos de personalizaciones ofrecen?',
      answer: 'Ofrecemos personalización en colores, aromas, formas, tamaños, y grabados. También podemos crear velas temáticas para eventos especiales como bodas, cumpleaños, o celebraciones corporativas.'
    },
    {
      question: '¿Hacen envíos a toda Honduras?',
      answer: 'Sí, realizamos envíos a todo el territorio hondureño. Los costos de envío varían según la ubicación y el tamaño del pedido. Ofrecemos envío gratuito para pedidos superiores a L. 1,000.'
    },
    {
      question: '¿Qué materiales utilizan en sus velas?',
      answer: 'Utilizamos exclusivamente cera de soja natural, mechas de algodón 100% natural, y aceites esenciales de alta calidad. Todos nuestros materiales son eco-amigables y no tóxicos.'
    },
    {
      question: '¿Ofrecen descuentos por volumen?',
      answer: 'Sí, ofrecemos descuentos especiales para pedidos al por mayor, eventos corporativos, y celebraciones. Contáctanos para obtener una cotización personalizada.'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-600 to-candle-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-earth-100 max-w-3xl mx-auto">
              ¿Tienes una idea especial? Trabajemos juntos para crear la vela 
              perfecta que haga realidad tu visión.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-earth-100 to-candle-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-earth-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-earth-800 mb-2">
                  Pedidos Especiales
                </h2>
                <p className="text-gray-600">
                  Cuéntanos sobre tu proyecto y te ayudaremos a crear algo único
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Información básica */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-display text-xl font-bold text-earth-800 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-earth-100 to-candle-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-earth-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-earth-800 mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 mr-3" />
                <h3 className="font-display text-xl font-bold">
                  WhatsApp Directo
                </h3>
              </div>
              <p className="mb-6 text-green-100">
                ¿Necesitas una respuesta rápida? Escríbenos por WhatsApp y te 
                atenderemos de inmediato.
              </p>
              <a 
                href="https://wa.me/50498765432?text=Hola%20Luam%20Candles,%20me%20interesa%20conocer%20más%20sobre%20sus%20velas%20artesanales"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chatear Ahora
              </a>
            </div>


          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-earth-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros 
              productos y servicios
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-cream-50 rounded-lg border border-earth-100">
                  <summary className="p-6 cursor-pointer hover:bg-earth-50 transition-colors duration-200">
                    <h3 className="font-semibold text-earth-800 inline">
                      {faq.question}
                    </h3>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-earth-600 to-candle-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Listo para Crear Algo Especial?
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            No esperes más. Contáctanos hoy y comencemos a trabajar en tu 
            proyecto de velas personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/50498765432?text=Hola%20Luam%20Candles,%20quiero%20hacer%20un%20pedido%20especial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
            <Link to="/catalogo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-earth-600 transition-colors duration-300">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact