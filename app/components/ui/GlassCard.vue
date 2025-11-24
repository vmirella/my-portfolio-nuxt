<template>
  <div class="glass-card">
    <slot />
  </div>
</template>

<style scoped>
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
  }
</style>
