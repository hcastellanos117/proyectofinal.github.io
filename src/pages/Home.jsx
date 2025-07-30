import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import HeroVideos from '../components/HeroVideos'
import ProductCard from '../components/ProductCard'
import { featuredProducts } from '../data/products'
import { asset } from '../utils/asset'
import { 
  HeartIcon, 
  SparklesIcon, 
  GiftIcon, 
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  // Referencias para animaciones
  const loveMadeSectionRef = useRef(null);
  const infoCardsRef = useRef([]);
  
  // Configurar observador de intersección para animaciones al hacer scroll
  useEffect(() => {
    // Animación para las tarjetas informativas
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si es una tarjeta informativa
          if (entry.target.classList.contains('info-card')) {
            setTimeout(() => {
              entry.target.classList.add('slide-in-right');
            }, parseInt(entry.target.dataset.index) * 200);
          }
          
          // Si es un elemento de la galería
          if (entry.target.classList.contains('gallery-item')) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up');
            }, parseInt(entry.target.dataset.index) * 120);
          }
          
          // Dejar de observar después de animar
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observar tarjetas informativas
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.dataset.index = index;
      observer.observe(card);
    });
    
    // Observar elementos de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.dataset.index = index;
      observer.observe(item);
    });
    
    return () => {
      // Limpiar observador
      infoCards.forEach(card => observer.unobserve(card));
      galleryItems.forEach(item => observer.unobserve(item));
    };
  }, []);
  
  const features = [
    {
      icon: HeartIcon,
      title: 'Hecho con Amor',
      description: 'Cada vela es creada artesanalmente con dedicación y cuidado especial.'
    },
    {
      icon: SparklesIcon,
      title: 'Calidad Premium',
      description: 'Utilizamos solo los mejores materiales y fragancias naturales.'
    },
    {
      icon: GiftIcon,
      title: 'Personalización',
      description: 'Creamos velas únicas según tus gustos y necesidades especiales.'
    },
    {
      icon: TruckIcon,
      title: 'Envío Seguro',
      description: 'Entregamos tus velas con el máximo cuidado en todo Honduras.'
    }
  ]

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Garantía de Calidad',
      description: 'Respaldamos cada producto con nuestra garantía de satisfacción.'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Atención Personalizada',
      description: 'Te acompañamos en todo el proceso, desde la consulta hasta la entrega.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Hero Videos - Pedidos Realizados */}
      <HeroVideos />

      {/* Productos Destacados */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras velas más populares, cada una diseñada para crear 
              momentos especiales y transformar tu espacio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onViewDetails={(product) => {
                  console.log('Ver detalles de:', product.name)
                }}
              />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/catalogo" 
              className="btn-primary inline-flex items-center"
            >
              Ver Catálogo Completo
              <SparklesIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              ¿Por qué elegir Luam Candles?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos diferenciamos por nuestro compromiso con la calidad, 
              la autenticidad y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index} 
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-earth-700 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-earth-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-candle-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-earth-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-earth-600 to-candle-600">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para crear tu vela perfecta?
          </h2>
          <p className="text-xl text-earth-100 mb-8 max-w-2xl mx-auto">
            Contáctanos y trabajemos juntos para diseñar la vela de tus sueños. 
            Cada proyecto es único, como tú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto" 
              className="bg-white text-earth-600 hover:bg-cream-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Solicitar Vela Personalizada
            </Link>
            <Link 
              to="/catalogo" 
              className="border-2 border-white text-white hover:bg-white hover:text-earth-600 font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Hecho con Amor - Sección rica en imágenes y storytelling */}
      <section className="section-padding bg-gradient-to-r from-[#FFF8F2] to-[#FDE2EE]">
        <div className="love-made-wrapper rounded-2xl overflow-hidden">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-800 mb-4">
                Hecho con Amor
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra filosofía, cuidados y políticas para nuestras velas artesanales
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 md:flex-col-reverse">
              {/* Collage de 9 fotos - Columna izquierda */}
              <div className="grid grid-cols-3 gap-3 md:order-2 lg:order-1">
                {[
                  asset('images/1-rosa-lavanda.png'),
        asset('images/2-espiritu-corcel.png'),
        asset('images/3-sol-flor.png'),
        asset('images/4-encanto-rosa.png'),
        asset('images/5-canela-especiada.png'),
        asset('images/6-ramo-encantado.png'),
        asset('images/7-encanto-osito.png'),
        asset('images/8-menta-refrescante.png'),
        asset('images/9-sandalo-mistico.png')
                ].map((img, index) => (
                  <div 
                    key={index} 
                    className="gallery-item rounded-lg overflow-hidden shadow-md"
                    style={{ 
                      animationDelay: `${index * 0.12}s`,
                      opacity: 0
                    }}
                    onLoad={(e) => {
                      // Añadir clase para animar entrada con stagger
                      setTimeout(() => {
                        e.target.parentNode.classList.add('fade-in-up');
                      }, index * 120);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`Vela artesanal LUAM - ${index + 1}`} 
                      className="w-full h-full object-cover aspect-square"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {/* Texto informativo - Columna derecha */}
              <div className="space-y-6 md:order-1 lg:order-2">
                {[
                  {
                    icon: "🪴",
                    title: "Cera de Soja 100%",
                    content: "Nuestras velas son hechas con cera de soja 100%. La cera de soja es una alternativa natural y renovable a la parafina, que quema más limpio y dura más tiempo. Además, es biodegradable y apoya a los agricultores locales."
                  },
                  {
                    icon: "🚚",
                    title: "Políticas de entrega",
                    content: "Entregas 8 días después de la confirmación del pedido. Todos nuestros productos son elaborados a mano bajo pedido para garantizar la máxima frescura y calidad. Ofrecemos envíos a todo Honduras con seguimiento en tiempo real."
                  },
                  {
                    icon: "🫙",
                    title: "Cuidados — Velas en Tarro",
                    content: "Para un quemado uniforme, la primera vez que enciendas tu vela, déjala arder por al menos 2 horas. Esto evitará el efecto túnel y aprovechará al máximo tu vela. Recorta la mecha a 1/4 de pulgada antes de cada uso."
                  },
                  {
                    icon: "✨",
                    title: "Velas Decorativas & Wax Melt",
                    content: "Ofrecemos colores y fragancias a la carta para todas nuestras velas decorativas y wax melts. Para los wax melts, utiliza un difusor de cerámica o eléctrico y coloca 1-2 cubos para disfrutar de hasta 8 horas de fragancia."
                  }
                ].map((card, index) => (
                  <div 
                    key={index} 
                    className="info-card bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden"
                    style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                    id={`info-card-${index}`}
                  >
                    <div className="info-card-icon absolute top-6 left-6 text-2xl">
                      {card.icon}
                    </div>
                    <div className="pl-12">
                      <h3 className="font-display text-xl font-semibold text-earth-800 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600">
                        {card.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "Las velas de Luam son increíbles. El aroma dura mucho tiempo y la calidad es excepcional.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                text: "Pedí una vela personalizada para mi esposa y quedó perfecta. El servicio al cliente es excelente.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                text: "Compré varias velas para mi hogar y todas son hermosas. Definitivamente volveré a comprar.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-medium text-earth-700">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home