<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<script setup lang="ts">
  // Timeline component
</script>

<style scoped>
  .timeline {
    @apply relative;
  }

  .timeline::before {
    content: '';
    @apply absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700;
  }
</style>
