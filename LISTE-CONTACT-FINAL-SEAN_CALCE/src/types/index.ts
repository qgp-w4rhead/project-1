// Common TypeScript interfaces and types
export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface ThemeConfig {
  isDark: boolean
  primaryColor: string
  secondaryColor: string
}