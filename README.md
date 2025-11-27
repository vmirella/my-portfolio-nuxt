# 🚀 Portfolio Virginia Contreras

Portfolio personal moderno y responsivo construido con **Nuxt 4** y **Tailwind CSS 3**, optimizado para rendimiento y SEO.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌙 **Modo Oscuro**: Soporte completo para tema claro/oscuro con persistencia
- 📱 **Responsive**: Diseño adaptativo para todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado con Nuxt 4 y técnicas de performance
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, Schema.org y sitemap
- 🎭 **Animaciones**: Transiciones suaves con GSAP y CSS
- 📧 **Formulario de Contacto**: Sistema de contacto funcional
- 🎯 **TypeScript**: Tipado completo para mejor desarrollo
- 🧪 **Testing**: Configurado con Vitest y Playwright
- 📦 **Componentes Reutilizables**: Arquitectura modular y escalable

## 🛠️ Stack Tecnológico

### Frontend

- **[Nuxt 4](https://nuxt.com/)** - Framework Vue.js full-stack
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript reactivo
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework CSS utility-first
- **[GSAP](https://greensock.com/gsap/)** - Librería de animaciones

### Herramientas y Librerías

- **[@vueuse/nuxt](https://vueuse.org/)** - Composables utilitarios
- **[@pinia/nuxt](https://pinia.vuejs.org/)** - Gestión de estado
- **[@nuxtjs/seo](https://nuxtseo.com/)** - Optimización SEO
- **[@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org/)** - Google Fonts

### Desarrollo y Calidad

- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Formateo de código
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitizen](https://commitizen-tools.github.io/commitizen/)** - Commits convencionales
- **[Vitest](https://vitest.dev/)** - Testing unitario
- **[Playwright](https://playwright.dev/)** - Testing E2E

## 📁 Estructura del Proyecto

```
my-portfolio-nuxt/
├── 📁 assets/                 # Recursos estáticos (CSS, imágenes)
│   ├── css/
│   │   ├── main.css          # Estilos principales
│   │   ├── themes.css        # variables de temas
│   └── images/               # Imágenes del proyecto
├── 📁 components/            # Componentes Vue reutilizables
│   ├── animations/           # Componentes de animación
│   ├── layout/              # Componentes de layout
│   ├── sections/            # Secciones de la página
│   └── ui/                  # Componentes UI base
├── 📁 composables/          # Composables Vue
│   ├── useTheme.ts          # Gestión de temas
│   └── useAnimation.ts      # Animaciones
├── 📁 data/
│   ├── projects.ts         # Datos de proyectos
│   └── socialNetworks.ts   # Datos de redes sociales
├── 📁 layouts/             # Layouts de página
├── 📁 pages/               # Páginas de la aplicación
├── 📁 plugins/             # Plugins de Nuxt
|   └── gsap.client.ts
├── 📁 public/              # Archivos públicos
│   ├── images/             # Imágenes públicas
│   └── cv/                 # CV en PDF
├── 📁 shared/
    └── types/              # Definiciones de tipos TypeScript
├── 📁 utils/               # Funciones utilitarias
│   └── constants.ts        # Constantes de la aplicación
├── nuxt.config.ts          # Configuración de Nuxt
├── tailwind.config.js      # Configuración de Tailwind
└── package.json            # Dependencias y scripts
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/virginia-contreras/my-portfolio-nuxt.git
   cd my-portfolio-nuxt
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Servidor de desarrollo
pnpm dev --host       # Servidor accesible desde la red

# Construcción
pnpm build            # Construir para producción
pnpm generate         # Generar sitio estático
pnpm preview          # Vista previa de producción

# Calidad de código
pnpm lint             # Ejecutar ESLint
pnpm lint:fix         # Corregir errores de ESLint
pnpm format           # Formatear código con Prettier
pnpm format:check     # Verificar formato
pnpm typecheck        # Verificar tipos TypeScript

# Testing
pnpm test             # Ejecutar tests unitarios
pnpm test:ui          # UI de testing
pnpm test:coverage    # Cobertura de tests
pnpm test:e2e         # Tests end-to-end

# Utilidades
pnpm analyze          # Analizar bundle
pnpm cleanup          # Limpiar archivos temporales
pnpm commit           # Commit con Commitizen
```

## 🎨 Personalización

### Colores y Temas

Los colores se definen en `tailwind.config.js` y `themes.css`:

## 📱 Responsive Design

El diseño es completamente responsive con breakpoints:

- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👩‍💻 Autora

**Virginia Contreras**

- GitHub: [@virginia-contreras](https://github.com/vmirella)
- LinkedIn: [Virginia Contreras](https://linkedin.com/in/virginia-contreras)
- Email: virginiacontrerasvillafuerte@gmail.com

## 🙏 Agradecimientos

- [Nuxt Team](https://nuxt.com/) por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [GSAP](https://greensock.com/) por las animaciones
- [Heroicons](https://heroicons.com/) por los iconos

---

⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!
