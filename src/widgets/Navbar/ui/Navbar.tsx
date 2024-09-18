import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

import style from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={style.links}>
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem.'}
      </Modal>
    </div>
  )
}
