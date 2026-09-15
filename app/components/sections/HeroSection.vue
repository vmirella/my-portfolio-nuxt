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
        <!-- Eyebrow -->
        <p
          class="theme-text mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Frontend Developer · Vue.js
        </p>

        <!-- Heading -->
        <h1
          class="theme-text max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Desarrollo experiencias web con
          <span class="text-gradient-theme"> Vue.js. </span>
        </h1>

        <!-- Description -->
        <p class="theme-text-muted mt-7 max-w-3xl text-lg leading-8 sm:text-xl">
          Más de 6 años de experiencia construyendo y evolucionando aplicaciones
          web para productos fintech, soluciones B2B y plataformas de gestión
          empresarial.
        </p>

        <p class="theme-text-muted mt-4 max-w-3xl text-base leading-7">
          Especializada en Vue.js, con experiencia en Vue 2 y actualmente
          enfocada en Vue 3, TypeScript, Pinia y testing.
        </p>

        <!-- Actions -->
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <BaseButton
            to="#projects"
            variant="primary"
            size="md"
          >
            Ver proyectos
          </BaseButton>

          <BaseButton
            href="https://drive.google.com/file/d/1GtImgIyfUioGj7K8i4QEKgXH3peFAoSt/view?usp=sharing"
            download
            target="external"
            variant="secondary"
            size="md"
          >
            Descargar CV
          </BaseButton>
        </div>

        <!-- Tech stack -->
        <div class="mt-12">
          <p
            class="theme-text-muted mb-4 text-xs font-medium uppercase tracking-wider"
          >
            Stack principal
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
  const technologies = ['Vue.js', 'TypeScript', 'Pinia', 'Nuxt', 'Vitest']
</script>
