<template>
  <section
    id="about"
    class="scroll-mt-12 bg-white py-20 dark:bg-slate-900"
  >
    <div class="container mx-auto px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-slate-800 dark:text-white">
          Sobre Mí
        </h2>
        <div class="mx-auto h-1 w-20 bg-primary" />
      </div>
      <!-- md:grid-cols-2 -->
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h3
            class="mb-6 text-2xl font-semibold text-slate-800 dark:text-white"
          >
            Más de 6 años transformando ideas en experiencias web excepcionales.
          </h3>
          <p class="mb-6 text-slate-600 dark:text-slate-400">
            Soy Virginia, una apasionada desarrolladora Front-End con más de
            seis años de experiencia construyendo interfaces de usuario
            dinámicas y responsivas. Mi viaje en el desarrollo comenzó con la
            curiosidad de cómo la tecnología puede resolver problemas del mundo
            real y crear experiencias significativas para los usuarios.
          </p>
          <p class="mb-8 text-slate-600 dark:text-slate-400">
            Me especializo en Vue.js y tengo una sólida trayectoria en el
            ecosistema JavaScript/TypeScript, con experiencia probada en el
            desarrollo de aplicaciones para el sector fintech y plataformas de
            gestión empresarial. Me encanta trabajar en equipos
            multidisciplinarios, donde mi compromiso con las metodologías ágiles
            y la entrega de código de alta calidad contribuyen a un producto
            final robusto y escalable.
          </p>

          <div class="mb-8 grid grid-cols-2 gap-4">
            <div class="flex items-center">
              <div class="mr-3 h-3 w-3 rounded-full bg-secondary" />
              <span class="text-slate-700 dark:text-slate-300">Vue.js</span>
            </div>
            <div class="flex items-center">
              <div class="mr-3 h-3 w-3 rounded-full bg-secondary" />
              <span class="text-slate-700 dark:text-slate-300"
                >JavaScript/TypeScript</span
              >
            </div>
            <div class="flex items-center">
              <div class="mr-3 h-3 w-3 rounded-full bg-secondary" />
              <span class="text-slate-700 dark:text-slate-300"
                >Responsive Design</span
              >
            </div>
            <div class="flex items-center">
              <div class="mr-3 h-3 w-3 rounded-full bg-secondary" />
              <span class="text-slate-700 dark:text-slate-300">APIs REST</span>
            </div>
          </div>

          <BaseButton
            href="/cv/Virginia-Contreras_CV.pdf"
            download
            variant="primary"
            size="lg"
          >
            <IconifyIcon icon="mdi:download" /> Descargar CV
          </BaseButton>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <img
            height="500"
            width="600"
            class="flex w-auto justify-center"
            align="center"
            :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=vmirella&layout=donut&locale=es&hide_title=true&show_icons=true`"
          />
          <div class="mt-4 flex items-center justify-center text-secondary">
            <span class="mr-2">Lenguajes más usados </span>
            <IconifyIcon
              icon="mdi:github"
              height="20"
              width="20"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Icon as IconifyIcon } from '@iconify/vue'
</script>
