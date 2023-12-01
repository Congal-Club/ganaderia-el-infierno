import type { Product } from '../types/products'
import type { User } from '../types/user'
import type { Category } from '../types/categories'

export const products: Product[] = [
  {
    'id': 1,
    'model': 'Alimento Concentrado',
    'slug': 'alimento-concentrado-engorda',
    'stock': 100,
    'image': '/products/alimento-concentrado.png',
    'images': ['/products/alimento-concentrado-1.png', '/products/alimento-concentrado-2.png'],
    'price': 129.99,
    'weight': 25,
    'length': 0.9,
    'width': 0.7,
    'height': 0.5,
    'status': 'disponible',
    'description': '<p>Mejore la ganancia de peso de su ganado con nuestro alimento concentrado para engorda. Este alimento contiene una mezcla balanceada de nutrientes esenciales para un crecimiento rápido y saludable. Características destacadas:</p><ul><li><strong>Calidad</strong>: Alimento de alta calidad</li><li><strong>Nutrientes</strong>: Rico en proteínas y energía</li><li><strong>Engorda</strong>: Promueve un aumento de peso eficiente</li><li><strong>Adaptabilidad</strong>: Apto para diversas razas de ganado</li><li><strong>Origen</strong>: Elaborado por expertos en nutrición animal</li></ul>',
    'short-description': 'Mejore la ganancia de peso de su ganado con nuestro alimento concentrado para engorda.',
    'name': 'Alimento Concentrado para Engorda',
    'tag': ['alimento', 'engorda', 'nutrición'],
    'categories': ['Alimentación', 'Engorda'],
    'reviews': []
  },
  {
    'id': 2,
    'model': 'Toro Cebu',
    'slug': 'toro-cebu-alta-calidad',
    'stock': 100,
    'image': '/products/toro-cebu.png',
    'images': ['/products/toro-cebu-1.png', '/products/toro-cebu-2.png', '/products/toro-cebu-3.png'],
    'price': 60000,
    'weight': 1200,
    'length': 1.75,
    'width': 1.3,
    'height': 1.5,
    'status': 'disponible',
    'description': '<p>¡Descubra la majestuosidad y la fortaleza del Toro Cebú de Alta Calidad! Este impresionante ejemplar es la encarnación de la belleza y la resistencia que ha caracterizado a la raza Cebú a lo largo de generaciones. Nuestro Toro Cebú es la elección perfecta para criadores y amantes de ganado que buscan una inversión sólida y un compañero confiable en su operación ganadera.<br /> <br/>Características Destacadas:</p><ul><br/><li><strong>Raza</strong>: Cebú</li><li><strong>Origen</strong>: Criado con cuidado en una finca de renombre</li><li><strong>Genética</strong>: Línea pura de Cebú</li><li><strong>Fortaleza</strong>: Músculos bien definidos y una constitución robusta</li><li><strong>Temperamento</strong>: Manso y fácil de manejar</li><li><strong>Pelaje</strong>: Hermoso pelaje en tonos naturales</li><li><strong>Salud</strong>: Veterinario certificado y cuidados de primera calidad</li><li><strong>Edad</strong>: Joven y en plena madurez reproductiva</li></ul>',
    'short-description': 'Este impresionante ejemplar es la encarnación de la belleza y la resistencia que ha caracterizado a la raza Cebú a lo largo de generaciones. Nuestro Toro Cebú es la elección perfecta para criadores y amantes de ganado que buscan una inversión sólida y un compañero confiable en su operación ganadera.',
    'name': 'Toro Cebú de Alta Calidad',
    'tag': ['toro', 'cebu', 'engorda'],
    'categories': ['Toros', 'Todo'],
    'reviews': [
      {
        'name': 'Manuel',
        'email': 'maquinadefuego@gmail.com',
        'review': 'Me gusta mucho ese toro, como para semental. Soy una ganadero de gustos exigentes, me encantan los animales con esta calidad',
        'rate': 4
      }
    ]
  },
  {
    'id': 3,
    'model': 'Toro Charolais',
    'slug': 'toro-charolais-alta-calidad',
    'stock': 50,
    'image': '/products/toro-charolais.png',
    'images': ['/products/toro-charolais-1.png', '/products/toro-charolais-2.png', '/products/toro-charolais-3.png'],
    'price': 75000,
    'weight': 1300,
    'length': 1.8,
    'width': 1.4,
    'height': 1.6,
    'status': 'disponible',
    'description': '<p>Descubra la elegancia y calidad del Toro Charolais de Alta Calidad. Este ejemplar de raza Charolais es conocido por su carne de alta calidad y su temperamento dócil, lo que lo convierte en una excelente opción para ganaderos exigentes. Características destacadas:</p><ul><li><strong>Raza</strong>: Charolais</li><li><strong>Origen</strong>: Crianza selectiva en finca de renombre</li><li><strong>Genética</strong>: Línea pura de Charolais</li><li><strong>Carne</strong>: Marmoleo excepcional y sabor delicioso</li><li><strong>Temperamento</strong>: Tranquilo y fácil de manejar</li><li><strong>Pelaje</strong>: Blanco brillante y saludable</li><li><strong>Salud</strong>: Supervisión veterinaria constante</li><li><strong>Edad</strong>: En plena madurez reproductiva</li></ul>',
    'short-description': 'Descubra la elegancia y calidad del Toro Charolais de Alta Calidad, conocido por su carne de alta calidad y su temperamento dócil.',
    'name': 'Toro Charolais de Alta Calidad',
    'tag': ['toro', 'charolais', 'carne'],
    'categories': ['Toros', 'Carne'],
    'reviews': []
  },
  {
    'id': 4,
    'model': 'Becerro Hereford',
    'slug': 'becerro-hereford-registro',
    'stock': 30,
    'image': '/products/becerro-hereford.png',
    'images': ['/products/becerro-hereford-1.png', '/products/becerro-hereford-2.png', '/products/becerro-hereford-3.png'],
    'price': 45000,
    'weight': 600,
    'length': 1.2,
    'width': 1.0,
    'height': 1.1,
    'status': 'disponible',
    'description': '<p>Adquiera un becerro Hereford de registro de alta calidad con una genética excepcional. La raza Hereford es conocida por su resistencia y adaptabilidad a diferentes condiciones. Características destacadas:</p><ul><li><strong>Raza</strong>: Hereford</li><li><strong>Origen</strong>: Criado con esmero en una finca de prestigio</li><li><strong>Genética</strong>: Registro de pureza racial</li><li><strong>Adaptabilidad</strong>: Excelente resistencia a diversas condiciones</li><li><strong>Temperamento</strong>: Manso y fácil de manejar</li><li><strong>Pelaje</strong>: Blanco y rojo característico</li><li><strong>Salud</strong>: Cuidados de calidad y seguimiento veterinario</li><li><strong>Edad</strong>: Joven y en crecimiento</li></ul>',
    'short-description': 'Adquiera un becerro Hereford de registro de alta calidad con una genética excepcional.',
    'name': 'Becerro Hereford de Registro',
    'tag': ['becerro', 'hereford', 'registro'],
    'categories': ['Becerro', 'Registro'],
    'reviews': []
  },
  {
    'id': 5,
    'model': 'Forraje Nutricional',
    'slug': 'forraje-alta-nutricion',
    'stock': 200,
    'image': '/products/forraje.png',
    'images': ['/products/forraje-1.png', '/products/forraje-2.png', '/products/forraje-3.png'],
    'price': 1000,
    'weight': 50,
    'length': 1.0,
    'width': 0.5,
    'height': 0.3,
    'status': 'disponible',
    'description': '<p>Mejore la alimentación de su ganado con nuestro forraje de alta nutrición. Este forraje ha sido cuidadosamente seleccionado y procesado para brindar los nutrientes esenciales que su ganado necesita. Características destacadas:</p><ul><li><strong>Calidad</strong>: Forraje de primera calidad</li><li><strong>Nutrición</strong>: Rico en proteínas y minerales esenciales</li><li><strong>Packaging</strong>: Empaquetado para mantener la frescura</li><li><strong>Adaptabilidad</strong>: Apto para diferentes tipos de ganado</li><li><strong>Origen</strong>: Producido en fincas de confianza</li></ul>',
    'short-description': 'Mejore la alimentación de su ganado con nuestro forraje de alta nutrición.',
    'name': 'Forraje de Alta Nutrición',
    'tag': ['forraje', 'nutrición', 'alimentación'],
    'categories': ['Forraje', 'Alimentación'],
    'reviews': []
  },
  {
    'id': 6,
    'model': 'Vaca Holstein',
    'slug': 'vaca-holstein-leche',
    'stock': 40,
    'image': '/products/vaca-holstein.png',
    'images': ['/products/vaca-holstein-1.png', '/products/vaca-holstein-2.png'],
    'price': 50000,
    'weight': 800,
    'length': 1.4,
    'width': 1.2,
    'height': 1.3,
    'status': 'disponible',
    'description': '<p>Obtenga una Vaca Holstein de alta calidad conocida por su producción de leche excepcional. Esta raza es apreciada en la industria lechera por su eficiencia y cantidad de leche producida. Características destacadas:</p><ul><li><strong>Raza</strong>: Holstein</li><li><strong>Origen</strong>: Criada en una lechería de renombre</li><li><strong>Producción de Leche</strong>: Alta producción de leche</li><li><strong>Temperamento</strong>: Tranquila y adaptable</li><li><strong>Pelaje</strong>: Blanco y negro característico</li><li><strong>Salud</strong>: Control veterinario constante</li><li><strong>Edad</strong>: En plena producción lechera</li></ul>',
    'short-description': 'Obtenga una Vaca Holstein de alta calidad conocida por su producción de leche excepcional.',
    'name': 'Vaca Holstein de Leche',
    'tag': ['vaca', 'holstein', 'leche'],
    'categories': ['Vaca', 'Leche'],
    'reviews': []
  },
  {
    'id': 7,
    'model': 'Toro Angus Negro',
    'slug': 'toro-angus-negro',
    'stock': 60,
    'image': '/products/toro-angus-negro.png',
    'images': ['/products/toro-angus-negro-1.png', '/products/toro-angus-negro-2.png'],
    'price': 70000,
    'weight': 1400,
    'length': 1.7,
    'width': 1.3,
    'height': 1.4,
    'status': 'disponible',
    'description': '<p>Descubra la calidad de un Toro Angus Negro, conocido por su carne de alto marmoleo y sabor excepcional. Esta raza es apreciada en la industria de carne de res. Características destacadas:</p><ul><li><strong>Raza</strong>: Angus Negro</li><li><strong>Origen</strong>: Criado en una finca de excelencia</li><li><strong>Carne</strong>: Alta calidad, marmoleo excepcional</li><li><strong>Temperamento</strong>: Dócil y fácil de manejar</li><li><strong>Pelaje</strong>: Negro sólido y brillante</li><li><strong>Salud</strong>: Supervisión veterinaria constante</li><li><strong>Edad</strong>: Joven y en plena madurez reproductiva</li></ul>',
    'short-description': 'Descubra la calidad de un Toro Angus Negro, conocido por su carne de alto marmoleo y sabor excepcional.',
    'name': 'Toro Angus Negro',
    'tag': ['toro', 'angus', 'carne'],
    'categories': ['Toros', 'Carne'],
    'reviews': []
  },
  {
    'id': 8,
    'model': 'Suplemento Mineral',
    'slug': 'suplemento-mineral-ganado',
    'stock': 150,
    'image': '/products/suplemento-mineral.png',
    'images': ['/products/suplemento-mineral-1.png', '/products/suplemento-mineral-2.png'],
    'price': 800,
    'weight': 20,
    'length': 0.8,
    'width': 0.6,
    'height': 0.4,
    'status': 'disponible',
    'description': '<p>Mejore la salud y el rendimiento de su ganado con nuestro suplemento mineral. Este suplemento contiene los minerales esenciales que su ganado necesita para mantenerse saludable y productivo. Características destacadas:</p><ul><li><strong>Calidad</strong>: Suplemento de alta calidad</li><li><strong>Minerales</strong>: Rico en minerales esenciales</li><li><strong>Salud</strong>: Promueve la salud del ganado</li><li><strong>Adaptabilidad</strong>: Apto para diferentes tipos de ganado</li><li><strong>Origen</strong>: Formulado por expertos en nutrición animal</li></ul>',
    'short-description': 'Mejore la salud y el rendimiento de su ganado con nuestro suplemento mineral.',
    'name': 'Suplemento Mineral para Ganado',
    'tag': ['suplemento', 'mineral', 'ganado'],
    'categories': ['Alimentación', 'Salud'],
    'reviews': []
  },
  {
    'id': 9,
    'model': 'Becerro Simmental',
    'slug': 'becerro-simmental-registro',
    'stock': 50,
    'image': '/products/becerro-simmental.png',
    'images': ['/products/becerro-simmental-1.png', '/products/becerro-simmental-2.png', '/products/becerro-simmental-3.png'],
    'price': 45000,
    'weight': 600,
    'length': 1.2,
    'width': 1.0,
    'height': 1.1,
    'status': 'disponible',
    'description': '<p>Descubra la pureza y la belleza del Becerro Simmental de Registro. Este ejemplar posee una genética excepcional y es ideal para la cría selectiva de ganado. Con su temperamento dócil y sus características únicas, es una elección inteligente para ganaderos que buscan calidad.</p>',
    'short-description': 'Descubra la pureza y la belleza del Becerro Simmental de Registro. Este ejemplar posee una genética excepcional y es ideal para la cría selectiva de ganado.',
    'name': 'Becerro Simmental de Registro',
    'tag': ['becerro', 'simmental', 'registro'],
    'categories': ['Becerro', 'Todo'],
    'reviews': []
  },
  {
    'id': 10,
    'model': 'Forraje de Alfalfa',
    'slug': 'forraje-alfalfa-premium',
    'stock': 200,
    'image': '/products/forraje-alfalfa.png',
    'images': ['/products/forraje-alfalfa-1.png', '/products/forraje-alfalfa-2.png'],
    'price': 1200,
    'weight': 25,
    'length': 0.8,
    'width': 0.5,
    'height': 0.3,
    'status': 'disponible',
    'description': '<p>Nuestro Forraje de Alfalfa Premium es la elección ideal para una nutrición de primera calidad en su ganado. Rico en nutrientes y de alta digestibilidad, este forraje es esencial para mantener a su ganado saludable y en óptimas condiciones.</p>',
    'short-description': 'Nuestro Forraje de Alfalfa Premium es la elección ideal para una nutrición de primera calidad en su ganado.',
    'name': 'Forraje de Alfalfa Premium',
    'tag': ['forraje', 'alfalfa', 'nutrición'],
    'categories': ['Forraje', 'Todo'],
    'reviews': []
  }
]

