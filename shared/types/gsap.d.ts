import type { gsap, ScrollTrigger } from 'gsap'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
  }
}
