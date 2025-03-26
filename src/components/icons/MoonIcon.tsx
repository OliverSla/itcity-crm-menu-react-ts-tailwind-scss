import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function MoonIcon({ size = 20, className = '', ...props }: IconProps) {
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
      <path d="M62 8C38.8281 8 20 26.8281 20 50C20 73.1719 38.8281 92 62 92C67.9766 92 73.6562 90.7344 78.8047 88.4844C79.5312 88.1641 80 87.4453 80 86.6484C80 85.8516 79.5312 85.1328 78.8047 84.8125C65.3906 78.9531 56 65.5938 56 50C56 34.4062 65.3906 21.0469 78.8047 15.1875C79.5312 14.8672 80 14.1484 80 13.3516C80 12.5547 79.5312 11.8359 78.8047 11.5156C73.6562 9.26563 67.9766 8 62 8ZM62 12C65.9688 12 69.7109 12.7969 73.3125 13.9375C60.7109 21.1875 52 34.4375 52 50C52 65.5625 60.7109 78.8125 73.3125 86.0625C69.7109 87.2031 65.9688 88 62 88C40.9922 88 24 71.0078 24 50C24 28.9922 40.9922 12 62 12Z" />
    </svg>
  )
}
