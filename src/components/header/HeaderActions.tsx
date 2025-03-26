'use client'

import { GridButton, MenuButton, SearchButton, ThemeToggle, UserButton } from './'

interface HeaderActionsProps {
  onSearchClick?: () => void
  onUserClick?: () => void
  onMenuClick?: () => void
}

export const HeaderActions = ({ onSearchClick, onUserClick, onMenuClick }: HeaderActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <SearchButton onClick={onSearchClick} className="hidden md:flex" />
      <GridButton />
      <UserButton onClick={onUserClick} />
      <MenuButton onClick={onMenuClick} className="md:hidden" />
    </div>
  )
}
