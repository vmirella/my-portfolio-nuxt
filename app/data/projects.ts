import type { Project } from '#shared/types/index'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Mi Portafolio Nuxt',
    description:
      'Un portafolio personal construido con Nuxt 4, Vue 3, TypeScript y Tailwind CSS 3.',
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
    image: '/images/my-portfolio.png',
    githubUrl: 'https://github.com/tu-usuario/my-portfolio-nuxt',
  },
  {
    id: '2',
    name: 'Tienda virtual con Vue 2 & Vuex',
    description:
      'Marca Perú es una tienda virtual con gestión de estado global.',
    technologies: ['Vue 2', 'Vue router', 'Vuetify 2', 'Vuex', 'Axios'],
    image: '/images/marca-peru.png',
    githubUrl: 'https://vmirella.github.io/carrito-compras/',
    demoUrl: 'https://vmirella.github.io/carrito-compras/',
  },
  {
    id: '3',
    name: 'Pokedex',
    description:
      'La enciclopedia digital creada por el Profesor Oak es una herramienta invaluable para los entrenadores en el mundo Pokémon.',
    technologies: ['Vue 2', 'Vuex', 'Bootstrap'],
    image: '/images/pokedex.png',
    githubUrl: 'https://github.com/vmirella/pokedex',
    demoUrl: 'https://vmirella.github.io/pokedex/#/',
  },
  {
    id: '4',
    name: 'Twisted snake',
    description:
      'Un juego desarrolado en Vue 2, ayuda a la ardilla a atrapar su bellota las direcciones estan invertidas.',
    technologies: ['Vue 2', 'Bootstrap'],
    image: '/images/twisted-snake.png',
    githubUrl: 'https://github.com/vmirella/twisted-snake?tab=readme-ov-file',
    demoUrl: 'https://vmirella.github.io/twisted-snake/',
  },
  {
    id: '5',
    name: 'Generador de carnet',
    description: 'Generador de carnet desarrollado en React.',
    technologies: ['React', 'Reactstrap'],
    image: '/images/carnet-download.png',
    githubUrl: 'https://github.com/vmirella/reto-divemotors',
    demoUrl: 'mirella.github.io/reto-divemotors/',
  },
]
