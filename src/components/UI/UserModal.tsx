import { useState, useEffect } from 'react'
import { AlarmIcon, ChatBubbleIcon, CloseIcon, ShoppingCartIcon, UserIcon, ForwardIcon } from '../icons'
import Image from 'next/image'

interface UserModalProps {
  isOpen: boolean
  onClose: () => void
  userName?: string
  userCompany?: string
  userImage?: string
}

export function UserModal({
  isOpen,
  onClose,
  userName = 'Miroslav Havrila',
  userCompany = 'ITcity s. r. o.',
  userImage = '/images/ProfileUser.png'
}: UserModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const ANIMATION_DURATION = 300 

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 0) 
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, ANIMATION_DURATION)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }



  if (!isOpen && !isAnimating) return null

  return (
    <div
      className={`fixed inset-0 md:inset-0 md:top-[44px] bottom-0 z-30 flex items-end justify-center sm:justify-end sm:items-start bg-base-black/30 backdrop-blur-sm sm:p-3 transition-opacity duration-0.3 ease-easeOutSine ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative w-full max-w-[550px] bg-white p-4 shadow-lg md:rounded-md dark:bg-gray-950 md:max-w-[300px] transition-transform duration-0.3 ease-easeOutSine ${
          isAnimating ? 'show-animation' : 'hide-animation'
        }`}
      >
        {/* Close button */}
        <p className="text-user-modal-profile-company font-light text-gray-800 dark:text-gray-400">Účet</p>
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          aria-label="Zatvoriť"
        >
          <CloseIcon size={20} />
        </button>

        {/* User profile */}
        <div className="mb-8 mt-8 flex flex-col items-center">
          <div className="mb-3 h-16 w-16 overflow-hidden rounded-full">
            <Image src={userImage} alt={userName} width={64} height={64} className="h-full w-full object-cover" />
          </div>
          <h2 className="text-user-modal-profile-name font-semibold text-gray-800 dark:text-gray-100">{userName}</h2>
          <p className="text-user-modal-profile-company text-gray-500 dark:text-gray-400">{userCompany}</p>
        </div>

        {/* Notification badges */}
        <div className="mb-6 flex justify-center gap-10 border-b border-gray-100 pb-6 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <div className="relative">
              <ShoppingCartIcon size={32} className="text-gray-500 dark:text-gray-400" />
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-[3px] bg-gray-600 text-user-modal-profile-icon-small-text text-white">
                5
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <AlarmIcon size={32} className="text-gray-500 dark:text-gray-400" />
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-[3px] bg-gray-600 text-user-modal-profile-icon-small-text text-white">
                4
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <ChatBubbleIcon size={32} className="text-gray-500 dark:text-gray-400" />
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-[3px] bg-red-500 text-user-modal-profile-icon-small-text text-white">
                10
              </span>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-4 gap-3 border-b border-gray-100 pb-6 dark:border-gray-700">
          <MenuItem label="Kalkulačka" />
          <MenuItem label="GPS" />
          <MenuItem label="Faktúra"  />
          <MenuItem label="Viac"  />
        </div>

        {/* Options list */}
        <div className="mt-6 space-y-2">
          <OptionItem label="Nastavenia" />
          <OptionItem label="Dokumentácia" />
          <OptionItem label="Eshop" />
        </div>

        {/* Nástenka button */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-[4px] bg-brand py-3 text-white hover:bg-green-600 dark:bg-brand dark:hover:bg-green-600">
          <UserIcon size={20} className="text-white" />
          <span className="text-button-m font-ultraLight">Nástenka</span>
        </button>
      </div>
    </div>
  )
}

// Helper components
function MenuItem({ label, }: { label: string;  }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[48px] w-[48px] rounded-md bg-gray-200 p-3 dark:bg-gray-700">
        {/* <Image src={icon} alt={label} width={24} height={24} /> */}
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
    </div>
  )
}

function OptionItem({ label }: { label: string }) {
  return (
    <button className="flex w-full items-center justify-between px-2 py-[8px] text-left hover:bg-gray-50 dark:hover:bg-gray-800">
      <span className="text-user-modal-profile-option-text text-gray-500 dark:text-gray-400">{label}</span>
      <ForwardIcon size={20} className="text-gray-500 dark:text-gray-400" />
    </button>
  )
}