import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
