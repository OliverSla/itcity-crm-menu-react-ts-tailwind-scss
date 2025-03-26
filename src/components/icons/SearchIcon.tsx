import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function SearchIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M42 6C23.2422 6 8 21.2422 8 40C8 58.7578 23.2422 74 42 74C49.4219 74 56.2812 71.6094 61.875 67.5625L88.1875 93.8125L93.8125 88.1875L67.8125 62.125C72.9219 56.1719 76 48.4453 76 40C76 21.2422 60.7578 6 42 6ZM42 10C58.5938 10 72 23.4062 72 40C72 56.5938 58.5938 70 42 70C25.4062 70 12 56.5938 12 40C12 23.4062 25.4062 10 42 10Z" />
    </svg>
  )
}
