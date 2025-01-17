import React from 'react'
import { classNames } from 'shared/lib'

import style from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: React.FC<TextProps> = ({ className, title, text, theme = TextTheme.PRIMARY }) => {
  return (
    <div className={classNames(style.Text, { [style[theme]]: true }, [className])}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  )
}
