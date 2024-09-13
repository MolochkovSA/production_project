import type { Meta, StoryObj } from '@storybook/react'

import { LangSwitcher } from './LangSwitcher'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'widgets/Sidebar/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
