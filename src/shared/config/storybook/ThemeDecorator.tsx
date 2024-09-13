import React from 'react'
import { StoryFn } from '@storybook/react/*'
import { Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'

export const ThemeDecorator = (theme: Theme) =>
  function StyleDecorator(Story: StoryFn) {
    return (
      <div className={classNames('app', {}, [theme])}>
        <Story />
      </div>
    )
  }
