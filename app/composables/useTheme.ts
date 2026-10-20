import type { Theme } from '../types/theme'

const themes: Theme[] = ['blue', 'green', 'purple', 'orange']

const isValidTheme = (theme: string | null): theme is Theme => {
  return themes.includes(theme as Theme)
}

export const useTheme = () => {
  const currentTheme = useState<Theme>('theme', () => 'blue')
  const isDark = useState<boolean>('dark', () => false)

  const applyTheme = (theme: Theme) => {
    // remove any existing theme-... classes
    for (const t of themes) {
      document.documentElement.classList.remove(`theme-${t}`)
    }
    // add new theme class
    document.documentElement.classList.add(`theme-${theme}`)

    // also keep data-theme for CSS if needed
    document.documentElement.setAttribute('data-theme', theme)
  }

  const applyDarkMode = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setTheme = (theme: Theme | string) => {
    if (!isValidTheme(theme)) {
      return
    }

    currentTheme.value = theme

    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore storage errors in restricted environments */
    }

    applyTheme(theme as Theme)
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value

    try {
      localStorage.setItem('dark', String(isDark.value))
    } catch (e) {
      /* ignore storage errors in restricted environments */
    }

    applyDarkMode(isDark.value)
  }

  onMounted(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      const savedDark = localStorage.getItem('dark')

      if (isValidTheme(savedTheme)) {
        currentTheme.value = savedTheme
      }

      if (savedDark !== null) {
        isDark.value = savedDark === 'true'
      }

      applyTheme(currentTheme.value)
      applyDarkMode(isDark.value)
    } catch (error) {
      // Do not break initialization when storage or DOM access fails

      console.error('Error initializing theme:', error)
    }
  })

  return {
    currentTheme,
    isDark,
    setTheme,
    toggleDarkMode,
  }
}
