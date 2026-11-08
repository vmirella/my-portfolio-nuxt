<template>
  <section
    id="inicio"
    class="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
  >
    <!-- Decorative background -->
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        class="theme-decoration-primary absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
      />

      <div
        class="theme-decoration-secondary absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl"
      />
    </div>

    <div class="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div class="max-w-4xl">
        <p
          class="theme-text mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Frontend Developer · Vue.js
        </p>

        <h1
          class="theme-text max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Desarrollo y evoluciono aplicaciones web para productos fintech y
          plataformas empresariales.
        </h1>

        <p class="theme-text-muted mt-7 max-w-3xl text-lg leading-8 sm:text-xl">
          Más de 6 años de experiencia en desarrollo frontend, especializada en
          Vue.js y en la evolución de aplicaciones utilizadas en procesos reales
          de negocio.
        </p>

        <p class="theme-text-muted mt-4 max-w-3xl text-base leading-7">
          Experiencia en integración de APIs, refactorización, mantenimiento de
          aplicaciones en producción y desarrollo de funcionalidades con reglas
          de negocio complejas. Actualmente amplío mi stack mediante proyectos
          personales con Vue 3, TypeScript, Nuxt y React.
        </p>

        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <BaseButton
            to="#projects"
            variant="primary"
            size="md"
          >
            Ver proyectos
          </BaseButton>

          <BaseButton
            :href="cvUrl"
            download="CV_Virginia_Contreras_Frontend.pdf"
            variant="secondary"
            size="md"
          >
            Descargar CV
          </BaseButton>
        </div>

        <div class="mt-12">
          <p
            class="theme-text-muted mb-4 text-xs font-medium uppercase tracking-wider"
          >
            Tecnologías principales
          </p>

          <ul
            class="flex flex-wrap gap-2"
            aria-label="Tecnologías principales"
          >
            <li
              v-for="technology in technologies"
              :key="technology"
              class="theme-pill rounded-full px-3 py-1.5 text-sm font-medium"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const technologies = [
    'Vue.js',
    'JavaScript',
    'Vuex',
    'TypeScript',
    'Vue 3',
    'Nuxt',
    'Vitest',
  ]
  const cvUrl = computed(() => {
    return `/cv/CV_Virginia_Contreras_Frontend.pdf`
  })
</script>
