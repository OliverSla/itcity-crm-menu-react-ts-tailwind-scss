import { CloseIcon } from '../icons'

interface CloseButtonProps {
  onClick: () => void
  className?: string
}

export function CloseButton({ onClick, className = '' }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label="Zatvoriť"
    >
      <CloseIcon size={20} className="text-gray-500 dark:text-gray-400" />
    </button>
  )
}
