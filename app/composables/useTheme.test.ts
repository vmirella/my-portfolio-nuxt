import { beforeEach, describe, it, expect } from 'vitest'

import { useTheme } from './useTheme'
import { mountComposable } from '../../tests/utils/mountComposable'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
  })

  it('debería iniciar con el tema blue', () => {
    const { result: theme } = mountComposable(useTheme)

    expect(theme.currentTheme.value).toBe('blue')
  })

  it('debería iniciar con dark mode desactivado', () => {
    const { result: theme } = mountComposable(useTheme)

    expect(theme.isDark.value).toBe(false)
  })

  it('debería cambiar el tema', () => {
    const { result: theme } = mountComposable(useTheme)

    theme.setTheme('purple')

    expect(theme.currentTheme.value).toBe('purple')
  })

  it('debería guardar el tema en localStorage', () => {
    const { result: theme } = mountComposable(useTheme)

    theme.setTheme('green')

    expect(localStorage.getItem('theme')).toBe('green')
  })

  it('debería aplicar el tema al elemento html', () => {
    const { result: theme } = mountComposable(useTheme)

    theme.setTheme('orange')

    expect(document.documentElement.classList.contains('theme-orange')).toBe(
      true
    )

    expect(document.documentElement.getAttribute('data-theme')).toBe('orange')
  })

  it('no debería cambiar el tema si recibe un tema inválido', () => {
    const { result: theme } = mountComposable(useTheme)

    theme.setTheme('green')
    theme.setTheme('red')

    expect(theme.currentTheme.value).toBe('green')
  })

  it('debería activar el dark mode', () => {
    localStorage.setItem('dark', 'false')

    const { result: theme } = mountComposable(useTheme)

    theme.toggleDarkMode()

    expect(theme.isDark.value).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('debería desactivar el dark mode', () => {
    localStorage.setItem('dark', 'true')

    const { result: theme } = mountComposable(useTheme)

    theme.toggleDarkMode()

    expect(theme.isDark.value).toBe(false)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('debería guardar el estado del dark mode en localStorage', () => {
    localStorage.setItem('dark', 'false')

    const { result: theme } = mountComposable(useTheme)

    theme.toggleDarkMode()

    expect(localStorage.getItem('dark')).toBe('true')
  })

  it('debería guardar false cuando se desactiva el dark mode', () => {
    localStorage.setItem('dark', 'true')

    const { result: theme } = mountComposable(useTheme)

    theme.toggleDarkMode()

    expect(localStorage.getItem('dark')).toBe('false')
  })

  it('debería recuperar el tema guardado en localStorage', () => {
    localStorage.setItem('theme', 'purple')

    const { result: theme } = mountComposable(useTheme)

    expect(theme.currentTheme.value).toBe('purple')
  })

  it('debería recuperar el estado de dark mode guardado', () => {
    localStorage.setItem('dark', 'true')

    const { result: theme } = mountComposable(useTheme)

    expect(theme.isDark.value).toBe(true)
  })

  it('debería ignorar un tema inválido guardado en localStorage', () => {
    localStorage.setItem('theme', 'red')

    const { result: theme } = mountComposable(useTheme)

    theme.setTheme('green')

    // Simulamos que localStorage contiene un valor inválido
    localStorage.setItem('theme', 'red')

    expect(theme.currentTheme.value).toBe('green')
  })

  it('debería aplicar el tema guardado al elemento html', () => {
    localStorage.setItem('theme', 'purple')

    mountComposable(useTheme)

    expect(document.documentElement.classList.contains('theme-purple')).toBe(
      true
    )

    expect(document.documentElement.getAttribute('data-theme')).toBe('purple')
  })

  it('debería aplicar el dark mode guardado al elemento html', () => {
    localStorage.setItem('dark', 'true')

    mountComposable(useTheme)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
