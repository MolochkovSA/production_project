import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'widgets/Sidebar/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
