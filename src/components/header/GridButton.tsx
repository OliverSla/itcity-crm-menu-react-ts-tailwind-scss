'use client'

import { useState } from 'react'
import { GridIcon } from '../icons'
import { GridModal } from '../UI/GridModal'

interface GridButtonProps {
  className?: string
}

export function GridButton({ className = '' }: GridButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
        aria-label="Menu aplikácií"
      >
        <GridIcon size={20} className="text-gray-500 dark:text-gray-400" />
      </button>

      <GridModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
