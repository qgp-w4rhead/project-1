import { ref } from 'vue'
import type { ThemeConfig } from '../types'

const defaultTheme: ThemeConfig = {
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  primaryColor: '#646cff',
  secondaryColor: '#42b883'
}

export const useTheme = () => {
  const theme = ref<ThemeConfig>(defaultTheme)

  const toggleTheme = () => {
    theme.value.isDark = !theme.value.isDark
    document.documentElement.classList.toggle('dark')
  }

  return {
    theme,
    toggleTheme
  }
}