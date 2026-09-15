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
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 7rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 1px;
    background-color: var(--color-border);
  }

  @media (max-width: 767px) {
    .timeline::before {
      left: 0.375rem;
      top: 0.5rem;
      bottom: 0.5rem;
    }
  }
</style>
