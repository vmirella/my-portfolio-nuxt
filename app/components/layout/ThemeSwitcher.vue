<template>
  <div class="flex items-center gap-2">
    <!-- 🎨 Selector de temas -->
    <div
      class="flex gap-2 rounded-lg bg-white/10 p-1 backdrop-blur-md dark:bg-slate-800/40"
    >
      <button
        v-for="t in themes"
        :key="t.id"
        type="button"
        class="h-6 w-6 rounded-full border border-white/20 transition-transform hover:scale-110 md:h-7 md:w-7"
        :style="{ background: t.gradient }"
        :class="{ 'ring-2 ring-white': currentTheme === t.id }"
        :title="t.name"
        @click="setTheme(t.id)"
      />
    </div>

    <!-- 🌗 Toggle modo oscuro -->
    <button
      class="rounded-lg p-2 text-slate-700 transition-all hover:bg-white/20 dark:text-slate-200"
      title="Cambiar tema"
      @click="toggleDarkMode"
    >
      <IconifyIcon
        :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'"
        class="text-xl transition-transform duration-300"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  const { currentTheme, isDark, setTheme, toggleDarkMode } = useTheme()

  const themes = [
    {
      id: 'blue',
      name: 'Blue',
      gradient: 'linear-gradient(to right,#3b82f6,#8b5cf6)',
    },
    {
      id: 'green',
      name: 'Green',
      gradient: 'linear-gradient(to right,#10b981,#06b6d4)',
    },
    {
      id: 'purple',
      name: 'Purple',
      gradient: 'linear-gradient(to right,#8b5cf6,#ec4899)',
    },
    {
      id: 'orange',
      name: 'Orange',
      gradient: 'linear-gradient(to right,#f97316,#ec4899)',
    },
  ]
</script>
