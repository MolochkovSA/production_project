import React from 'react'
import { classNames } from 'shared/lib'

import style from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [style[theme]]: true,
    [style.square]: square,
    [style[size]]: true,
    [style.disabled]: disabled,
  }

  return (
    <button className={classNames(style.Button, mods, [className])} disabled={disabled} {...otherProps}>
      {children}
    </button>
  )
}