export const users: User[] = [
  {
    id: 1,
    email: 'cesar@gmail.com',
    last_name: 'Villalobos Olmos',
    name: 'Cesar',
    picture: '',
    role: 'admin',
    password: '123456',
    user_name: 'chicho'
  },
  {
    id: 2,
    email: 'hector@gmail.com',
    last_name: 'Hernandez Garcia',
    name: 'Hector Felipe',
    picture: '',
    role: 'admin',
    password: '123456',
    user_name: 'pipen'
  },
  {
    id: 3,
    email: 'aranzazu@gmail.com',
    last_name: 'Messa Sanchez',
    name: 'Jimena Aranzazu',
    picture: '',
    role: 'admin',
    password: '123456',
    user_name: 'aranza'
  },
  {
    id: 4,
    email: 'manuel@gmail.com',
    last_name: 'Alvarado Ibarra',
    name: 'Manuel Alejandro',
    picture: '',
    role: 'user',
    password: '123456',
    user_name: 'aleks'
  },
  {
    id: 5,
    email: 'luis@gmail.com',
    last_name: 'Hernandez Lopez',
    name: 'Luis Angel',
    picture: '',
    role: 'user',
    password: '123456',
    user_name: 'bolby'
  }
]

export const categories: Category[] = [
  {
    id: 1,
    name: 'Alimentación',
    description: 'Alimentación',
    slug: 'alimentacion'
  },
  {
    id: 2,
    name: 'Engorda',
    description: 'Engorda',
    slug: 'engorda'
  },
  {
    id: 3,
    name: 'Toros',
    description: 'Toros',
    slug: 'toros'
  },
  {
    id: 4,
    name: 'Todo',
    description: 'Todo',
    slug: 'todo'
  },
  {
    id: 5,
    name: 'Carne',
    description: 'Carne',
    slug: 'carne'
  },
  {
    id: 6,
    name: 'Becerro',
    description: 'Becerro',
    slug: 'becerro'
  },
  {
    id: 7,
    name: 'Registro',
    description: 'Registro',
    slug: 'registro'
  },
  {
    id: 8,
    name: 'Forraje',
    description: 'Forraje',
    slug: 'forraje'
  },
  {
    id: 9,
    name: 'Vaca',
    description: 'Vaca',
    slug: 'vaca'
  },
  {
    id: 10,
    name: 'Leche',
    description: 'Leche',
    slug: 'leche'
  },
  {
    id: 11,
    name: 'Salud',
    description: 'Salud',
    slug: 'salud'
  }
]
