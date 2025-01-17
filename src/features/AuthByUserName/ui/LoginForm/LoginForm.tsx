import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName'

import style from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = memo(function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { userName, password, error, isLoading } = useAppSelector(getLoginState)

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ userName, password }))
  }, [dispatch, userName, password])

  return (
    <div className={classNames(style.LoginForm, {}, [className])}>
      <Text title={t('Login form')} />

      {error && <Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />}

      <Input
        type="text"
        className={style.loginInput}
        placeholder={t('Username')}
        onChange={onChangeUserName}
        value={userName}
        autofocus
      />

      <Input
        type="text"
        className={style.loginInput}
        placeholder={t('Password')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        type="submit"
        className={style.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  )
})
