# Portfolio Virginia Contreras

Portfolio personal desarrollado con Nuxt 4, Vue 3 y TypeScript para presentar mi perfil profesional, experiencia, stack técnico y proyectos destacados.

Sitio en producción: [virginiacontreras.vercel.app](https://virginiacontreras.vercel.app)

## Descripción general

Este proyecto es un portafolio de frontend developer con una estructura orientada a contenido y marketing personal. La app está pensada para:

- presentar mi identidad profesional y resumen de experiencia;
- mostrar proyectos personales y experimentos técnicos;
- destacar tecnologías y metodologías de trabajo;
- mantener una navegación clara con diseño responsivo;
- optimizar SEO, tema visual y usabilidad en desktop y móvil.

La aplicación usa SSR de Nuxt y está configurada para desplegarse en Vercel, con meta tags, sitemap y robots configurados para producción.

## Características principales

- Diseño moderno y responsivo con Tailwind CSS.
- Tema personalizable con selección de paleta y modo oscuro persistente.
- Header fijo con navegación desktop y menú móvil.
- Secciones principales: hero, sobre mí, stack, experiencia y proyectos.
- Datos centralizados en archivos TypeScript dentro de `app/data`.
- Enlaces a GitHub, LinkedIn y descarga del CV.
- SEO básico con `@nuxtjs/seo`, meta tags y configuración de sitio.
- Estructura modular de componentes reutilizables.
- Preparado para despliegue con Nitro y configuración específica para Vercel.

## Stack tecnológico

### Frontend

- [Nuxt 4](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Librerías y módulos

- [@vueuse/nuxt](https://vueuse.org/)
- [@pinia/nuxt](https://pinia.vuejs.org/)
- [@nuxtjs/seo](https://nuxtseo.com/)
- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)
- [@iconify/vue](https://iconify.design/)

### Calidad y tooling

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Commitlint](https://commitlint.js.org/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)

## Estructura del proyecto

```bash
my-portfolio-nuxt/
├── app/
│   ├── app.vue                    # Componente raíz de la app Nuxt
│   ├── components/
│   │   ├── layout/                # Header, footer y switcher de tema
│   │   ├── sections/              # Hero, About, Skills, Experience, Projects
│   │   └── ui/                    # Botones, cards y componentes reutilizables
│   ├── composables/
│   │   └── useTheme.ts            # Lógica de tema oscuro y paleta visual
│   ├── data/
│   │   ├── experiences.ts        # Datos de experiencia profesional
│   │   ├── projects.ts            # Datos de proyectos destacados
│   │   └── socialNetworks.ts      # Enlaces a redes sociales
│   ├── layouts/
│   │   └── default.vue            # Layout global con header y footer
│   ├── pages/
│   │   └── index.vue              # Página principal del portafolio
│   ├── plugins/
│   ├── utils/
│   │   └── constants.ts           # Constantes de navegación y links
│   └── assets/
│       └── css/
│           ├── main.css           # Estilos globals y utilidades
│           └── themes.css         # Variables de color y tema
├── public/
│   ├── cv/
│   │   └── Virginia_Contreras_CV.pdf
│   ├── favicon.ico
│   └── images/
│       ├── my-portfolio.png
│       ├── marca-peru.png
│       ├── twisted-snake.png
│       ├── pokedex.png
│       ├── carnet-download.png
│       └── virginia_contreras_villafuerte.png
├── shared/
│   └── types/
│       └── index.ts               # Tipos compartidos del proyecto
├── .env.dev                       # Variables de entorno para desarrollo
├── .env.prod                      # Variables de entorno para producción
├── .eslintrc.cjs                  # Configuración de ESLint
├── .gitignore
├── .husky/
├── .npmrc
├── LICENSE
├── commitlint.config.js
├── env.d.ts
├── eslint.config.js
├── nuxt.config.ts                # Configuración principal de Nuxt
├── package.json                   # Scripts y dependencias
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tailwind.config.js            # Configuración de Tailwind
├── tsconfig.json
├── vercel.json                    # Configuración del despliegue en Vercel
└── README.md
```

## Scripts disponibles

El proyecto define estos scripts en `package.json`:

```bash
pnpm install
pnpm dev
pnpm build
pnpm generate
pnpm preview
pnpm postinstall
pnpm commit
pnpm format
pnpm lint
pnpm lint:fix
pnpm test
pnpm test:ui
pnpm test:coverage
pnpm test:e2e
pnpm analyze
```

## Desarrollo local

### Requisitos

- Node.js compatible con Nuxt 4
- pnpm

### Instalación

```bash
git clone https://github.com/vmirella/my-portfolio-nuxt.git
cd my-portfolio-nuxt
pnpm install
```

### Ejecutar en desarrollo

```bash
pnpm dev
```

Luego abre `http://localhost:3000`.

### Build de producción

```bash
pnpm build
```

Para previsualizar la salida generada:

```bash
pnpm preview
```

## Configuración notable

- `nuxt.config.ts` activa SSR y define un preset de Nitro para Vercel.
- Se usa `@nuxtjs/seo` para generar metadata del sitio y configuración de robots/sitemap.
- El proyecto usa `app/` como directorio de la aplicación Nuxt, no un `src/` tradicional.
- El estado del tema y del modo oscuro se persiste con `localStorage`.
- Los assets estáticos importantes como la imagen principal, favicon y CV viven en `public/`.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta `LICENSE` para más detalles.

## Contacto

- GitHub: [@vmirella](https://github.com/vmirella)
- LinkedIn: [Virginia Contreras](https://www.linkedin.com/in/virginia-contreras)
- Email: virginiacontrerasvillafuerte@gmail.com
