import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function CloseIcon({ size = 20, className = '', ...props }: IconProps) {
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
      <path d="M15.4375 12.5625L12.5625 15.4375L47.125 50L12.5625 84.5625L15.4375 87.4375L50 52.875L84.5625 87.4375L87.4375 84.5625L52.875 50L87.4375 15.4375L84.5625 12.5625L50 47.125L15.4375 12.5625Z" />
    </svg>
  )
}
