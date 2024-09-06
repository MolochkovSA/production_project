import React from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'

import * as style from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadePage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(style.PageError, {}, [className])}>
      <p>{t('Unexpected error')}</p>
      <Button onClick={reloadePage}>{t('Reload page')}</Button>
    </div>
  )
}
