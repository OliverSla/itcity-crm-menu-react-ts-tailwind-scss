'use client'

import { useState } from 'react'
import { MenuIcon, CloseIcon, ForwardIcon } from '../icons'
import Link from 'next/link'

interface MenuButtonProps {
  className?: string
  onClick?: () => void
}

interface MenuItem {
  id: string
  title: string
  link: string
}

const menuItems: MenuItem[] = [
  { id: '1', title: 'Domácnosti', link: '/domacnosti' },
  { id: '2', title: 'Firmy', link: '/firmy' },
  { id: '3', title: 'Eshop', link: '/eshop' },
]

export function MenuButton({ className = '' }: MenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsClosing(false)
      }, 300)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
        aria-label={isMenuOpen ? 'Zatvoriť menu' : 'Otvoriť menu'}
      >
        {isMenuOpen ? (
          <CloseIcon size={20} className="text-gray-500 dark:text-gray-400" />
        ) : (
          <MenuIcon size={20} className="text-gray-500 dark:text-gray-400" />
        )}
      </button>

      {(isMenuOpen || isClosing) && (
        <div
          className={`fixed inset-0 top-[44px] z-20 flex flex-col bg-white dark:bg-gray-950
            transition-all duration-300 ease-easeOutSine
            ${isClosing ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
        >
          <div className="flex flex-col flex-1 overflow-y-auto pt-4">
          <div className='flex flex-col p-3'>
            <p className='text-gray-600 dark:text-gray-400 text-md mb-4 font-medium'>Najviac vyhľadávané</p>
          {menuItems.map(item => (
              <Link
                key={item.id}
                href={item.link}
                className="flex items-center justify-between px-4 py-4 text-base text-gray-600 dark:text-gray-300 
                  hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={toggleMenu}
              >
                {item.title}
                <ForwardIcon size={16} className="text-gray-400" />
              </Link>
            ))}
          </div>

          <div className='flex flex-col p-3'>
          <p className='text-gray-600 dark:text-gray-400 text-md mb-4 font-medium'>Ostatné</p>
          {menuItems.map(item => (
              <Link
                key={item.id}
                href={item.link}
                className="flex items-center justify-between px-4 py-4 text-base text-gray-600 dark:text-gray-300 
                  hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={toggleMenu}
              >
                {item.title}
                <ForwardIcon size={16} className="text-gray-400" />
              </Link>
            ))}
          </div>
          </div>

          {/* Vyhľadávanie v spodnej časti */}
          <div className="sticky bottom-0 w-full p-4 bg-white dark:bg-gray-950">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Hľadať..."
                className="w-full h-12 pl-4 pr-4 text-base dark:bg-gray-950 
                    dark:border-gray-800 border-b-[1px] border-gray-300 dark:placeholder:text-gray-400
                  text-gray-900 dark:text-gray-100
                  focus:outline-none "
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
