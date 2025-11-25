<template>
  <section
    id="projects"
    class="scroll-mt-12 bg-slate-50 py-20 dark:bg-slate-800"
  >
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-slate-800 dark:text-white">
          Proyectos
        </h2>
        <div class="mx-auto h-1 w-20 bg-primary" />
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="hover-lift"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { projects as projectsData } from '~/data/projects'

  const projects = ref(projectsData)
</script>
