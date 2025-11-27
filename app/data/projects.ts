import type { Project } from '#shared/types/index'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Mi Portafolio Nuxt',
    description:
      'Después de años trabajando con Vue, quería llevar mis habilidades al siguiente nivel. Este portafolio no es solo un showcase de mis proyectos, es mi campo de experimentación con las últimas tecnologías del ecosistema Vue. Aquí aplico todo lo que aprendo día a día.',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
    image: '/images/my-portfolio.png',
    githubUrl: 'https://github.com/vmirella/my-portfolio-nuxt',
  },
  {
    id: '2',
    name: 'Twisted snake',
    description:
      'Me encantan los juegos retro con un twist. La idea de invertir los controles me pareció un desafío interesante tanto en lógica como en UX. Desarrollé este juego en Vue para demostrar que el framework no es solo para aplicaciones empresariales, también puede ser divertido.',
    technologies: ['Vue 2', 'Bootstrap'],
    image: '/images/twisted-snake.png',
    githubUrl: 'https://github.com/vmirella/twisted-snake?tab=readme-ov-file',
    demoUrl: 'https://vmirella.github.io/twisted-snake/',
  },
  {
    id: '3',
    name: 'Tienda virtual con Vue 2 & Vuex',
    description:
      'Siempre sentí curiosidad por entender cómo funcionan las tiendas online por dentro. En este proyecto me propuse construir una desde cero, enfocándome en la gestión del carrito y el estado global. Elegí la identidad de Marca Perú porque me permitía trabajar con un diseño vibrante y auténtico.',
    technologies: ['Vue 2', 'Vue router', 'Vuetify 2', 'Vuex', 'Axios'],
    image: '/images/marca-peru.png',
    githubUrl: 'https://vmirella.github.io/carrito-compras/',
    demoUrl: 'https://vmirella.github.io/carrito-compras/',
  },
  {
    id: '4',
    name: 'Pokedex',
    description:
      'Crecí jugando Pokémon, así que cuando vi este reto no lo pensé dos veces y me propuse recrear la experiencia de consultar la Pokédex del Profesor Oak, pero en la web. Fue el proyecto perfecto para practicar consumo de APIs y gestión de datos con Vuex.',
    technologies: ['Vue 2', 'Vuex', 'Bootstrap'],
    image: '/images/pokedex.png',
    githubUrl: 'https://github.com/vmirella/pokedex',
    demoUrl: 'https://vmirella.github.io/pokedex/#/',
  },

  {
    id: '5',
    name: 'Generador de carnet',
    description:
      'Generador de carnet en React. El reto era simple generar carnets personalizados, pero lo que realmente me interesaba era entender las diferencias entre ambos frameworks, Vue y React, y así expandir mi stack de herramientas.',
    technologies: ['React', 'Reactstrap'],
    image: '/images/carnet-download.png',
    githubUrl: 'https://github.com/vmirella/reto-divemotors',
    demoUrl: 'https://vmirella.github.io/reto-divemotors/',
  },
]
