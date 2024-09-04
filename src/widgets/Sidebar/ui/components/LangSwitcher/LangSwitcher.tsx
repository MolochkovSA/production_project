import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

import * as style from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(style.LangSwitcher, {}, [className])}
      onClick={changeLanguage}
      theme={ThemeButton.CLEAR}
    >
      {t('Language')}
      {t('temp')}
    </Button>
  )
}
