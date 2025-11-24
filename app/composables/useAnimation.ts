import { useNuxtApp } from '#imports'
import type { Ref } from 'vue'

export function useAnimation() {
  const { $gsap } = useNuxtApp()

  const countUp = (
    target: Ref<number>,
    endValue: number,
    duration = 2,
    delay = 0
  ) => {
    const start = Number.isFinite(target.value) ? target.value : 0

    const animObj = { value: start }

    const tween = $gsap.fromTo(
      animObj,
      { value: start },
      {
        value: endValue,
        duration,
        delay,
        ease: 'power1.out',
        onUpdate: () => {
          const v = animObj.value
          if (Number.isFinite(v)) {
            target.value = Math.round(v)
          }
        },
        onComplete: () => {
          target.value = Math.round(endValue)
        },
      }
    )

    // devolver la instancia por si se quiere controlar desde fuera
    return {
      tween,
      kill: () => {
        try {
          tween.kill?.()
        } catch (e) {
          console.log('error', e)
        }
      },
    }
  }

  return {
    countUp,
  }
}
