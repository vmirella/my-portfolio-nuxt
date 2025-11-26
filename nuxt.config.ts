import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    sourceMap: true,
    preset: 'static',
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: '.output/public',
    },
  },
  app: {
    head: {
      title: 'Virginia Contreras - Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'Desarrolladora Front-End con más de 6 años de experiencia especializada en Vue.js',
        },
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
        },
      ],
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  compatibilityDate: '2025-09-11',
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    [
      '@nuxtjs/seo',
      {
        site: {
          url:
            process.env.NUXT_PUBLIC_SITE_URL || 'https://virginiacontreras.com',
          name: 'Virginia Contreras - Desarrolladora Frontend',
          description:
            'Desarrolladora Front-End con más de 6 años de experiencia especializada en Vue.js',
          defaultLocale: 'es',
        },
      },
    ],
  ],
  site: {
    indexable: process.env.NODE_ENV === 'production',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://virginiacontreras.com',
  },
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: process.env.NODE_ENV === 'production' ? ['/'] : [],
        disallow: process.env.NODE_ENV === 'production' ? [] : ['/'],
      },
    ],
  },
  sitemap: {
    enabled: true,
    sources: [
      '/api/sitemap', // opcional si luego quieres generar rutas dinámicas
    ],
    strictNuxtContentPaths: false,
  },
  // Runtime configuration
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://virginiacontreras.com',
    },
  },
  // Configuración para desarrollo
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  // TypeScript
  typescript: {
    typeCheck: true,
    strict: true,
  },
  // Configuración de build
  build: {
    transpile: ['gsap'],
    // Evitar generación excesiva en dev
    analyze: false,
  },
  css: ['@/assets/css/themes.css', '@/assets/css/main.css'],
  // Deshabilitar features que generan archivos extra
  features: {
    devLogs: false,
  },
  // Configuración de Vite para desarrollo
  vite: {
    build: {
      // Menos verboso en desarrollo
      minify: 'esbuild',
      sourcemap: true,
    },
    optimizeDeps: {
      esbuildOptions: {
        // 👉 Forzar que siempre use esbuild en vez de oxc
        supported: {
          'import-assertions': true,
        },
      },
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },
})
