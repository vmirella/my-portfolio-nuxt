<template>
  <section
    id="experience"
    class="theme-bg-soft theme-border scroll-mt-12 border-t py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <p
          class="theme-text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Experiencia
        </p>

        <h2
          class="theme-text font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Experiencia profesional
        </h2>

        <p
          class="theme-text-muted mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg"
        >
          Más de 6 años desarrollando y evolucionando aplicaciones web para
          productos fintech, soluciones B2B y plataformas internas de gestión.
        </p>
      </div>

      <!-- Timeline -->
      <div class="mx-auto max-w-4xl">
        <Timeline>
          <TimelineItem
            v-for="experience in experiences"
            :key="experience.id"
            :period="experience.period"
            :title="experience.role"
            :company="experience.company"
            :location="experience.location"
            :technologies="experience.technologies"
          >
            <p class="mb-4">
              {{ experience.description }}
            </p>

            <ul class="list-inside list-disc space-y-2.5">
              <li
                v-for="highlight in experience.highlights"
                :key="highlight"
              >
                {{ highlight }}
              </li>
            </ul>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { experiences } from '~/data/experiences'
</script>
