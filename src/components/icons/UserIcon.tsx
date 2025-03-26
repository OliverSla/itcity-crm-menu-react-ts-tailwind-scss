import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export function UserIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10.35 1.36328C8.48125 1.39766 7.2875 2.15234 6.775 3.32578C6.28594 4.44297 6.39531 5.85391 6.75 7.31328C6.55937 7.53672 6.40781 7.83672 6.4625 8.28828C6.52187 8.78047 6.65781 9.13047 6.85 9.37578C6.95625 9.51016 7.09531 9.52266 7.225 9.58828C7.29531 10.007 7.4125 10.4258 7.5875 10.7758C7.6875 10.9773 7.80156 11.1633 7.9125 11.3133C7.9625 11.3805 8.03437 11.4195 8.0875 11.4758C8.09062 11.9695 8.09219 12.3805 8.05 12.9008C7.92031 13.2148 7.61719 13.468 7.125 13.7133C6.61719 13.9664 5.95625 14.2008 5.2875 14.4883C4.61875 14.7758 3.93125 15.1258 3.3875 15.6758C2.84375 16.2258 2.45938 16.9805 2.4 17.9758L2.375 18.4008H18.425L18.4 17.9758C18.3406 16.9805 17.9547 16.2258 17.4125 15.6758C16.8703 15.1258 16.1906 14.7758 15.525 14.4883C14.8594 14.2008 14.2062 13.9664 13.7 13.7133C13.2141 13.4695 12.9078 13.2227 12.775 12.9133C12.7312 12.3867 12.7344 11.9742 12.7375 11.4758C12.7906 11.418 12.8625 11.3805 12.9125 11.3133C13.0219 11.1617 13.1266 10.9758 13.225 10.7758C13.3953 10.4258 13.5187 10.0055 13.5875 9.58828C13.7125 9.52266 13.8469 9.50703 13.95 9.37578C14.1422 9.13047 14.2781 8.78047 14.3375 8.28828C14.3906 7.85078 14.2437 7.56172 14.0625 7.33828C14.2578 6.70391 14.5078 5.67891 14.425 4.62578C14.3797 4.05078 14.2328 3.47734 13.8875 3.00078C13.5719 2.56328 13.0594 2.24453 12.4125 2.11328C11.9922 1.56797 11.2359 1.36328 10.3625 1.36328H10.35ZM10.3625 2.16328C10.3672 2.16328 10.3703 2.16328 10.375 2.16328C11.1797 2.16641 11.7016 2.40234 11.85 2.66328L11.95 2.82578L12.1375 2.85078C12.6937 2.92734 13.0125 3.15234 13.2375 3.46328C13.4625 3.77422 13.5875 4.20859 13.625 4.68828C13.7 5.64766 13.4234 6.76484 13.25 7.28828L13.15 7.60078L13.425 7.76328C13.4078 7.75234 13.5781 7.86797 13.5375 8.20078C13.4906 8.59297 13.3969 8.79609 13.325 8.88828C13.2531 8.98047 13.2156 8.97578 13.2125 8.97578L12.875 9.00078L12.8375 9.32578C12.8 9.67109 12.6609 10.0945 12.5 10.4258C12.4187 10.5914 12.3359 10.7367 12.2625 10.8383C12.1891 10.9398 12.1125 10.9961 12.15 10.9758L11.9375 11.0883V11.3258C11.9375 11.9055 11.9141 12.3805 11.975 13.0508V13.1008L12 13.1508C12.2281 13.7648 12.7562 14.1477 13.3375 14.4383C13.9187 14.7289 14.5859 14.943 15.2125 15.2133C15.8391 15.4836 16.4125 15.807 16.8375 16.2383C17.175 16.5805 17.3875 17.0336 17.5 17.6008H3.3C3.4125 17.0352 3.62344 16.5805 3.9625 16.2383C4.38906 15.807 4.97031 15.4836 5.6 15.2133C6.22969 14.943 6.89219 14.7289 7.475 14.4383C8.05781 14.1477 8.59687 13.7648 8.825 13.1508L8.85 13.0508C8.91094 12.3805 8.8875 11.9055 8.8875 11.3258V11.0883L8.675 10.9758C8.71094 10.9945 8.625 10.9398 8.55 10.8383C8.475 10.7367 8.38281 10.5914 8.3 10.4258C8.13438 10.0945 7.99844 9.66797 7.9625 9.32578L7.925 9.00078L7.5875 8.97578C7.58437 8.97578 7.54688 8.98047 7.475 8.88828C7.40312 8.79609 7.30937 8.59297 7.2625 8.20078C7.22344 7.86797 7.39219 7.75234 7.375 7.76328L7.6375 7.60078L7.5625 7.31328C7.18594 5.86328 7.12031 4.54609 7.5125 3.65078C7.90312 2.75859 8.7 2.19766 10.3625 2.16328Z" />
    </svg>
  )
}
