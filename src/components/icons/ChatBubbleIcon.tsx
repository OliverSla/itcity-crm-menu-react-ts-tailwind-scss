import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function ChatBubbleIcon({ size = 20, className = '', ...props }: IconProps) {
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
      <path d="M50 8.14062C24.7344 8.14062 4.14062 25.8438 4.14062 48C4.14062 60.8594 11.1875 72.0547 22.0078 79.375C21.9922 79.8047 22.0234 80.5 21.4609 82.5938C20.7578 85.1797 19.3438 88.8281 16.4766 92.9375L14.4375 95.8594H18C30.3438 95.8594 37.4844 87.8125 38.5938 86.5234C42.2656 87.3828 46.0469 87.8594 50 87.8594C75.2656 87.8594 95.8594 70.1562 95.8594 48C95.8594 25.8438 75.2656 8.14062 50 8.14062ZM50 11.8594C73.5391 11.8594 92.1406 28.1562 92.1406 48C92.1406 67.8438 73.5391 84.1406 50 84.1406C45.9219 84.1406 42.0781 83.75 38.4688 82.8047L37.3125 82.5L36.5547 83.4297C36.5547 83.4297 30.7812 89.9453 21.5625 91.5156C23.2344 88.5 24.4688 85.6875 25.0391 83.5625C25.8438 80.6016 25.8594 78.6016 25.8594 78.6016V77.5781L25 77.0312C14.4375 70.3125 7.85938 59.9141 7.85938 48C7.85938 28.1562 26.4609 11.8594 50 11.8594ZM30 44C27.7891 44 26 45.7891 26 48C26 50.2109 27.7891 52 30 52C32.2109 52 34 50.2109 34 48C34 45.7891 32.2109 44 30 44ZM50 44C47.7891 44 46 45.7891 46 48C46 50.2109 47.7891 52 50 52C52.2109 52 54 50.2109 54 48C54 45.7891 52.2109 44 50 44ZM70 44C67.7891 44 66 45.7891 66 48C66 50.2109 67.7891 52 70 52C72.2109 52 74 50.2109 74 48C74 45.7891 72.2109 44 70 44Z" />
    </svg>
  )
}
