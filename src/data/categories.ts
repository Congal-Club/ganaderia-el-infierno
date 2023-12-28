import type { Category } from '../types/category'

export const categories: Category[] = [
  {
    id: 1,
    name: 'Alimentación',
    description: 'Encuentra una amplia selección de productos y alimentos especializados para la nutrición óptima de tu ganado. Desde piensos balanceados hasta suplementos alimenticios.',
    slug: 'alimentacion',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Engorda',
    description: 'Descubre productos y herramientas para el proceso de engorda de tus animales. Contamos con alimentos de alta calidad y aditivos que aseguran un aumento de peso saludable. Asi también como animales para que comiences tu engorda rápidamente.',
    slug: 'engorda',
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    name: 'Carne',
    description: 'Explora nuestra selección animales con la carne de la mejor calidad, certificados y registrados para que comiences tu negocio de venta de carne.',
    slug: 'carne',
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    name: 'Toros',
    description: 'Explora nuestra categoría dedicada a los toros, aquí encontraras los toros y ejemplares mas bonitas y con los mejores cuidados, carne de la mejor calidad, ademas que encontrarás productos específicos para el cuidado, reproducción y bienestar de estos animales de gran importancia en la ganadería.',
    slug: 'toros',
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    name: 'Todo',
    description: 'Descubre todo lo que necesitas para la ganadería en un solo lugar. Desde animales de la mejor calidad, alimentos y cuidados, hasta productos especializados para cada etapa del desarrollo de tu ganado.',
    slug: 'todo',
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    name: 'Becerro',
    description: 'Encuentra becerros de alta calidad para tu ganadería. Desde terneros recién nacidos hasta animales jóvenes, ofrecemos una variedad de opciones para tus necesidades específicas.',
    slug: 'becerro',
    created_at: new Date().toISOString()
  },
  {
    id: 7,
    name: 'Registro',
    description: 'Descubre todos los animales cuyo proceso de registro y documentación de la información relacionada con el ganado, esta en total regla, con certificaciones que garantizan la mas alta calidad de los animales incluyendo datos genealógicos y de salud.',
    slug: 'registro',
    created_at: new Date().toISOString()
  },
  {
    id: 8,
    name: 'Forraje',
    description: 'Optimiza la alimentación de tu ganado con nuestro surtido de forrajes de alta calidad. Encuentra opciones nutritivas para mejorar la salud y productividad de tus animales.',
    slug: 'forraje',
    created_at: new Date().toISOString()
  },
  {
    id: 9,
    name: 'Vaca',
    description: 'Descubre todos los ejemplares de vacas que tenemos para ofrecerte, aquí podrías encontrar vacas para crianza y para producción de leche de la mejor calidad, con las cuales podrás tener un estable totalmente prospero.',
    slug: 'vaca',
    created_at: new Date().toISOString()
  },
  {
    id: 10,
    name: 'Leche',
    description: 'Optimiza la producción de leche con nuestros productos especializados. Encuentra alimentos y suplementos que aseguran una leche de calidad y un ganado lechero saludable.',
    slug: 'leche',
    created_at: new Date().toISOString()
  },
  {
    id: 11,
    name: 'Salud',
    description: 'Mantén la salud óptima de tu ganado con nuestra selección de productos para cuidados veterinarios. Desde medicamentos preventivos hasta accesorios para mantener a tus animales en su mejor estado.',
    slug: 'salud',
    created_at: new Date().toISOString()
  }
]
