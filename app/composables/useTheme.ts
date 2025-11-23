export const useTheme = () => {
  const currentTheme = useState<string>('theme', () => 'blue')
  const isDark = useState<boolean>('dark', () => false)

  const setTheme = (theme: string) => {
    currentTheme.value = theme
    if (import.meta.client) {
      localStorage.setItem('portfolio-theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
      console.log('[Theme] setTheme ->', theme)
    }
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('dark-mode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('dark-mode', 'false')
      }
      console.log('[Theme] toggleDarkMode ->', isDark.value)
    }
  }
  onMounted(() => {
    try {
      if (import.meta.client) {
        const savedTheme = localStorage.getItem('portfolio-theme')
        console.log('[Theme] savedTheme en localStorage:', savedTheme)
        console.log('[Theme] currentTheme inicial:', currentTheme.value)
        if (savedTheme && savedTheme !== currentTheme.value) {
          currentTheme.value = savedTheme
          console.log('[Theme] currentTheme actualizado a:', currentTheme.value)
        }

        const savedDark = localStorage.getItem('dark-mode')
        console.log('[Theme] savedDark en localStorage:', savedDark)
        if (savedDark !== null) {
          isDark.value = savedDark === 'true'
          document.documentElement.classList.toggle('dark', isDark.value)
          console.log('[Theme] isDark actualizado a:', isDark.value)
        }
      }
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
