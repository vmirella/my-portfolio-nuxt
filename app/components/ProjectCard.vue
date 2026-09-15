<template>
  <BaseCard class="group flex h-full flex-col overflow-hidden">
    <!-- Preview -->
    <div class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="`Vista previa de ${project.name}`"
        class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-6">
      <div class="flex-1">
        <h3
          class="theme-text font-heading text-xl font-semibold tracking-tight"
        >
          {{ project.name }}
        </h3>

        <p class="theme-text-muted mt-3 text-sm leading-6">
          {{ project.description }}
        </p>

        <ul
          v-if="project.technologies?.length"
          class="mt-5 flex flex-wrap gap-2"
          aria-label="Tecnologías utilizadas"
        >
          <li
            v-for="tech in project.technologies"
            :key="tech"
            class="theme-pill rounded-full px-3 py-1 text-xs font-medium"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="mt-7 flex flex-wrap gap-3">
        <BaseButton
          v-if="project.demoUrl"
          :href="project.demoUrl"
          external
          variant="primary"
          size="sm"
          :aria-label="`Ver demo de ${project.name}`"
        >
          <IconifyIcon
            icon="mdi:open-in-new"
            class="h-4 w-4"
            aria-hidden="true"
          />
          Ver proyecto
        </BaseButton>

        <BaseButton
          v-if="project.githubUrl"
          :href="project.githubUrl"
          external
          variant="secondary"
          size="sm"
          :aria-label="`Ver código de ${project.name} en GitHub`"
        >
          <IconifyIcon
            icon="mdi:github"
            class="h-4 w-4"
            aria-hidden="true"
          />
          Código
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  import type { Project } from '#shared/types/index'

  defineProps<{
    project: Project
  }>()
</script>
