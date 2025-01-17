import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'padded',
  },
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const LightAuth: Story = { decorators: [StoreDecorator({ user: { authData: {} } })] }

export const DarkAuth: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
}
