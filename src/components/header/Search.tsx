'use client'

import { useState, useEffect, useRef } from 'react'
import { SearchIcon, ForwardIcon, RightIcon } from '../icons'
import Link from 'next/link'

interface SearchProps {
  className?: string
  placeholder?: string
  onClose?: () => void
}

interface SearchResult {
  id: string
  title: string
  category: string
  link: string
}

// Simulované výsledky vyhľadávania ( Príprava na API )
const mockResults: SearchResult[] = [
  { id: '1', title: 'Domácnosti', category: 'Oblubene', link: '/domacnosti' },
  { id: '2', title: 'Firmy', category: 'Oblubene', link: '/firmy' },
  { id: '3', title: 'Eshop', category: 'Oblubene', link: '/eshop' }
]
const mockResults2: SearchResult[] = [
  { id: '4', title: 'Podpora', category: 'Oblubene', link: '/podpora' },
  { id: '5', title: 'Blog', category: 'Oblubene', link: '/blog' },
  { id: '6', title: 'Kontakt', category: 'Oblubene', link: '/kontakt' },
  { id: '7', title: 'Dokumentácia', category: 'Oblubene', link: '/dokumentacia' }
]

export function Search({ className = '', placeholder = 'Search', onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Automaticky zamerať input po otvorení
    inputRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logika pre vyhľadávanie..
    console.log('Searching for:', query)
    if (onClose) {
      onClose()
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 200)
  }

  return (
    <div className="relative flex flex-col w-full h-fit bg-white dark:bg-gray-960 justify-start items-center z-10">
      <form onSubmit={handleSubmit} className={`flex max-w-[1280px] h-[100px] z-20 ${className}`}>
        <div className="relative flex-1 w-full h-full">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="w-full h-full pl-12 pr-4 text-[32px] bg-white dark:bg-gray-960 border border-transparent 
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              text-gray-900 dark:text-gray-100
              focus:outline-none 
              "
          />
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <SearchIcon size={32} className="text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </form>

      {/* Výsledky vyhľadávania */}
      {isOpen && query.length > 0 && query.length < 10 && (
        <div className=" max-w-[1280px] left-0 w-full bg-white dark:bg-gray-960 border-gray-200 dark:border-gray-800 py-2">
          <div className="px-4 py-2">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">Priame odkazy</h3>
            <div className="space-y-1">
              {mockResults.map(result => (
                <Link
                  key={result.id}
                  href={result.link}
                  className="flex items-center px-2 py-2 text-left text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400"
                  onClick={() => {
                    if (onClose) {
                      onClose()
                    }
                  }}
                >
                  <RightIcon size={16} className="mr-3" />
                  <span className="text-sm">{result.title}</span>
                </Link>
              ))}
            </div>
          </div>
          {query.length > 4 ? null : (
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">Ďalšie odkazy</h3>
              <div className="space-y-1">
                {mockResults2.map(result => (
                  <Link
                    key={result.id}
                    href={result.link}
                    className="flex items-center px-2 py-2 text-left text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400"
                    onClick={() => {
                      if (onClose) {
                        onClose()
                      }
                    }}
                  >
                    <RightIcon size={16} className="mr-3" />
                    <span className="text-sm">{result.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
