<template>
  <div
    class="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700"
  >
    <img
      :src="project.image"
      :alt="project.name"
      class="h-48 w-full object-cover"
    />
    <div class="p-6">
      <h3 class="mb-2 text-2xl font-semibold text-slate-800 dark:text-white">
        {{ project.name }}
      </h3>
      <p class="mb-4 text-slate-600 dark:text-slate-300">
        {{ project.description }}
      </p>
      <div class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-pill px-2.5 py-0.5 text-sm font-medium text-primary"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex gap-4">
        <BaseButton
          v-if="project?.githubUrl"
          :to="project?.githubUrl"
          external
          variant="secondary"
        >
          <IconifyIcon
            icon="mdi:github-face"
            class="h-6 w-6"
          />

          GitHub
        </BaseButton>

        <BaseButton
          v-if="project?.demoUrl"
          :to="project?.demoUrl"
          external
          variant="primary"
        >
          <IconifyIcon icon="mdi:rocket-launch" />

          Demo
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Project } from '#shared/types/index'
  import { Icon as IconifyIcon } from '@iconify/vue'

  defineProps({
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  })
</script>
