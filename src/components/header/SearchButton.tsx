'use client'

import { useState } from 'react'
import { SearchIcon} from '../icons'
import { Search } from './Search'

interface SearchButtonProps {
  className?: string
  onClick?: () => void
}

export function SearchButton({ className = '' }: SearchButtonProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const toggleSearch = () => {
    if (isSearchOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsSearchOpen(false)
        setIsClosing(false)
      }, 300)
    } else {
      setIsSearchOpen(true)
      setIsOpening(true)
      setTimeout(() => {
        setIsOpening(false)
      })
    }
  }

  return (
    <>
      <button
        onClick={toggleSearch}
        className={`p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
        aria-label={isSearchOpen ? 'Zatvoriť vyhľadávanie' : 'Vyhľadávanie'}
      >
        <SearchIcon size={20} className="text-gray-500 dark:text-gray-400" />
      </button>

      {(isSearchOpen || isClosing) && (
        <div
          className={`fixed inset-0 md:top-[44px] z-20 flex bg-base-black/30 backdrop-blur-sm p-0
            transition-all duration-300 ease-easeOutSine
            ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        >
          <div
            className={`flex w-full transform transition-all duration-0.3 ease-easeOutSine
            ${isClosing ? '-translate-y-8' : isOpening ? 'translate-y-0' : 'translate-y-0'}
            ${isOpening ? 'translate-y-0 opacity-0' : 'translate-y-8 opacity-100 '}`}
            style={{
              transform: isOpening ? 'translateY(80px) ' : isClosing ? 'translateY(0px)' : 'translateY(0)'
            }}
          >
            <Search placeholder="Hľadať..." className="w-full" onClose={() => toggleSearch()} />
          </div>
        </div>
      )}
    </>
  )
}
