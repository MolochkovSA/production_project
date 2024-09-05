import React from 'react'
import { classNames } from 'shared/lib'

import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
