<template>
  <article
    class="timeline-item relative grid gap-8 pb-14 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-8"
  >
    <!-- Fecha -->
    <div class="timeline-date relative z-10 pt-0.5">
      <span class="theme-text-primary text-sm font-semibold leading-5">
        {{ period }}
      </span>
    </div>

    <!-- Contenido -->
    <div class="relative">
      <!-- Marcador -->
      <span
        class="timeline-marker absolute -left-[2.05rem] top-1.5 z-10"
        aria-hidden="true"
      />

      <!-- Empresa -->
      <div class="mb-1">
        <span
          class="theme-text-primary text-sm font-semibold uppercase tracking-wide"
        >
          {{ company }}
        </span>
      </div>

      <!-- Cargo -->
      <h3 class="theme-text font-heading text-xl font-semibold tracking-tight">
        {{ title }}
      </h3>

      <!-- Ubicación -->
      <p class="theme-text-muted mt-1 text-sm">
        {{ location }}
      </p>

      <!-- Descripción -->
      <div class="theme-text-muted mt-5 max-w-3xl leading-7">
        <slot />
      </div>

      <!-- Tecnologías -->
      <ul
        v-if="technologies?.length"
        class="mt-5 flex flex-wrap gap-2"
        aria-label="Tecnologías utilizadas"
      >
        <li
          v-for="technology in technologies"
          :key="technology"
          class="theme-pill rounded-full px-3 py-1 text-xs font-medium"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
  interface Props {
    period: string
    title: string
    company: string
    location: string
    technologies?: string[]
  }

  defineProps<Props>()
</script>

<style scoped>
  .timeline-marker {
    width: 0.625rem;
    height: 0.625rem;
    border: 2px solid var(--color-primary);
    border-radius: 9999px;
    background-color: var(--color-bg-soft);
    box-shadow: 0 0 0 3px var(--color-bg-soft);
  }

  .timeline-item:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 767px) {
    .timeline-item {
      display: block;
      padding-left: 2rem;
      padding-bottom: 3rem;
    }

    .timeline-date {
      padding-top: 0;
      margin-bottom: 0.75rem;
    }

    .timeline-marker {
      left: -1.9375rem;
      top: 0.25rem;
    }
  }
</style>
