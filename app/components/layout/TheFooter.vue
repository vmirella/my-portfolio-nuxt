<template>
  <footer
    id="contact"
    class="theme-bg theme-border scroll-mt-12 border-t py-16 sm:py-20"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Contact heading -->
        <p
          class="theme-text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Contacto
        </p>

        <h2
          class="theme-text font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          ¿Hablamos?
        </h2>

        <p class="theme-text-muted mx-auto mt-5 max-w-xl text-base leading-7">
          Estoy abierta a nuevas oportunidades y proyectos de desarrollo
          Front-End.
        </p>

        <!-- Email -->
        <div class="mt-8">
          <BaseButton
            :href="SOCIAL_LINKS.email"
            variant="primary"
            size="md"
          >
            <IconifyIcon
              icon="mdi:email-outline"
              class="h-5 w-5"
              aria-hidden="true"
            />
            Contactarme por email
          </BaseButton>
        </div>

        <!-- Social networks -->
        <div class="mt-8 flex justify-center gap-3">
          <a
            v-for="social in socialNetworks"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
            class="theme-text-muted theme-hover-primary theme-focus rounded-lg p-2.5 transition-colors"
          >
            <IconifyIcon
              :icon="`${social.icon}`"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="theme-border theme-text-muted mt-12 border-t pt-6 text-center text-sm"
      >
        <p>© {{ new Date().getFullYear() }} Virginia Contreras.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  import type { SocialNetworksProps } from '#shared/types/index'
  import { SOCIAL_LINKS } from '~/utils/constants'

  defineProps<{
    socialNetworks: SocialNetworksProps[]
  }>()
</script>
