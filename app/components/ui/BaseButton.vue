<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :download="download"
    :type="type"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group relative inline-flex items-center justify-center overflow-hidden rounded-md font-semibold transition-all duration-300"
    :class="[baseClasses, variantClasses, sizeClasses]"
    :disabled="loading"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot />

      <svg
        v-if="loading"
        class="h-5 w-5 animate-spin text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </span>

    <!-- Overlay sutil -->
    <div
      v-if="variant === 'primary'"
      class="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />

    <!-- Brillo deslizante -->
    <div
      v-if="variant === 'primary'"
      class="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
    />
  </component>
</template>

<script setup lang="ts">
  import { NuxtLink } from '#components'
  import type { BaseButtonProps } from '#shared/types/index'

  const props = withDefaults(defineProps<BaseButtonProps>(), {
    type: 'button',
    external: false,
    variant: 'primary',
    size: 'md',
    loading: false,
  })

  const baseClasses = `
  transform hover:scale-105 active:scale-95
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  transition-all duration-300
`

  const variantClasses = computed(() => {
    if (props.variant === 'primary') {
      return 'shadow-theme bg-gradient-theme text-white'
    }
    if (props.variant === 'secondary') {
      return 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-500'
    }
    return ''
  })

  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm'
      case 'lg':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2'
    }
  })
</script>
