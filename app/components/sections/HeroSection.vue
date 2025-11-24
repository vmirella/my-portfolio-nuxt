<template>
  <section
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-24 text-center"
  >
    <div class="mx-auto max-w-4xl">
      <div class="mb-8">
        <img
          src="/images/virginia_contreras_villafuerte.png"
          alt="Virginia Contreras"
          width="128"
          height="128"
          class="backgroundImage mx-auto mb-4 h-32 w-32 animate-scale-in rounded-full object-cover shadow-lg"
          loading="lazy"
        />

        <h1
          class="mb-4 animate-fade-in text-5xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl"
        >
          Hola, soy <span class="text-primary">Virginia Contreras</span>
        </h1>
        <p
          class="mb-8 animate-slide-up text-2xl font-medium text-gray-700 dark:text-gray-200"
        >
          Desarrolladora
          <span class="font-bold text-primary">Front-End</span>
          con 6+ años de experiencia.
        </p>
        <p
          class="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          Transformo ideas en interfaces web dinámicas y responsivas,
          especializándome en construir experiencias de usuario excepcionales
          con un enfoque en la calidad y el rendimiento.
        </p>
      </div>

      <div class="mb-12 flex flex-wrap justify-center gap-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary">{{ countFirtRef }}+</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Años de experiencia
          </div>
        </div>
      </div>
      <BaseButton
        to="#projects"
        variant="primary"
        size="lg"
      >
        Ver mi trabajo
      </BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { countUp } = useAnimation()

  const countFirtRef = ref(1)

  onMounted(() => {
    if (countFirtRef.value) countUp(countFirtRef, 6, 3)
  })
</script>
