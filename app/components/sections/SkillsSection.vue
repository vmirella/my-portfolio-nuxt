<template>
  <section
    id="skills"
    class="scroll-mt-12 bg-white py-20 dark:bg-slate-900"
  >
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-slate-800 dark:text-white">
          Habilidades Técnicas
        </h2>
        <div class="mx-auto mb-8 h-1 w-20 bg-primary" />
        <p class="mb-8 text-lg text-slate-600 dark:text-slate-400">
          Mi stack tecnológico se centra en herramientas modernas para el
          desarrollo Front-End, con un fuerte enfoque en el ecosistema Vue.js.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <GlassCard
          v-for="(group, i) in skillGroups"
          :key="i"
          class="p-6 text-center"
        >
          <div class="flex justify-center">
            <IconifyIcon
              :icon="`${group.icon}`"
              width="50"
              class="mb-4 text-3xl text-secondary"
            />
          </div>

          <h3 class="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
            {{ group.title }}
          </h3>
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="(skill, j) in group.skills"
              :key="j"
              class="rounded-full bg-pill px-4 py-1 text-sm font-medium text-primary"
            >
              {{ skill }}
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  const skillGroups = [
    {
      icon: 'mdi:tools',
      title: 'Core Frontend',
      skills: ['Vue', 'Vuex', 'Pinia', 'TypeScript', 'Vite', 'SCSS'],
    },
    {
      icon: 'mdi:palette',
      title: 'Estilos y UI',
      skills: [
        'TailwindCSS',
        'Bootstrap',
        'Vuetify',
        'Element',
        'Sass / SCSS',
        'Responsive Design',
      ],
    },
    {
      icon: 'mdi:steam-box',
      title: 'Herramientas y Workflow',
      skills: ['Git', 'GitHub', 'Webpack', 'Vitest', 'ESLint'],
    },
    {
      icon: 'mdi:lightbulb',
      title: 'Conceptos y Prácticas',
      skills: ['Scrum', 'UI/UX', 'Accesibilidad', 'Performance'],
    },
  ]
</script>
