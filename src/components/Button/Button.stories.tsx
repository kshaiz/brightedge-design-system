import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
// @ts-ignore
import instructions from './Button.instructions.md?raw'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Contained: Story = {
  args: { variant: 'contained', children: 'Button' },
}

export const Outlined: Story = {
  args: { variant: 'outlined', children: 'Button' },
}

export const Text: Story = {
  args: { variant: 'text', children: 'Button' },
}

export const Small: Story = {
  args: { variant: 'contained', size: 'small', children: 'Small' },
}

export const Large: Story = {
  args: { variant: 'contained', size: 'large', children: 'Large' },
}

export const Disabled: Story = {
  args: { variant: 'contained', disabled: true, children: 'Disabled' },
}
