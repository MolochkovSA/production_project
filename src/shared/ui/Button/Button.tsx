import React from 'react'
import { classNames } from 'shared/lib'

import * as style from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: React.FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
  return (
    <button className={classNames(style.Button, {}, [className, style[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
