<template>
  <section
    id="projects"
    class="theme-bg-soft theme-border scroll-mt-12 border-t py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <p
          class="theme-text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Proyectos destacados
        </p>

        <h2
          class="theme-text font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Proyectos donde aplico y amplío mi stack frontend.
        </h2>

        <p
          class="theme-text-muted mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg"
        >
          Una selección de proyectos personales que muestra mi experiencia con
          Vue.js y mi aprendizaje práctico de React, Next.js y herramientas
          modernas del desarrollo web.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { projects } from '~/data/projects'
</script>
