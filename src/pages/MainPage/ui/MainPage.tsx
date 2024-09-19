import React from 'react'
import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

export const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <div>
      <BugButton />
      {t('Main page')}
      <Counter />
    </div>
  )
}
