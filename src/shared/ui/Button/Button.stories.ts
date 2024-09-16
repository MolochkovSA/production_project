import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    theme: ButtonTheme,
  },

  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
}

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
}

export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
}

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
}

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgrpundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgrpundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const SquareSizeM: Story = {
  args: {
    square: true,
    children: '>',
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const SquareSizeL: Story = {
  args: {
    square: true,
    children: '>',
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}

export const SquareSizeXL: Story = {
  args: {
    square: true,
    children: '>',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
}
