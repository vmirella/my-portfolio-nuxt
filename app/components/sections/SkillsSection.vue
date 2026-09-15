<template>
  <section
    id="skills"
    class="theme-bg-soft theme-border scroll-mt-12 border-t py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <p
          class="theme-text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Stack técnico
        </p>

        <h2
          class="theme-text font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Herramientas con las que construyo productos web.
        </h2>

        <p
          class="theme-text-muted mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg"
        >
          Mi experiencia se centra en el ecosistema Vue.js y en herramientas
          orientadas al desarrollo, mantenimiento y evolución de aplicaciones
          web.
        </p>
      </div>

      <!-- Skill groups -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <BaseCard
          v-for="(group, i) in skillGroups"
          :key="i"
          class="p-6"
        >
          <!-- Icon -->
          <div
            class="theme-bg-pill theme-text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <IconifyIcon
              :icon="group.icon"
              class="text-2xl"
              aria-hidden="true"
            />
          </div>

          <!-- Title -->
          <h3 class="theme-text mb-5 font-heading text-lg font-semibold">
            {{ group.title }}
          </h3>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, j) in group.skills"
              :key="j"
              class="theme-pill rounded-full px-3 py-1.5 text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'

  const skillGroups = [
    {
      icon: 'mdi:code-tags',
      title: 'Frontend',
      skills: ['Vue.js', 'JavaScript', 'TypeScript', 'Vuex', 'Pinia', 'Nuxt'],
    },
    {
      icon: 'mdi:palette-outline',
      title: 'UI & Styling',
      skills: [
        'HTML5',
        'CSS3',
        'Sass / SCSS',
        'Tailwind CSS',
        'Bootstrap',
        'Vuetify',
        'Responsive Design',
      ],
    },
    {
      icon: 'mdi:test-tube',
      title: 'Testing & Quality',
      skills: [
        'Vitest',
        'ESLint',
        'Refactoring',
        'Code Review',
        'REST APIs',
        'Axios',
      ],
    },
    {
      icon: 'mdi:tools',
      title: 'Workflow',
      skills: [
        'Git',
        'GitHub',
        'AWS CodeCommit',
        'Webpack',
        'Jira',
        'Scrum',
        'Kanban',
      ],
    },
  ]
</script>
