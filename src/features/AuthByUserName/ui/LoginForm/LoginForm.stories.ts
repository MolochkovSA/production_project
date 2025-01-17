import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'padded',
  },
  decorators: [StoreDecorator({ loginForm: { userName: 'admin', password: '123' } })],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
  decorators: [StoreDecorator({ loginForm: { userName: 'admin', password: '123', error: 'ERROR' } })],
}

export const Loading: Story = {
  decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
}
