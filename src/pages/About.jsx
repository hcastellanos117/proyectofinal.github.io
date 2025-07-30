import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { asset } from '../utils/asset'
import { 
  HeartIcon,
  SparklesIcon,
  HandRaisedIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const values = [
    {
      icon: HeartIcon,
      title: 'Autenticidad',
      description: 'Cada vela es única, creada con técnicas artesanales tradicionales y materiales de la más alta calidad.'
    },
    {
      icon: SparklesIcon,
      title: 'Empatía',
      description: 'Entendemos que cada momento especial merece una vela única que capture su esencia y significado.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Compromiso',
      description: 'Nos comprometemos con la excelencia en cada producto y con la satisfacción total de nuestros clientes.'
    },
    {
      icon: GlobeAmericasIcon,
      title: 'Sostenibilidad',
      description: 'Utilizamos ceras naturales y procesos eco-amigables para cuidar nuestro planeta.'
    },
    {
      icon: UserGroupIcon,
      title: 'Comunidad',
      description: 'Apoyamos a artesanos locales y contribuimos al desarrollo de nuestra comunidad hondureña.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovación',
      description: 'Constantemente exploramos nuevas fragancias y técnicas para ofrecer productos únicos.'
    }
  ]

  const timeline = [
    {
      year: 2023,
      title: 'Reconocimiento Nacional',
      description: 'Nos convertimos en una marca reconocida en Honduras por nuestras velas artesanales.',
      image: asset('images/timeline-2023.jpg')
    },
    {
      year: 2024,
      title: 'Innovación Continua',
      description: 'Seguimos innovando con nuevas fragancias y técnicas, manteniendo nuestra esencia artesanal.',
      image: asset('images/timeline-2024.jpg')
    },
    {
      year: 2025,
      title: 'Expansión Internacional',
      description: 'Planeamos llevar Luam Candles a mercados internacionales, compartiendo nuestra pasión por la luz y el aroma.',
      image: asset('images/timeline-2025.jpg')
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Selección de Materiales',
      description: 'Elegimos cuidadosamente ceras naturales de soja y algodón para las mechas.',
      icon: '🕯️'
    },
    {
      step: '02',
      title: 'Mezcla de Fragancias',
      description: 'Combinamos aceites esenciales premium para crear aromas únicos y duraderos.',
      icon: '🌸'
    },
    {
      step: '03',
      title: 'Moldeado Artesanal',
      description: 'Cada vela es moldeada a mano con técnicas tradicionales transmitidas por generaciones.',
      icon: '👐'
    },
    {
      step: '04',
      title: 'Curado y Acabado',
      description: 'Permitimos que cada vela cure naturalmente para garantizar la mejor calidad.',
      icon: '⏰'
    },
    {
      step: '05',
      title: 'Control de Calidad',
      description: 'Inspeccionamos cada vela para asegurar que cumple con nuestros altos estándares.',
      icon: '✨'
    },
    {
      step: '06',
      title: 'Empaque Especial',
      description: 'Empacamos cada vela con amor, lista para crear momentos mágicos.',
      icon: '🎁'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-600 to-candle-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl text-earth-100 max-w-3xl mx-auto">
              Desde Honduras para el mundo, creamos velas artesanales que iluminan 
              momentos especiales y despiertan emociones únicas.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding">
        <div className="story-wrapper">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-earth-800 mb-6 text-center">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En Luam Candles, nuestra misión es crear velas artesanales excepcionales 
                que transformen espacios ordinarios en experiencias extraordinarias. 
                Cada vela que producimos lleva consigo la pasión, dedicación y amor 
                de nuestros artesanos hondureños.
              </p>
              
              <h3 className="font-display text-2xl font-bold text-earth-800 mb-4 text-center">
                Nuestra Visión
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ser la marca líder en velas artesanales de Centroamérica, reconocida 
                por la calidad excepcional de nuestros productos y nuestro compromiso 
                con la sostenibilidad y el desarrollo de la comunidad local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía LUAM */}
      <section className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-800 mb-6">
                Nuestra Filosofía
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-rose-100">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="flex items-center justify-center mb-6">
                  <span className="text-2xl mr-2">✨</span>
                  <span className="font-semibold text-earth-800">
                    En LUAM Candles creemos que cada detalle cuenta, por eso personalizamos con amor cada creación para hacer de tus eventos momentos verdaderamente especiales.
                  </span>
                  <span className="text-2xl ml-2">✨</span>
                </p>
                
                <p>
                  Cada tarjeta, cada vela, cada empaque que sale de nuestro taller es elaborado con dedicación, cuidando los detalles y pensando en ti y en las personas que amas. Nos apasiona transformar tus ideas en recuerdos únicos que transmitan cariño, alegría y gratitud.
                </p>
                
                <p>
                  Ya sea para un baby shower, un cumpleaños, una boda o simplemente un gesto de agradecimiento, en LUAM Candles ponemos el corazón en todo lo que hacemos. Porque sabemos que cuando algo se hace con amor, se nota… y se siente.
                </p>
                
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-6 mt-8">
                  <p className="flex items-center justify-center text-xl font-semibold text-earth-800">
                    <span className="text-3xl mr-3">💜</span>
                    Gracias por confiar en nosotros para acompañarte en tus momentos más importantes.
                  </p>
                  <p className="mt-4 text-lg italic text-rose-700 font-medium">
                    Tu historia, tus colores, tu esencia… hecha vela.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-earth-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada vela que creamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-earth-100 to-candle-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-earth-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-earth-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Línea de Tiempo Mejorada */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-earth-800 mb-4">
              Nuestro Camino
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un viaje de crecimiento, aprendizaje y dedicación a la excelencia artesanal
            </p>
            <p className="text-center text-sm text-neutral-500 mt-2">
              Últimos logros y metas (2023-2025)
            </p>
          </div>

          <div className="relative">
            {/* Línea central con gradiente rosa→ámbar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-rose-200/70 to-amber-200/70 rounded-full hidden md:block"></div>
            
            {/* Grid responsivo para alternancia */}
            <div className="space-y-14 lg:space-y-20">
              {timeline
                .filter(e => e.year >= 2023)
                .map((item, index) => {
                // Animaciones de entrada desde izquierda/derecha
                const slideVariants = {
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.55,
                      ease: 'easeOut'
                    }
                  }
                }

                // Animación de pulso para el punto de hito
                const pulseVariants = {
                  pulse: {
                    scale: [1, 1.15, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }
                  }
                }

                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={slideVariants}
                    className={`grid grid-cols-1 md:grid-cols-9 gap-6 items-center ${
                      index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                    }`}
                  >
                    {/* Tarjeta - Lado izquierdo en pares, derecho en impares */}
                    <div className={`md:col-span-4 ${
                      index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
                    }`}>
                      <div className="w-full lg:w-[380px] bg-white rounded-2xl shadow-xl border border-rose-50 overflow-hidden mx-auto">
                        {/* Imagen hero */}
                        <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                          <img
                            src={item.image}
                            alt={`${item.year} - ${item.title}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              console.error(`Error loading image: ${item.image}. Verifique que el archivo existe y es accesible.`);
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-amber-50 text-neutral-500"><span class="text-sm font-medium">${item.year} - ${item.title}</span></div>`;
                            }}
                            onLoad={() => console.log(`Image loaded successfully: ${item.image}`)}
                          />
                        </div>
                        
                        {/* Contenido de la tarjeta */}
                        <div className="p-6">
                          <h4 className="text-lg font-semibold text-neutral-800 mb-3">
                            {item.year} · {item.title}
                          </h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Punto de hito con icono */}
                    <div className="md:col-span-1 md:col-start-5 flex justify-center">
                      <motion.div
                        variants={pulseVariants}
                        animate="pulse"
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-400 text-white ring-4 ring-rose-100 z-10"
                        aria-label={`Hito ${item.year}`}
                      >
                        <SparklesIcon className="w-3 h-3" />
                      </motion.div>
                    </div>

                    {/* Espacio para mantener el grid en móviles */}
                    <div className="hidden md:block md:col-span-4"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Artesanal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-earth-800 mb-4">
              Nuestro Proceso Artesanal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada vela pasa por un cuidadoso proceso de 6 pasos que garantiza 
              la máxima calidad y atención al detalle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-cream-50 to-earth-50 rounded-xl p-6 h-full border border-earth-100 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-earth-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {step.step}
                    </div>
                    <div className="text-2xl">{step.icon}</div>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-earth-800 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-earth-600 to-candle-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            ¿Listo para Experimentar la Magia?
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Descubre nuestra colección completa y encuentra la vela perfecta 
            para cada momento especial de tu vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo" className="bg-white text-earth-600 px-8 py-3 rounded-lg font-semibold hover:bg-cream-50 transition-colors duration-300">
              Ver Catálogo
            </Link>
            <Link to="/contacto" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-earth-600 transition-colors duration-300">
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About