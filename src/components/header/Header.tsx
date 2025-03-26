'use client'

import { Search } from './Search'
import { UserButton } from './UserButton'
import { GridButton } from './GridButton'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container flex h-[44px] items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-brand hover:text-brand/90">
            <span className="sr-only">ITcity</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="currentColor" />
            </svg>
          </a>
          <GridButton />
        </div>

        {/* Search */}
        <Search placeholder="Vyhľadávanie..." className="mx-4" />

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
