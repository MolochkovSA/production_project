import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  args: { value: 'abcd', placeholder: 'placeholder' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
