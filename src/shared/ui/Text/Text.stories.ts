import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: { text: 'Hello world!', title: 'Title' },
}

export const OnlyTitleLight: Story = {
  args: { title: 'Title' },
}

export const OnlyTextLight: Story = {
  args: { text: 'Hello world!' },
}

export const Dark: Story = {
  args: { text: 'Hello world!', title: 'Title' },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTitleDark: Story = {
  args: { title: 'Title' },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTextDark: Story = {
  args: { text: 'Hello world!' },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
  args: { text: 'Hello world!', title: 'Title', theme: TextTheme.ERROR },
}
