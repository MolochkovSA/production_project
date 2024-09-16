import React from 'react'
import { classNames } from 'shared/lib'

import style from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
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
  ...otherProps
}) => {
  const mods: Record<string, boolean> = { [style[theme]]: true, [style.square]: square, [style[size]]: true }

  return (
    <button className={classNames(style.Button, mods, [className])} {...otherProps}>
      {children}
    </button>
  )
}
