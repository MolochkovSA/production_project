import React from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import style from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Input type="text" className={style.loginInput} placeholder={t('Username')} autofocus />
      <Input type="text" className={style.loginInput} placeholder={t('Password')} />
      <Button type="submit" className={style.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  )
}
