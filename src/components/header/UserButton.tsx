'use client'

import { useState } from 'react'
import { UserIcon } from '../icons'
import { UserModal } from '../UI/UserModal'

interface UserButtonProps {
  className?: string
  userName?: string
  userCompany?: string
  userImage?: string
  onClick?: () => void
}

export const UserButton = ({ className = '', userName, userCompany, userImage, onClick }: UserButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    onClick?.()
    setIsModalOpen(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
        aria-label="User profile"
      >
        <UserIcon size={20} className="text-gray-500 dark:text-gray-400" />
      </button>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={userName}
        userCompany={userCompany}
        userImage={userImage}
      />
    </>
  )
}
