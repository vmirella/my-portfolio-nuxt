<template>
  <section
    id="experience"
    class="scroll-mt-12 bg-slate-50 py-20 dark:bg-slate-800"
  >
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-slate-800 dark:text-white">
          Experiencia Profesional
        </h2>
        <div class="mx-auto h-1 w-20 bg-primary" />
      </div>

      <div class="mx-auto max-w-3xl">
        <Timeline>
          <TimelineItem
            date="Junio 2021 – Actualidad"
            title="Desarrolladora Front-End"
            company="Global 66"
            location="Lima, Perú"
          >
            <p class="mb-4 text-slate-600 dark:text-slate-400">
              Trabajé en una plataforma interna de gestión de clientes y
              cumplimiento. Asumí la responsabilidad como única desarrolladora
              front-end a cargo del mantenimiento evolutivo del sistema.
            </p>
            <ul
              class="list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400"
            >
              <li>Implementé y optimicé máculas utilizando Vue.js</li>
              <li>Integré APIs REST y servicios externos mediante Axios</li>
              <li>
                Colaboré en la migración de código legacy a una arquitectura
                moderna
              </li>
              <li>
                Participé activamente en ceremonias Scrum y revisiones de código
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem
            date="Junio 2019 – Abril 2021"
            title="Desarrolladora Front-End"
            company="Chaty"
            location="Lima, Perú"
          >
            <p class="mb-4 text-slate-600 dark:text-slate-400">
              Contribuí al desarrollo de soluciones B2B para procesamiento de
              pagos y plataformas de comercio electrónico.
            </p>
            <ul
              class="list-inside list-disc space-y-2 text-slate-600 dark:text-slate-400"
            >
              <li>Desarrollé el sistema de links de pago B2B con Vue.js</li>
              <li>Implementé la plataforma Chaty – Tienda Virtual</li>
              <li>
                Creé dashboard interactivo para seguimiento de métricas de venta
              </li>
            </ul>
          </TimelineItem>

          <TimelineItem
            date="Enero 2019 – Abril 2019"
            title="Analista de TI"
            company="América Televisión"
            location="Lima, Perú"
          >
            <p class="text-slate-600 dark:text-slate-400">
              Desarrollé aplicación back-office para gestión de contenidos
              utilizando Vue.js e implementé interfaces intuitivas para la
              administración de contenido multimedia.
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  </section>
</template>
