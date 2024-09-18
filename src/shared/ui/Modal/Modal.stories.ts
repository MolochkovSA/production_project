import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  args: { children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem' },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    isOpen: true,
  },
}

export const Dark: Story = {
  args: {
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
