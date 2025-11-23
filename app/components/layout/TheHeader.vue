<template>
  <header
    :class="[
      'fixed left-0 right-0 top-0 z-50 border-b border-transparent backdrop-blur-md transition-all duration-300',
      isScrolled
        ? 'border-white/10 bg-white/90 py-2 shadow-md dark:bg-slate-900/90'
        : 'bg-white/80 py-4 dark:bg-slate-900/80',
    ]"
  >
    <nav class="container mx-auto flex items-center justify-between px-6">
      <!-- Logo -->
      <div class="text-xl font-bold text-slate-900 dark:text-white">
        Virginia <span class="text-primary">Contreras</span>
      </div>

      <!-- Menú -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          class="font-medium text-slate-700 transition hover:text-primary dark:text-slate-200"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Theme Switcher -->
      <div class="flex items-center gap-4">
        <ThemeSwitcher />
      </div>

      <!-- Menú móvil -->
      <button
        class="text-2xl text-slate-700 dark:text-slate-200 md:hidden"
        @click="isOpen = !isOpen"
      >
        <IconifyIcon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" />
      </button>
    </nav>

    <!-- Menú desplegable móvil -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="border-t border-white/10 bg-white/95 backdrop-blur-md dark:bg-slate-900/95 md:hidden"
      >
        <ul class="flex flex-col items-center gap-4 py-4">
          <li
            v-for="link in links"
            :key="link.name"
          >
            <NuxtLink
              :to="link.href"
              class="text-slate-700 transition hover:text-primary dark:text-slate-200"
              @click="isOpen = false"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  import { NAVIGATION_ITEMS } from '~/utils/constants'

  const isScrolled = ref(false)
  const isOpen = ref(false)
  const links = ref(NAVIGATION_ITEMS)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
