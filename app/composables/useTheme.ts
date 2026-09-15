type Theme = 'blue' | 'green' | 'purple' | 'orange'

const isValidTheme = (theme: string | null): theme is Theme => {
  return (
    theme === 'blue' ||
    theme === 'green' ||
    theme === 'purple' ||
    theme === 'orange'
  )
}

export const useTheme = () => {
  const currentTheme = useState<Theme>('theme', () => 'blue')
  const isDark = useState<boolean>('dark', () => false)

  const applyTheme = (theme: Theme) => {
    if (!import.meta.client) return

    document.documentElement.setAttribute('data-theme', theme)
  }

  const applyDarkMode = (dark: boolean) => {
    if (!import.meta.client) return

    document.documentElement.classList.toggle('dark', dark)
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme

    if (import.meta.client) {
      localStorage.setItem('portfolio-theme', theme)
      applyTheme(theme)
    }
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value

    if (import.meta.client) {
      localStorage.setItem('dark-mode', String(isDark.value))
      applyDarkMode(isDark.value)
    }
  }

  onMounted(() => {
    if (!import.meta.client) return

    try {
      const savedTheme = localStorage.getItem('portfolio-theme')
      const savedDark = localStorage.getItem('dark-mode')

      if (isValidTheme(savedTheme)) {
        currentTheme.value = savedTheme
      }

      if (savedDark !== null) {
        isDark.value = savedDark === 'true'
      }

      applyTheme(currentTheme.value)
      applyDarkMode(isDark.value)
    } catch (error) {
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
