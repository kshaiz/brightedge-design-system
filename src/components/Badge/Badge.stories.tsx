import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Avatar } from '../Avatar'
import { IconButton } from '../IconButton'
import { Badge } from './Badge'
// @ts-ignore
import instructions from './Badge.instructions.md?raw'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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
type Story = StoryObj<typeof Badge>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(
        (color) => (
          <Badge key={color} badgeContent={4} color={color}>
            <MailIcon />
          </Badge>
        ),
      )}
    </Stack>
  ),
}

// ─── Dot variant ──────────────────────────────────────────────────────────────

export const Dot: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      {(['primary', 'error', 'success', 'warning'] as const).map((color) => (
        <Badge key={color} variant="dot" color={color}>
          <NotificationsIcon />
        </Badge>
      ))}
    </Stack>
  ),
}

// ─── Overlap ──────────────────────────────────────────────────────────────────

export const Overlap: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={3} color="primary" overlap="rectangular">
        <MailIcon />
      </Badge>
      <Badge badgeContent={3} color="error" overlap="circular">
        <Avatar sx={{ bgcolor: 'primary.main' }}>J</Avatar>
      </Badge>
    </Stack>
  ),
}

// ─── Max value ────────────────────────────────────────────────────────────────

export const Max: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={99} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} max={999} color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  ),
}

// ─── Show zero ────────────────────────────────────────────────────────────────

export const ShowZero: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge badgeContent={0} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon />
      </Badge>
    </Stack>
  ),
}

// ─── On IconButton ────────────────────────────────────────────────────────────

export const OnIconButton: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="4 new notifications">
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="online">
        <Badge variant="dot" color="success" overlap="circular">
          <Avatar size={24} sx={{ bgcolor: 'primary.main' }}>J</Avatar>
        </Badge>
      </IconButton>
    </Stack>
  ),
}
