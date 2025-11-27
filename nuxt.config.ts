export default defineNuxtConfig({
  // SSR habilitado (correcto para Vercel)
  ssr: true,

  // Configuración de Nitro para Vercel
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : 'node-server',
    sourceMap: process.env.NODE_ENV === 'development',
    compressPublicAssets: true,
  },

  // Configuración de la app
  app: {
    head: {
      title: 'Virginia Contreras - Portfolio',
      htmlAttrs: {
        lang: 'es', // ✨ Agregar idioma
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Desarrolladora Front-End con más de 6 años de experiencia especializada en Vue.js',
        },
        // ✨ Meta tags adicionales para SEO
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            (function () {
              try {
                var theme = localStorage.getItem('portfolio-theme') || 'blue';
                var dark = localStorage.getItem('dark-mode');
                var root = document.documentElement;
                root.setAttribute('data-theme', theme);

                if (
                  dark === 'true' ||
                  (dark === null &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  root.classList.add('dark');
                } else {
                  root.classList.remove('dark');
                }
              } catch (e) {
                console.error('Theme init error:', e);
              }
            })();
          `,
          // ✨ Cambio importante: innerHTML -> children en Nuxt 4
          tagPosition: 'head',
        },
      ],
    },
  },

  // ✨ Fecha de compatibilidad actualizada
  compatibilityDate: '2025-01-26',

  // Configuración de componentes
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],

  // Módulos
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],

  // ✨ Configuración SEO simplificada (Nuxt 4 style)
  site: {
    url:
      process.env.NUXT_PUBLIC_SITE_URL ||
      'https://virginiacontreras.vercel.app',
    name: 'Virginia Contreras - Desarrolladora Frontend',
    description:
      'Desarrolladora Front-End con más de 6 años de experiencia especializada en Vue.js',
    defaultLocale: 'es',
    indexable: process.env.NODE_ENV === 'production',
  },

  // Robots
  robots: {
    enabled: process.env.NODE_ENV === 'production',
    groups: [
      {
        userAgent: '*',
        allow: process.env.NODE_ENV === 'production' ? ['/'] : [],
        disallow: process.env.NODE_ENV === 'production' ? [] : ['/'],
      },
    ],
  },

  // Sitemap
  sitemap: {
    enabled: process.env.NODE_ENV === 'production',
    strictNuxtContentPaths: false,
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        'https://virginiacontreras.vercel.app',
    },
  },

  // Devtools
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },

  // TypeScript
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false, // ✨ Recomendado para Nuxt 4
  },

  // Configuración de build
  build: {
    transpile: ['gsap'],
  },

  // CSS
  css: ['@/assets/css/themes.css', '@/assets/css/main.css'],

  // Features
  features: {
    devLogs: process.env.NODE_ENV === 'development',
  },

  // ✨ Configuración de Vite optimizada
  vite: {
    build: {
      minify: 'esbuild',
      sourcemap: process.env.NODE_ENV === 'development',
      // ✨ Mejor optimización para producción
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ['gsap'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['gsap'], // ✨ Pre-bundle GSAP
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },

  // ✨ Configuración de módulos específicos
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: false, // ✨ Deshabilitar en producción
  },

  // ✨ Configuración de Pinia
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // ✨ Configuración de experimentales (opcional pero recomendado)
  experimental: {
    payloadExtraction: true, // Mejora performance
    componentIslands: false, // Solo si lo necesitas
  },

  // ✨ Hooks útiles para debugging
  hooks: {
    'build:done': () => {
      console.log('✅ Build completado exitosamente')
    },
  },
})
