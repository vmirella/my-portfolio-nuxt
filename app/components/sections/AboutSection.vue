<template>
  <section
    id="about"
    class="theme-border theme-bg-soft scroll-mt-12 border-t py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div
        class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-20"
      >
        <!-- Content -->
        <div>
          <!-- Section label -->
          <p
            class="theme-text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
          >
            Sobre mí
          </p>

          <!-- Heading -->
          <h2
            class="theme-text max-w-3xl font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Experiencia en productos reales, enfoque en evolución continua.
          </h2>

          <!-- Description -->
          <div
            class="theme-text-muted mt-8 max-w-3xl space-y-5 text-base leading-7"
          >
            <p>
              Soy desarrolladora Front-End especializada en Vue.js. Mi
              experiencia profesional se ha desarrollado principalmente en
              productos fintech, soluciones B2B y plataformas internas de
              gestión empresarial.
            </p>

            <p>
              He trabajado principalmente con Vue 2 y JavaScript, participando
              en el desarrollo de funcionalidades, integración de APIs,
              mantenimiento evolutivo y refactorización de aplicaciones
              existentes. También he asumido progresivamente mayor autonomía
              sobre el desarrollo Front-End de productos en producción.
            </p>

            <p>
              Actualmente estoy orientando mi evolución técnica hacia Vue 3,
              TypeScript, Pinia, Nuxt y Vitest, aplicándolos en proyectos
              personales y experimentaciones técnicas para complementar mi
              experiencia profesional con un stack moderno.
            </p>
          </div>
        </div>

        <!-- Highlights -->
        <aside class="theme-border theme-bg rounded-2xl border p-6 shadow-sm">
          <h3 class="theme-text text-lg font-semibold">Lo que puedo aportar</h3>

          <ul class="mt-6 space-y-5">
            <li class="flex gap-4">
              <span
                class="theme-bg-pill theme-text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                aria-hidden="true"
              >
                ✓
              </span>

              <div>
                <p class="theme-text font-medium">Experiencia en producción</p>

                <p class="theme-text-muted mt-1 text-sm leading-6">
                  Experiencia desarrollando y evolucionando aplicaciones en
                  contextos reales de negocio.
                </p>
              </div>
            </li>

            <li class="flex gap-4">
              <span
                class="theme-bg-pill theme-text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                aria-hidden="true"
              >
                ✓
              </span>

              <div>
                <p class="theme-text font-medium">Autonomía Front-End</p>

                <p class="theme-text-muted mt-1 text-sm leading-6">
                  Capacidad para asumir responsabilidad sobre el desarrollo y
                  mantenimiento del frontend.
                </p>
              </div>
            </li>

            <li class="flex gap-4">
              <span
                class="theme-bg-pill theme-text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                aria-hidden="true"
              >
                ✓
              </span>

              <div>
                <p class="theme-text font-medium">Legacy & refactoring</p>

                <p class="theme-text-muted mt-1 text-sm leading-6">
                  Experiencia trabajando sobre código existente y mejorando
                  progresivamente su mantenibilidad.
                </p>
              </div>
            </li>

            <li class="flex gap-4">
              <span
                class="theme-bg-pill theme-text-primary mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                aria-hidden="true"
              >
                ✓
              </span>

              <div>
                <p class="theme-text font-medium">Evolución tecnológica</p>

                <p class="theme-text-muted mt-1 text-sm leading-6">
                  Actualmente enfocada en Vue 3, TypeScript, Pinia, Nuxt y
                  testing.
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>
