import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function RightIcon({ size = 20, className = '', ...props }: IconProps) {
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
      <path d="M59.6875 26.1877C58.9375 26.3205 58.336 26.8674 58.125 27.594C57.9141 28.3283 58.1328 29.1096 58.6875 29.6252L77.0625 48.0002H18C17.9375 48.0002 17.875 48.0002 17.8125 48.0002C16.711 48.0549 15.8516 48.9924 15.9063 50.094C15.961 51.1955 16.8985 52.0549 18 52.0002H77.0625L58.6875 70.3752C58.0938 70.8596 57.8203 71.633 57.9922 72.383C58.1641 73.1252 58.75 73.7111 59.4922 73.883C60.2422 74.0549 61.0157 73.7815 61.5 73.1877L83.3125 51.4377L84.6875 50.0002L83.3125 48.5627L61.5 26.8127C61.086 26.3674 60.4844 26.1408 59.875 26.1877C59.8125 26.1877 59.75 26.1877 59.6875 26.1877Z" />
    </svg>
  )
}
