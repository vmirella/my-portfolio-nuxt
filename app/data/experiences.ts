import type { Experience } from '#shared/types/index'

export const experiences: Experience[] = [
  {
    id: '1',
    period: 'Junio 2021 — Abril 2025',
    company: 'Global66',
    role: 'Frontend Developer',
    location: 'Lima, Perú',
    description:
      'Desarrollo y evolución de una plataforma administrativa interna para operaciones financieras, compliance y gestión de clientes, utilizada por aproximadamente 40 usuarios en Chile, Colombia, Argentina y Perú.',
    technologies: [
      'Vue.js 2',
      'Vuex',
      'JavaScript',
      'TypeScript',
      'BootstrapVue',
      'SCSS',
      'Axios',
      'REST APIs',
      'Vitest',
      'AWS CodeCommit',
    ],
    highlights: [
      'La plataforma evolucionó de aproximadamente 10 módulos a 26 módulos y 64 submódulos. Desarrollé 15 nuevos módulos y contribuí a la mejora de funcionalidades existentes.',
      'Asumí progresivamente mayor autonomía en el desarrollo frontend de la célula Operations y posteriormente participé en Processing y Core.',
      'Desarrollé funcionalidades para Cashcalls, Treasury, Bancolombia y Multicash, incluyendo formularios con validaciones, tablas con filtros y selección múltiple, flujos de aprobación y rechazo, vistas de detalle y logs.',
      'Contribuí a módulos de Compliance y Fraud mediante validaciones documentales, gestión de clientes y beneficiarios, blacklist, whitelist y administración de reglas antifraude.',
      'Implementé controles de acceso y visibilidad de acciones según roles y permisos de lectura y escritura.',
      'Realicé refactorizaciones y migraciones de rutas y servicios para adaptar el frontend a cambios en APIs REST, promoviendo la reutilización de componentes, helpers y servicios compartidos.',
      'Atendí incidencias de producción: analicé tickets, reproduje errores y coordiné validaciones con usuarios afectados y QA antes de la revisión e integración de las correcciones.',
      'Participé en estimaciones técnicas, definición de especificaciones, revisiones de Pull Requests y onboarding de desarrolladores; también orienté a integrantes de otras células sobre el uso de la plataforma.',
    ],
  },
  {
    id: '2',
    period: 'Junio 2019 — Abril 2021',
    company: 'Chaty',
    role: 'Desarrolladora Frontend',
    location: 'Lima, Perú',
    description:
      'Participé en dos productos: Chaty – Tienda Virtual y CMR para restaurantes, y Chaty Pago para empresas, desarrollando funcionalidades frontend con Vue.js.',
    highlights: [
      'Desarrollé funcionalidades para Chaty Pago, una solución B2B para generar y dar seguimiento a links de pago que podían compartirse por canales digitales.',
      'Contribuí a Chaty – Tienda Virtual y CMR, con funcionalidades para gestionar pedidos, clientes, productos, stock, medios de pago y servicios de delivery para restaurantes.',
      'Integré datos de la tienda mediante GraphQL y colaboré en la creación de componentes reutilizables para el sistema de diseño.',
    ],
    technologies: ['Vue.js 2', 'Vuex', 'JavaScript', 'GraphQL', 'Bitbucket'],
  },
  {
    id: '3',
    period: '2019',
    company: 'América Televisión',
    role: 'Analista de TI · Desarrollo Frontend',
    location: 'Lima, Perú',
    description:
      'Desarrollé una aplicación back-office para la gestión de contenidos multimedia, creando interfaces administrativas con Vue.js y JavaScript.',
    highlights: [],
    technologies: ['Vue.js', 'JavaScript'],
  },
]
