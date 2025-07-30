// Datos de productos de Luam Candles - 74 velas artesanales
import { slugMap } from './slugMap.js';
import { asset } from '../utils/asset.js';

const rawProducts = [
  // Velas Aromáticas Clásicas (25 productos)
  {
    id: 1,
    name: "Vela Rosa y Lavanda",
    category: "aromaticas",
    img: asset('images/1-rosa-lavanda.png'),
    scent: "Lavanda",
    size: "Medium",
    price: 450,
    description: "Vela artesanal con esencia de lavanda francesa, perfecta para relajación y meditación."
  },
  {
    id: 2,
    name: "Vela Espíritu del Corcel",
    category: "aromaticas",
    img: asset('images/2-espiritu-corcel.png'),
    scent: "Vainilla",
    size: "Large",
    price: 520,
    description: "Aroma dulce y cálido de vainilla natural que crea un ambiente acogedor."
  },
  {
    id: 3,
    name: "Vela Sol en Flor",
    category: "aromaticas",
    img: asset('images/3-sol-flor.png'),
    scent: "Eucalipto",
    size: "Medium",
    price: 480,
    description: "Fragancia refrescante de eucalipto que purifica el ambiente."
  },
  {
    id: 4,
    name: "Vela Encanto Rosa",
    category: "aromaticas",
    img: asset('images/4-encanto-rosa.png'),
    scent: "Rosa",
    size: "Small",
    price: 380,
    description: "Delicado aroma de rosas frescas para momentos especiales."
  },
  {
    id: 5,
    name: "Vela Canela Especiada",
    category: "aromaticas",
    img: asset('images/5-canela-especiada.png'),
    scent: "Canela",
    size: "Medium",
    price: 460,
    description: "Aroma cálido y especiado de canela que evoca la comodidad del hogar."
  },
  {
    id: 6,
    name: "Vela Ramo Encantado",
    category: "aromaticas",
    img: asset('images/6-ramo-encantado.png'),
    scent: "Limón",
    size: "Large",
    price: 500,
    description: "Fragancia cítrica revitalizante que energiza cualquier espacio."
  },
  {
    id: 7,
    name: "Vela Encanto de Osito",
    category: "aromaticas",
    img: asset('images/7-encanto-osito.png'),
    scent: "Jazmín",
    size: "Medium",
    price: 490,
    description: "Aroma exótico de jazmín para noches románticas y relajantes."
  },
  {
    id: 8,
    name: "Vela Menta Refrescante",
    category: "aromaticas",
    img: asset('images/8-menta-refrescante.png'),
    scent: "Menta",
    size: "Small",
    price: 360,
    description: "Fragancia mentolada que refresca y revitaliza el ambiente."
  },
  {
    id: 9,
    name: "Vela Sándalo Místico",
    category: "aromaticas",
    img: asset('images/9-sandalo-mistico.png'),
    scent: "Sándalo",
    size: "Large",
    price: 550,
    description: "Aroma profundo y místico de sándalo para meditación profunda."
  },
  {
    id: 10,
    name: "Vela Naranja Alegre",
    category: "aromaticas",
    img: asset('images/10-naranja-alegre.png'),
    scent: "Naranja",
    size: "Medium",
    price: 440,
    description: "Fragancia cítrica alegre que llena de energía positiva."
  },
  {
    id: 11,
    name: "Vela Bergamota Elegante",
    category: "aromaticas",
    img: asset('images/11-bergamota-citrica.png'),
    scent: "Bergamota",
    size: "Large",
    price: 530,
    description: "Aroma sofisticado de bergamota para ambientes elegantes."
  },
  {
    id: 12,
    name: "Vela Cedro Natural",
    category: "aromaticas",
    img: asset('images/12-cedro-bosque.png'),
    scent: "Cedro",
    size: "Medium",
    price: 470,
    description: "Fragancia amaderada de cedro que conecta con la naturaleza."
  },
  {
    id: 13,
    name: "Vela Gardenia Delicada",
    category: "aromaticas",
    img: asset('images/13-ylang-ylang.png'),
    scent: "Gardenia",
    size: "Small",
    price: 390,
    description: "Aroma floral delicado de gardenia para momentos íntimos."
  },
  {
    id: 14,
    name: "Vela Pachulí Bohemio",
    category: "aromaticas",
    img: asset('images/14-romero-herbal.png'),
    scent: "Pachulí",
    size: "Large",
    price: 540,
    description: "Fragancia bohemia de pachulí para espíritus libres."
  },
  {
    id: 15,
    name: "Vela Coco Tropical",
    category: "aromaticas",
    img: asset('images/15-geranio-floral.png'),
    scent: "Coco",
    size: "Medium",
    price: 450,
    description: "Aroma tropical de coco que transporta a playas paradisíacas."
  },
  {
    id: 16,
    name: "Vela Almendra Dulce",
    category: "aromaticas",
    img: asset('images/16-pachuli-terroso.png'),
    scent: "Almendra",
    size: "Small",
    price: 370,
    description: "Fragancia dulce y nutritiva de almendra para el bienestar."
  },
  {
    id: 17,
    name: "Vela Incienso Sagrado",
    category: "aromaticas",
    img: asset('images/17-mandarina-dulce.png'),
    scent: "Incienso",
    size: "Large",
    price: 560,
    description: "Aroma sagrado de incienso para rituales y meditación."
  },
  {
    id: 18,
    name: "Vela Magnolia Primaveral",
    category: "aromaticas",
    img: asset('images/18-tomillo-silvestre.png'),
    scent: "Magnolia",
    size: "Medium",
    price: 480,
    description: "Fragancia floral fresca de magnolia que celebra la primavera."
  },
  {
    id: 19,
    name: "Vela Tomillo Herbal",
    category: "aromaticas",
    img: asset('images/19-gardenia-nocturna.png'),
    scent: "Tomillo",
    size: "Small",
    price: 350,
    description: "Aroma herbal de tomillo que purifica y protege el hogar."
  },
  {
    id: 20,
    name: "Vela Ámbar Dorado",
    category: "aromaticas",
    img: asset('images/20-albahaca-fresca.png'),
    scent: "Ámbar",
    size: "Large",
    price: 580,
    description: "Fragancia cálida y dorada de ámbar para noches especiales."
  },
  {
    id: 21,
    name: "Vela Romero Estimulante",
    category: "aromaticas",
    img: asset('images/21-vetiver-elegante.png'),
    scent: "Romero",
    size: "Medium",
    price: 460,
    description: "Aroma estimulante de romero que mejora la concentración."
  },
  {
    id: 22,
    name: "Vela Violeta Nostálgica",
    category: "aromaticas",
    img: asset('images/22-pomelo-energizante.png'),
    scent: "Violeta",
    size: "Small",
    price: 380,
    description: "Fragancia nostálgica de violeta que evoca recuerdos dulces."
  },
  {
    id: 23,
    name: "Vela Jengibre Picante",
    category: "aromaticas",
    img: asset('images/23-incienso-sagrado.png'),
    scent: "Jengibre",
    size: "Large",
    price: 510,
    description: "Aroma picante y energizante de jengibre fresco."
  },
  {
    id: 24,
    name: "Vela Madreselva Silvestre",
    category: "aromaticas",
    img: asset('images/24-lemongrass-tropical.png'),
    scent: "Madreselva",
    size: "Medium",
    price: 470,
    description: "Fragancia silvestre de madreselva que conecta con la naturaleza."
  },
  {
    id: 25,
    name: "Vela Clavo Especiado",
    category: "aromaticas",
    img: asset('images/25-neroli-delicado.png'),
    scent: "Clavo",
    size: "Small",
    price: 360,
    description: "Aroma especiado de clavo que calienta el corazón."
  },

  // Velas Decorativas (25 productos)
  {
    id: 26,
    name: "Vela Pilar Marfil",
    category: "decorativas",
    img: asset('images/26-cristal-aurora.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 420,
    description: "Elegante vela pilar en tono marfil para decoración sofisticada."
  },
  {
    id: 27,
    name: "Vela Flotante Dorada",
    category: "decorativas",
    img: asset('images/27-perla-oceano.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 280,
    description: "Vela flotante dorada perfecta para centros de mesa románticos."
  },
  {
    id: 28,
    name: "Vela Cónica Roja",
    category: "decorativas",
    img: asset('images/28-diamante-brillante.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 320,
    description: "Vela cónica en rojo intenso para cenas elegantes."
  },
  {
    id: 29,
    name: "Vela Cubo Minimalista",
    category: "decorativas",
    img: asset('images/29-esmeralda-bosque.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 380,
    description: "Diseño cúbico minimalista para decoración moderna."
  },
  {
    id: 30,
    name: "Vela Espiral Artística",
    category: "decorativas",
    img: asset('images/30-zafiro-nocturno.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 480,
    description: "Vela con forma espiral única, obra de arte funcional."
  },
  {
    id: 31,
    name: "Vela Cilíndrica Azul",
    category: "decorativas",
    img: asset('images/31-rubi-pasion.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 350,
    description: "Vela cilíndrica en azul sereno para ambientes tranquilos."
  },
  {
    id: 32,
    name: "Vela Estrella Navideña",
    category: "decorativas",
    img: asset('images/32-topacio-dorado.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 300,
    description: "Vela en forma de estrella perfecta para decoración navideña."
  },
  {
    id: 33,
    name: "Vela Corazón Romántico",
    category: "decorativas",
    img: asset('images/33-amatista-mistico.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 360,
    description: "Vela en forma de corazón para ocasiones románticas."
  },
  {
    id: 34,
    name: "Flor Gerbera Naranja",
    category: "decorativas",
    img: asset('images/34-cuarzo-transparente.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 520,
    description: "Diseño inspirado en flor de loto para espacios zen."
  },
  {
    id: 35,
    name: "Vela Geométrica Hexagonal",
    category: "decorativas",
    img: asset('images/35-jade-serenidad.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 390,
    description: "Vela hexagonal con diseño geométrico contemporáneo."
  },
  {
    id: 36,
    name: "Vela Tronco Natural",
    category: "decorativas",
    img: asset('images/36-opalo-iridiscente.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 450,
    description: "Vela con textura de tronco para decoración rústica."
  },
  {
    id: 37,
    name: "Vela Ondulada Verde",
    category: "decorativas",
    img: asset('images/37-turquesa-calma.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 370,
    description: "Vela con superficie ondulada en verde natural."
  },
  {
    id: 38,
    name: "Vela Cristal Transparente",
    category: "decorativas",
    img: asset('images/38-granate-intenso.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 290,
    description: "Vela transparente como cristal para efectos lumínicos."
  },
  {
    id: 39,
    name: "Vela Mármol Elegante",
    category: "decorativas",
    img: asset('images/39-citrino-solar.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 550,
    description: "Vela con efecto mármol para decoración de lujo."
  },
  {
    id: 40,
    name: "Set Arquitectónico Bambú",
    category: "decorativas",
    img: asset('images/40-onix-negro.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 400,
    description: "Vela ecológica con textura de bambú natural."
  },
  {
    id: 41,
    name: "Bolas Rosas de Bergamota",
    category: "decorativas",
    img: asset('images/41-perla-nacarada.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 320,
    description: "Vela con acabado nacarado como perla preciosa."
  },
  {
    id: 42,
    name: "Vela Leoncito Festivo",
    category: "decorativas",
    img: asset('images/42-esmeralda-bosque.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 340,
    description: "Vela en forma de cactus para decoración juvenil."
  },
  {
    id: 43,
    name: "Vela Taza de Almendra",
    category: "decorativas",
    img: asset('images/43-lapislazuli-profundo.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 460,
    description: "Vela inspirada en conchas marinas para ambientes costeros."
  },
  {
    id: 44,
    name: "Vela Pirámide Mística",
    category: "decorativas",
    img: asset('images/44-aguamarina-oceano.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 410,
    description: "Vela piramidal con energía mística y decorativa."
  },
  {
    id: 45,
    name: "Vela Huevo Pascual",
    category: "decorativas",
    img: asset('images/45-coral-marino.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 280,
    description: "Vela en forma de huevo para celebraciones pascuales."
  },
  {
    id: 46,
    name: "Vela Diamante Brillante",
    category: "decorativas",
    img: asset('images/46-diamante-brillante.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 580,
    description: "Vela con forma de diamante que refleja la luz bellamente."
  },
  {
    id: 47,
    name: "Vela Caracola Oceánica",
    category: "decorativas",
    img: asset('images/47-caracola-oceanica.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 380,
    description: "Vela en forma de caracola que evoca el océano."
  },
  {
    id: 48,
    name: "Vela Torre Arquitectónica",
    category: "decorativas",
    img: asset('images/48-torre-arquitectonica.png'),
    scent: "Sin fragancia",
    size: "Large",
    price: 500,
    description: "Vela con diseño arquitectónico moderno y elegante."
  },
  {
    id: 49,
    name: "Vela Gota de Agua",
    category: "decorativas",
    img: asset('images/49-gota-agua.png'),
    scent: "Sin fragancia",
    size: "Small",
    price: 260,
    description: "Vela en forma de gota de agua, símbolo de pureza."
  },
  {
    id: 50,
    name: "Vela Origami Artística",
    category: "decorativas",
    img: asset('images/50-origami-artistico.png'),
    scent: "Sin fragancia",
    size: "Medium",
    price: 420,
    description: "Vela inspirada en el arte del origami japonés."
  },

  // Velas Temáticas (25 productos)
  {
    id: 51,
    name: "Mini Calabazas Otoñales",
    category: "tematicas",
    img: asset('images/51-calabazas-otonales.png'),
    scent: "Canela y naranja",
    size: "Large",
    price: 480,
    description: "Vela temática de Halloween con aroma especiado."
  },
  {
    id: 52,
    name: "Vela Navidad Pino",
    category: "tematicas",
    img: asset('images/52-navidad-pino.png'),
    scent: "Pino y canela",
    size: "Medium",
    price: 450,
    description: "Vela navideña con fragancia de bosque invernal."
  },
  {
    id: 53,
    name: "Vela San Valentín Corazón",
    category: "tematicas",
    img: asset('images/53-san-valentin-corazon.png'),
    scent: "Rosa y vainilla",
    size: "Small",
    price: 380,
    description: "Vela romántica para el Día de San Valentín."
  },
  {
    id: 54,
    name: "Vela Pascua Conejo",
    category: "tematicas",
    img: asset('images/54-pascua-conejo.png'),
    scent: "Flores primaverales",
    size: "Medium",
    price: 420,
    description: "Vela pascual con aroma floral primaveral."
  },
  {
    id: 55,
    name: "Vela Cumpleaños Número",
    category: "tematicas",
    img: asset('images/55-cumpleanos-numero.png'),
    scent: "Vainilla y fresa",
    size: "Small",
    price: 320,
    description: "Vela personalizable en forma de número para cumpleaños."
  },
  {
    id: 56,
    name: "Vela Graduación Birrete",
    category: "tematicas",
    img: asset('images/56-graduacion-birrete.png'),
    scent: "Éxito y triunfo",
    size: "Medium",
    price: 460,
    description: "Vela conmemorativa para celebrar graduaciones."
  },
  {
    id: 57,
    name: "Vela Baby Shower Bebé",
    category: "tematicas",
    img: asset('images/57-baby-shower.png'),
    scent: "Talco y lavanda",
    size: "Small",
    price: 350,
    description: "Vela tierna para celebraciones de baby shower."
  },
  {
    id: 58,
    name: "Vela Frasco Ceremonial",
    category: "tematicas",
    img: asset('images/58-frasco-ceremonial.png'),
    scent: "Rosas blancas",
    size: "Large",
    price: 520,
    description: "Vela elegante para ceremonias de boda."
  },
  {
    id: 59,
    name: "Centro Floral Rosado",
    category: "tematicas",
    img: asset('images/59-centro-floral-rosado.png'),
    scent: "Jardín de flores",
    size: "Medium",
    price: 440,
    description: "Vela especial para honrar a las madres."
  },
  {
    id: 60,
    name: "Vela Día del Padre Corbata",
    category: "tematicas",
    img: asset('images/60-dia-padre-corbata.png'),
    scent: "Madera y cuero",
    size: "Medium",
    price: 430,
    description: "Vela masculina para celebrar a los padres."
  },
  {
    id: 61,
    name: "Vela Año Nuevo Champagne",
    category: "tematicas",
    img: asset('images/61-ano-nuevo-champagne.png'),
    scent: "Burbujas y celebración",
    size: "Large",
    price: 500,
    description: "Vela festiva para recibir el año nuevo."
  },
  {
    id: 62,
    name: "Vela Acción de Gracias Pavo",
    category: "tematicas",
    img: asset('images/62-accion-gracias-pavo.png'),
    scent: "Especias otoñales",
    size: "Large",
    price: "490",
    description: "Vela temática para Acción de Gracias."
  },
  {
    id: 63,
    name: "Vela Independencia Bandera",
    category: "tematicas",
    img: asset('images/63-independencia-bandera.png'),
    scent: "Patriótico",
    size: "Medium",
    price: 410,
    description: "Vela patriótica para celebraciones nacionales."
  },
  {
    id: 64,
    name: "Vela Día del Maestro Manzana",
    category: "tematicas",
    img: asset('images/64-dia-maestro-manzana.png'),
    scent: "Manzana verde",
    size: "Small",
    price: 340,
    description: "Vela especial para honrar a los educadores."
  },
  {
    id: 65,
    name: "Vela Quinceañera Princesa",
    category: "tematicas",
    img: asset('images/65-quinceanera-princesa.png'),
    scent: "Dulce princesa",
    size: "Large",
    price: 550,
    description: "Vela elegante para celebraciones de quinceañera."
  },
  {
    id: 66,
    name: "Vela Aniversario Corazones",
    category: "tematicas",
    img: asset('images/66-aniversario-corazones.png'),
    scent: "Amor eterno",
    size: "Medium",
    price: 470,
    description: "Vela romántica para aniversarios especiales."
  },
  {
    id: 67,
    name: "Vela Retiro Espiritual Om",
    category: "tematicas",
    img: asset('images/67-retiro-espiritual-om.png'),
    scent: "Incienso sagrado",
    size: "Large",
    price: "510",
    description: "Vela para meditación y retiros espirituales."
  },
  {
    id: 68,
    name: "Vela Spa Relajación",
    category: "tematicas",
    img: asset('images/68-spa-relajacion.png'),
    scent: "Eucalipto y menta",
    size: "Medium",
    price: 480,
    description: "Vela perfecta para sesiones de spa en casa."
  },
  {
    id: 69,
    name: "Vela Yoga Loto",
    category: "tematicas",
    img: asset('images/69-yoga-loto.png'),
    scent: "Serenidad",
    size: "Small",
    price: 360,
    description: "Vela para acompañar prácticas de yoga."
  },
  {
    id: 70,
    name: "Vela Fiesta Tropical Piña",
    category: "tematicas",
    img: asset('images/70-fiesta-tropical-pina.png'),
    scent: "Piña colada",
    size: "Large",
    price: 490,
    description: "Vela tropical para fiestas veraniegas."
  },
  {
    id: 71,
    name: "Vela Camping Fogata",
    category: "tematicas",
    img: asset('images/71-camping-fogata.png'),
    scent: "Humo de leña",
    size: "Medium",
    price: 420,
    description: "Vela que evoca noches de camping junto al fuego."
  },
  {
    id: 72,
    name: "Vela Playa Caracola",
    category: "tematicas",
    img: asset('images/72-playa-caracola.png'),
    scent: "Brisa marina",
    size: "Large",
    price: 460,
    description: "Vela que transporta a playas paradisíacas."
  },
  {
    id: 73,
    name: "Vela Jardín Mariposa",
    category: "tematicas",
    img: asset('images/73-jardin-mariposa.png'),
    scent: "Flores silvestres",
    size: "Small",
    price: 380,
    description: "Vela que celebra la belleza de los jardines."
  },
  {
    id: 74,
    name: "Vela Café Grano",
    category: "tematicas",
    img: asset('images/74-cafe-grano.png'),
    scent: "Café recién molido",
    size: "Medium",
    price: 440,
    description: "Vela para amantes del café y momentos acogedores."
  }
];

// Aplicar slugMap para rutas de imágenes limpias
export const products = rawProducts.map(p => ({
  ...p,
  img: slugMap[p.id] ?? p.img.replace(/ /g, '%20') // fallback encode
}));

// Categorías disponibles
export const categories = [
  { id: 'todas', name: 'Todas las Velas', count: 74 },
  { id: 'aromaticas', name: 'Aromáticas', count: 25 },
  { id: 'decorativas', name: 'Decorativas', count: 25 },
  { id: 'tematicas', name: 'Temáticas', count: 24 }
];

// Productos destacados para la página principal
export const featuredProducts = products.slice(0, 4);
