import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function ForwardIcon({ size = 20, className = '', ...props }: IconProps) {
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
      <path d="M29.9766 7.98438C29.1641 7.98438 28.4375 8.47656 28.125 9.22656C27.8203 9.98437 28 10.8437 28.5859 11.4141L67.1719 50L28.5859 88.5859C28.0625 89.0859 27.8516 89.8359 28.0391 90.5312C28.2188 91.2344 28.7656 91.7812 29.4688 91.9609C30.1641 92.1484 30.9141 91.9375 31.4141 91.4141L71.4141 51.4141C72.1953 50.6328 72.1953 49.3672 71.4141 48.5859L31.4141 8.58594C31.0391 8.19531 30.5234 7.98438 29.9766 7.98438Z" />
    </svg>
  )
}
