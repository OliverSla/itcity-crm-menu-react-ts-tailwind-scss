'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuNavigationItems from '../UI/MenuNavigationItems'
import { HeaderActions } from '@/components/header'

interface DashboardHeaderProps {
  userName?: string
  userAvatar?: string
  notificationCount?: number
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName = 'User Name',
  userAvatar = '/avatar-placeholder.png',
  notificationCount = 0
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className=" bg-white flex flex-row items-center h-[44px] dark:bg-gray-960 ">
      <div className="flex-between w-full">
        <div className="flex items-center justify-between px-[16px]">
          <div className="flex items-center gap-[40px]">
            <div className="flex shrink-0">
              <img src="/logo/itcity_logo_icon.svg" alt="ITCity Logo" />
            </div>
            <MenuNavigationItems />
          </div>

          <div className="flex items-center gap-4">
            <HeaderActions
              onSearchClick={() => setIsSearchActive(!isSearchActive)}
              onUserClick={() => setIsProfileOpen(!isProfileOpen)}
              onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
