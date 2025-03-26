'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navigationItems = [
  { name: 'Domácnosti', href: '/domacnosti' },
  { name: 'Firmy', href: '/firmy' },
  { name: 'Eshop', href: '/eshop' },
  { name: 'Podpora', href: '/podpora' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/kontakt' }
]

export default function MenuNavigationItems() {
  const pathname = usePathname() 

  return (
    <nav className='hidden md:flex'>
      <ul className="flex flex-row ite s-center gap-[24px]">
        {navigationItems.map(item => (
          <li key={item.name} className="menu-desktop-top">
            <Link
              href={item.href}
              className={clsx(
                'hover:text-gray-700 dark:hover:text-gray-200',
                pathname === item.href ? 'text-gray-950 :hover-text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
