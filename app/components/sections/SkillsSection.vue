<template>
  <section
    id="skills"
    class="theme-bg-soft theme-border scroll-mt-12 border-t py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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
          Mi experiencia profesional se centra en Vue.js. También aplico React y
          Next.js en proyectos personales para ampliar mi stack frontend.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BaseCard
          v-for="(group, i) in skillGroups"
          :key="i"
          class="p-6"
        >
          <div
            class="theme-bg-pill theme-text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
          >
            <IconifyIcon
              :icon="group.icon"
              class="text-2xl"
              aria-hidden="true"
            />
          </div>

          <h3 class="theme-text mb-2 font-heading text-lg font-semibold">
            {{ group.title }}
          </h3>

          <p
            v-if="group.description"
            class="theme-text-muted mb-4 text-sm leading-6"
          >
            {{ group.description }}
          </p>

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
      icon: 'mdi:vuejs',
      title: 'Ecosistema Vue',
      description: '',
      skills: ['Vue.js 2', 'Vue.js 3', 'Vue Router', 'Vuex', 'Pinia', 'Nuxt'],
    },
    {
      icon: 'mdi:code-braces',
      title: 'Lenguajes',
      description: '',
      skills: ['JavaScript', 'TypeScript'],
    },
    {
      icon: 'mdi:palette-outline',
      title: 'UI & Styling',
      description: '',
      skills: [
        'HTML5',
        'CSS3',
        'Sass / SCSS',
        'BootstrapVue',
        'Vuetify',
        'Tailwind CSS',
        'Element UI',
        'Responsive Design',
      ],
    },
    {
      icon: 'mdi:api',
      title: 'APIs & Calidad',
      description: '',
      skills: [
        'REST APIs',
        'Graphql',
        'Axios',
        'Vitest',
        'ESLint',
        'Prettier',
        'Refactoring',
        'Code Review',
      ],
    },
    {
      icon: 'mdi:tools',
      title: 'Workflow',
      description: '',
      skills: ['Git', 'GitHub', 'AWS CodeCommit', 'Jira', 'Scrum', 'Kanban'],
    },
    {
      icon: 'mdi:react',
      title: 'React & Next.js',
      description: 'Aplicado en proyectos personales.',
      skills: ['React 19', 'Next.js 16', 'Tailwind CSS 4', 'Recharts'],
    },
  ]
</script>
