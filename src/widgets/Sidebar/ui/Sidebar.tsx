import React from 'react'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from './components/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'

import style from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = React.useState(false)

  const onToggle = async () => {
    Promise.resolve(setCollapsed((prev) => !prev))
  }

  return (
    <div data-testid="sidebar" className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        className={style.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={style.items}>
        <AppLink className={style.item} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
          <MainIcon className={style.icon} />
          <span className={style.text}>{t('Main')}</span>
        </AppLink>

        <AppLink className={style.item} to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          <AboutIcon className={style.icon} />
          <span className={style.text}>{t('About')}</span>
        </AppLink>
      </div>

      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} short={collapsed} />
      </div>
    </div>
  )
}
