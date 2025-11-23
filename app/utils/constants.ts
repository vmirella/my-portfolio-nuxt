// Constants for the portfolio application

export const SITE_CONFIG = {
  name: 'Virginia Contreras',
  title: 'Virginia Contreras - Desarrolladora Frontend',
  description:
    'Desarrolladora Front-End con más de 6 años de experiencia especializada en Vue.js',
  url: 'https://virginiacontreras.com',
  author: 'Virginia Contreras',
  email: 'virginiacontrerasvillafuerte@gmail.com',
  location: 'Lima, Perú',
  keywords: [
    'Vue.js',
    'Frontend',
    'Desarrolladora',
    'JavaScript',
    'TypeScript',
    'Nuxt',
    'React',
    'CSS',
    'HTML',
    'Tailwind CSS',
  ],
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/vmirella',
  linkedin: 'https://linkedin.com/in/virginia-contreras',
  email: 'mailto:virginiacontrerasvillafuerte@gmail.com',
} as const

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', href: '/', id: 'hero' },
  { name: 'Sobre mí', href: '/#about', id: 'about' },
  { name: 'Experiencia', href: '/#experience', id: 'experience' },
  { name: 'Habilidades', href: '/#skills', id: 'skills' },
  { name: 'Proyectos', href: '/#projects', id: 'projects' },
  { name: 'Contacto', href: '/#contact', id: 'contact' },
] as const

export const THEME_COLORS = {
  primary: {
    light: '#3b82f6',
    dark: '#60a5fa',
  },
  secondary: {
    light: '#22c55e',
    dark: '#4ade80',
  },
  accent: {
    light: '#d946ef',
    dark: '#e879f9',
  },
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 800,
} as const

export const SKILLS_CATEGORIES = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Herramientas',
  design: 'Diseño',
  other: 'Otros',
} as const

export const PROJECT_TYPES = {
  web: 'Aplicación Web',
  mobile: 'Aplicación Móvil',
  desktop: 'Aplicación de Escritorio',
  library: 'Librería',
  tool: 'Herramienta',
  other: 'Otro',
} as const

export const EXPERIENCE_TYPES = {
  fullTime: 'Tiempo Completo',
  partTime: 'Medio Tiempo',
  contract: 'Contrato',
  freelance: 'Freelance',
  internship: 'Prácticas',
} as const

export const CONTACT_FORM_FIELDS = {
  name: {
    label: 'Nombre',
    placeholder: 'Tu nombre completo',
    required: true,
    type: 'text',
  },
  email: {
    label: 'Email',
    placeholder: 'tu@email.com',
    required: true,
    type: 'email',
  },
  subject: {
    label: 'Asunto',
    placeholder: 'Asunto del mensaje',
    required: true,
    type: 'text',
  },
  message: {
    label: 'Mensaje',
    placeholder: 'Escribe tu mensaje aquí...',
    required: true,
    type: 'textarea',
  },
} as const

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Virginia Contreras',
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords.join(', '),
  author: SITE_CONFIG.author,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogImage: '/images/og-image.jpg', // Add this image to public/images/
  favicon: '/favicon.ico',
} as const

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  analytics: '/api/analytics',
} as const

export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
  preferences: 'portfolio-preferences',
} as const
