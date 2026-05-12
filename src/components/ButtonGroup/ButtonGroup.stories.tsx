import type { Meta, StoryObj } from '@storybook/react-vite'
import AddIcon from '@mui/icons-material/Add'
import { ButtonGroup } from './ButtonGroup'
// @ts-ignore
import instructions from './ButtonGroup.instructions.md?raw'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

const noop = () => {}

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    buttons: [
      { label: 'One', onClick: noop },
      { label: 'Two', onClick: noop },
      { label: 'Three', onClick: noop },
    ],
  },
}

// ─── BE Usage patterns ───────────────────────────────────────────────────────

export const ContainedPrimary: Story = {
  name: 'BE: Contained primary',
  args: {
    variant: 'contained',
    color: 'primary',
    buttons: [
      { label: 'Save', onClick: noop },
      { label: 'Export', onClick: noop },
      { label: 'Preview', onClick: noop },
    ],
  },
}

export const OutlinedPrimary: Story = {
  name: 'BE: Outlined primary (default)',
  args: {
    variant: 'outlined',
    color: 'primary',
    buttons: [
      { label: 'Edit', onClick: noop },
      { label: 'Duplicate', onClick: noop },
      { label: 'Archive', onClick: noop },
    ],
  },
}

// ─── Overflow ─────────────────────────────────────────────────────────────────

export const WithOverflow: Story = {
  name: 'Overflow (5+ buttons → More menu)',
  args: {
    variant: 'outlined',
    color: 'primary',
    buttons: [
      { label: 'Edit', onClick: noop },
      { label: 'Duplicate', onClick: noop },
      { label: 'Archive', onClick: noop },
      { label: 'Export', onClick: noop },
      { label: 'Delete', onClick: noop },
    ],
  },
}

// ─── Orientation ──────────────────────────────────────────────────────────────

export const Vertical: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    orientation: 'vertical',
    buttons: [
      { label: 'Top', onClick: noop },
      { label: 'Middle', onClick: noop },
      { label: 'Bottom', onClick: noop },
    ],
  },
}

// ─── With Icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    buttons: [
      { label: 'Add keyword', onClick: noop, startIcon: <AddIcon /> },
      { label: 'Add topic', onClick: noop, startIcon: <AddIcon /> },
    ],
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const WithDisabledItem: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    buttons: [
      { label: 'Edit', onClick: noop },
      { label: 'Duplicate', onClick: noop, disabled: true },
      { label: 'Archive', onClick: noop },
    ],
  },
}

export const AllDisabled: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    disabled: true,
    buttons: [
      { label: 'Edit', onClick: noop },
      { label: 'Duplicate', onClick: noop },
      { label: 'Archive', onClick: noop },
    ],
  },
}

// ─── Size ─────────────────────────────────────────────────────────────────────

export const Small: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'small',
    buttons: [
      { label: 'Edit', onClick: noop },
      { label: 'Duplicate', onClick: noop },
      { label: 'Archive', onClick: noop },
    ],
  },
}
