```vue
<template>
  <header
    :class="[
      'theme-header fixed left-0 right-0 top-0 z-50 border-b border-transparent backdrop-blur-md transition-all duration-300',
      isScrolled ? 'theme-header-scrolled py-2' : 'py-4',
    ]"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
      aria-label="Navegación principal"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="theme-text-primary theme-focus rounded-md px-1 text-xl font-bold"
        aria-label="Virginia Contreras - Inicio"
      >
        <span class="font-heading">VC</span>
      </NuxtLink>

      <!-- Menú desktop -->
      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          class="theme-text-muted theme-hover-primary font-body font-medium transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Theme Switcher + Menú móvil -->
      <div class="flex items-center gap-3">
        <ThemeSwitcher />

        <button
          type="button"
          :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="isOpen"
          aria-controls="mobile-navigation"
          class="theme-text-muted theme-hover-primary theme-focus rounded-lg p-2 text-2xl md:hidden"
          @click="toggleMenu"
        >
          <IconifyIcon
            :icon="isOpen ? 'mdi:close' : 'mdi:menu'"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>

    <!-- Menú móvil -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        id="mobile-navigation"
        class="theme-mobile-menu theme-border border-t backdrop-blur-md md:hidden"
      >
        <ul
          class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5"
        >
          <li
            v-for="link in links"
            :key="link.name"
          >
            <NuxtLink
              :to="link.href"
              class="theme-text-muted theme-hover-primary theme-focus rounded-md px-3 py-2 font-body font-medium"
              @click="closeMenu"
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

  const links = NAVIGATION_ITEMS

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50

    if (isOpen.value) {
      closeMenu()
    }
  }

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const closeMenu = () => {
    isOpen.value = false
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      closeMenu()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: none;
    }
  }
</style>
```
