import React from 'react'
import { classNames } from 'shared/lib'
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from './components/LangSwitcher/LangSwitcher'

import style from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>{'toggle'}</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
