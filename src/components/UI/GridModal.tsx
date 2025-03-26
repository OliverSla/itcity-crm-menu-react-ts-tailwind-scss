import { useState, useEffect } from 'react'
import { CloseIcon, ForwardIcon } from '../icons'

interface GridModalProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItem {
  label: string
  items: {
    label: string
    icon: string
  }[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Projekty',
    items: [
      { label: 'ITcity', icon: '' },
      { label: 'Kukajse', icon: '' },
      { label: 'Option', icon: '' }
    ]
  },
  {
    label: 'Aplikácie zdarma',
    items: [
      { label: 'Kalkulačka', icon: '/calculator-icon.svg' },
      { label: 'GPS', icon: '/gps-icon.svg' },
      { label: 'Faktúra', icon: '/invoice-icon.svg' },
      { label: 'Viac', icon: '/more-icon.svg' }
    ]
  },
  {
    label: 'Platené aplikácie',
    items: [
      { label: 'Kalkulačka', icon: '/calculator-icon.svg' },
      { label: 'GPS', icon: '/gps-icon.svg' },
      { label: 'Faktúra', icon: '/invoice-icon.svg' },
      { label: 'Viac', icon: '/more-icon.svg' }
    ]
  }
]

export function GridModal({ isOpen, onClose }: GridModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const ANIMATION_DURATION = 300 // v milisekundách - tento čas by mal zodpovedať CSS transition duration

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 0) // Malé oneskorenie pre lepšie načasovanie animácie
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  const handleClose = () => {
    // Najprv označíme, že sa má animovať zatvorenie
    setIsAnimating(false)
    // Potom počkáme na dokončenie animácie pred skutočným zatvorením
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
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          aria-label="Zatvoriť"
        >
          <CloseIcon size={20} />
        </button>

        {/* Menu sections */}
        <div className="space-y-6">
          <div className="space-y-2 mt-16 border-b border-gray-100 pb-6 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-400 mb-4">{menuItems[0].label}</h3>
            <div className="mt-6 space-y-2">
              {menuItems[0].items.map((item, index) => (
                <button
                  key={index}
                  className="flex w-full items-center justify-between px-2 py-[8px] text-left hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <span className="text-user-modal-profile-option-text text-gray-500 dark:text-gray-400">{item.label}</span>
                  <ForwardIcon size={16} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Aplikácie zdarma */}
          <div className="space-y-2 border-b border-gray-100 pb-6 dark:border-gray-700">
            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-400 mb-5">{menuItems[1].label}</h2>
            <div className="grid grid-cols-4 gap-3">
              {menuItems[1].items.map((item, index) => (
                <MenuItem key={index} label={item.label} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* Platené aplikácie */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-400 mb-5">{menuItems[2].label}</h2>
            <div className="grid grid-cols-4 gap-3">
              {menuItems[2].items.map((item, index) => (
                <MenuItem key={index} label={item.label} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper components
function MenuItem({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[48px] w-[48px] rounded-md bg-gray-200 p-3 dark:bg-gray-700">
        {/* <Image src={icon} alt={label} width={24} height={24} /> */}
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
    </div>
  )
}
