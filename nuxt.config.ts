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
      title: 'Virginia Contreras | Frontend Developer Vue.js',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Frontend Developer con más de 6 años de experiencia en Vue.js, plataformas fintech, aplicaciones empresariales, integración de APIs y evolución de productos web.',
        },
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
          tagPosition: 'head',
        },
      ],
    },
  },

  compatibilityDate: '2025-01-26',

  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],

  site: {
    url:
      process.env.NUXT_PUBLIC_SITE_URL ||
      'https://virginiacontreras.vercel.app',
    name: 'Frontend Developer Vue.js',
    description:
      'Frontend Developer con más de 6 años de experiencia en Vue.js, plataformas fintech, aplicaciones empresariales, integración de APIs y evolución de productos web.',
    defaultLocale: 'es',
    indexable: process.env.NODE_ENV === 'production',
  },

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

  sitemap: {
    enabled: process.env.NODE_ENV === 'production',
    strictNuxtContentPaths: false,
  },

  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        'https://virginiacontreras.vercel.app',
    },
  },

  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },

  css: ['@/assets/css/themes.css', '@/assets/css/main.css'],

  features: {
    devLogs: process.env.NODE_ENV === 'development',
  },

  vite: {
    build: {
      minify: 'esbuild',
      sourcemap: process.env.NODE_ENV === 'development',
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: false,
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  experimental: {
    payloadExtraction: true,
    componentIslands: false,
  },

  hooks: {
    'build:done': () => {
      console.log('✅ Build completado exitosamente')
    },
  },
})
