import React from 'react'
import { classNames } from 'shared/lib'

import style from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={style.links}></div>
    </div>
  )
}
