<template>
  <div class="timeline-item relative pb-8 pl-16">
    <div
      class="timeline-marker absolute left-4 top-1 h-2 w-2 rounded-full border-4 border-primary"
    />
    <div class="timeline-content">
      <div class="mb-1 text-sm font-semibold text-secondary">
        {{ date }}
      </div>
      <h3 class="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
        {{ title }}
      </h3>
      <div class="mb-2 text-sm text-slate-600 dark:text-slate-400">
        {{ company }} • {{ location }}
      </div>
      <div class="text-slate-700 dark:text-slate-300">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
  .timeline-item:last-child {
    @apply pb-0;
  }
</style>
