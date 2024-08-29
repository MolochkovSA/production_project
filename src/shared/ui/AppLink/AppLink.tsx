import React, { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib'

import * as style from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

export interface AppLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => {
  return (
    <Link className={classNames(style.link, {}, [className, style[theme]])} {...props}>
      {children}
    </Link>
  )
}
