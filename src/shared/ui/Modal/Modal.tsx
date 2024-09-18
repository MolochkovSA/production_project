import React, { useEffect } from 'react'
import { classNames } from 'shared/lib'
import { Portal } from '../Portal/Portal'

import style from './Modal.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const { theme } = useTheme()

  const mods: Record<string, boolean> = {
    [style.opened]: isOpen,
    [style[theme]]: true,
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose, isOpen])

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Portal>
      <div className={classNames(style.Modal, mods, [className])}>
        <div className={style.overlay} onClick={handleClose}>
          <div className={style.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
