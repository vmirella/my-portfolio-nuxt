<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
  >
    <TheHeader />
    <main>
      <slot />
    </main>
    <!-- <TheFooter :socialNetworks="socialNetworks" /> -->
  </div>
</template>
<!-- <script setup>
  import { socialNetworks } from '~/data/socialNetworks'
</script> -->
