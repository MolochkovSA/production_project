import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import style from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={changeLanguage}
      theme={ButtonTheme.CLEAR}
    >
      {short ? t('ShortLanguage') : t('Language')}
    </Button>
  )
}
