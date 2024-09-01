import React from 'react'
import { classNames } from 'shared/lib'

import * as style from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={style.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          About
        </AppLink>
      </div>
    </div>
  )
}
