<template>
  <div class="flex items-center gap-2">
    <!-- Accent themes -->
    <div
      class="theme-switcher rounded-lg p-1"
      aria-label="Seleccionar color del tema"
    >
      <button
        v-for="theme in themes"
        :key="theme.id"
        type="button"
        class="theme-color-button"
        :style="{ backgroundImage: theme.gradient }"
        :class="{ 'theme-color-button-active': currentTheme === theme.id }"
        :title="`Tema ${theme.name}`"
        :aria-label="`Seleccionar tema ${theme.name}`"
        :aria-pressed="currentTheme === theme.id"
        @click="setTheme(theme.id)"
      />
    </div>

    <!-- Dark mode -->
    <button
      type="button"
      class="theme-mode-button theme-text-muted theme-hover-primary"
      :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
      @click="toggleDarkMode"
    >
      <IconifyIcon
        :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'"
        class="text-xl"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'

  type Theme = 'blue' | 'green' | 'purple' | 'orange'

  const { currentTheme, isDark, setTheme, toggleDarkMode } = useTheme()

  const themes: {
    id: Theme
    name: string
    gradient: string
  }[] = [
    {
      id: 'blue',
      name: 'Azul',
      gradient: 'var(--theme-blue-gradient)',
    },
    {
      id: 'green',
      name: 'Verde',
      gradient: 'var(--theme-green-gradient)',
    },
    {
      id: 'purple',
      name: 'Morado',
      gradient: 'var(--theme-purple-gradient)',
    },
    {
      id: 'orange',
      name: 'Naranja',
      gradient: 'var(--theme-orange-gradient)',
    },
  ]
</script>
