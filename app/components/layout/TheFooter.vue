<template>
  <section id="contact">
    <footer class="bg-white py-20 dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center space-y-4">
          <h3 class="text-lg font-semibold text-slate-800 dark:text-white">
            Conecta Conmigo
          </h3>

          <div class="flex space-x-6">
            <a
              v-for="social in socialNetworks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'transform text-lg text-gray-400 transition-all duration-300 hover:scale-110',
                social.color,
              ]"
              :aria-label="social.name"
            >
              <IconifyIcon
                :icon="`${social.icon}`"
                width="2rem"
                height="2rem"
                class="text-primary"
            /></a>
          </div>

          <div
            class="w-full border-t border-gray-700 pt-4 text-center text-sm text-gray-400"
          >
            <p>© 2025 Virginia Contreras. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
  defineProps({
    socialNetworks: {
      type: Array as PropType<SocialNetworksProps[]>,
      required: true,
    },
  })
</script>
