import React from 'react'
import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui/Loader/Loader'

import * as style from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(style.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
