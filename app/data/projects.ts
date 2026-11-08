import type { Project } from '#shared/types/index'

export const projects: Project[] = [
  {
    id: '1',
    name: 'Tienda virtual con Vue 3 & Pinia',
    description:
      'Catálogo de compra desarrollado con Vue 3 y Vuetify 3, conectado a una API externa. Proyecto iniciado en 2019 y actualizado para seguir practicando el ecosistema Vue, la navegación y la gestión del carrito.',
    technologies: ['Vue 3', 'Vue Router', 'Vuetify 3', 'Pinia', 'Axios'],
    image: '/images/marca-peru.png',
    githubUrl: 'https://github.com/vmirella/carrito-compras',
    demoUrl: 'https://vmirella.github.io/carrito-compras/',
  },
  {
    id: '2',
    name: 'Sales Dashboard · React & Next.js',
    description:
      'Dashboard de ventas para una tienda online ficticia, desarrollado con React 19, Next.js 16 y TypeScript. Incluye KPIs comparativos, gráficos de ingresos, tabla de órdenes con búsqueda, orden y paginación, y filtros de fechas sincronizados con la URL.',
    technologies: [
      'React 19',
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS 4',
      'Recharts',
    ],
    image: '/images/dashboard-light.png',
    githubUrl: 'https://github.com/vmirella/sales-dashboard',
    demoUrl: 'https://next-sales-dashboard-vmirella.vercel.app/',
  },
  {
    id: '3',
    name: 'Squirloop  · Vue 3 & Canvas',
    description:
      'Juego web desarrollado con Vue 3 y Vite en el que una ardilla recoge bellotas en un tablero de bosque. Incluye niveles de dificultad, controles de teclado y táctiles, renderizado con Canvas y un ranking local de puntuaciones guardado en localStorage.',
    technologies: [
      'Vue 3',
      'Vite',
      'Vue Router',
      'JavaScript',
      'Canvas',
      'CSS',
      'localStorage',
    ],
    image:
      'https://raw.githubusercontent.com/vmirella/twisted-snake/master/docs/screenshots/game-preview.gif',
    // image: '/images/twisted-snake.png',
    githubUrl: 'https://github.com/vmirella/twisted-snake',
    demoUrl: 'https://twisted-snake.vercel.app/',
  },
]
