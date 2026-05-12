import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import DoneIcon from '@mui/icons-material/Done'
import { Avatar } from '../Avatar'
import { Chip } from './Chip'
// @ts-ignore
import instructions from './Chip.instructions.md?raw'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    size: 'medium',
  },
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(
          (color) => (
            <Chip key={color} label={color} color={color} />
          ),
        )}
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(
          (color) => (
            <Chip key={color} label={color} color={color} variant="outlined" />
          ),
        )}
      </Stack>
    </Stack>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label="Medium" size="medium" />
      <Chip label="Small" size="small" />
    </Stack>
  ),
}

// ─── With icon ────────────────────────────────────────────────────────────────

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<DoneIcon />} label="Done" color="success" />
    </Stack>
  ),
}

// ─── With avatar ──────────────────────────────────────────────────────────────

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Michael" />
      <Chip
        avatar={<Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Jane" />}
        label="Jane"
      />
    </Stack>
  ),
}

// ─── Clickable ────────────────────────────────────────────────────────────────

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={() => {}} />
      <Chip label="Clickable outlined" variant="outlined" onClick={() => {}} />
    </Stack>
  ),
}

// ─── Deletable ────────────────────────────────────────────────────────────────

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Outlined" variant="outlined" onDelete={() => {}} />
    </Stack>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Filled disabled" disabled />
      <Chip label="Outlined disabled" variant="outlined" disabled />
    </Stack>
  ),
}
