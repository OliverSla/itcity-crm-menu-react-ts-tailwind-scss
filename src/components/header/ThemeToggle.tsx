'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { MoonIcon, SunIcon } from '@/components/icons'

interface ThemeToggleProps {
  className?: string
  onClick?: () => void
}

export const ThemeToggle = ({ className = '', onClick }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme()

  const handleClick = () => {
    toggleTheme()
    onClick?.()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon size={20}  className="text-gray-500 dark:text-gray-400" />
      ) : (
        <MoonIcon size={20}  className="text-gray-500 dark:text-gray-400" />
      )}
    </button>
  )
}
