import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import PersonIcon from '@mui/icons-material/Person'
import { Avatar, AvatarGroup } from './Avatar'
// @ts-ignore
import instructions from './Avatar.instructions.md?raw'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
type Story = StoryObj<typeof Avatar>

// ─── Image ────────────────────────────────────────────────────────────────────

export const Image: Story = {
  render: () => (
    <Avatar
      src="https://mui.com/static/images/avatar/1.jpg"
      alt="Jane Smith"
    />
  ),
}

// ─── Initials ─────────────────────────────────────────────────────────────────

export const Initials: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>JS</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>AB</Avatar>
      <Avatar sx={{ bgcolor: 'error.main' }}>CD</Avatar>
    </Stack>
  ),
}

// ─── Icon ─────────────────────────────────────────────────────────────────────

export const Icon: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        <PersonIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>
        <FolderIcon />
      </Avatar>
    </Stack>
  ),
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar variant="circular" sx={{ bgcolor: 'primary.main' }}>C</Avatar>
      <Avatar variant="rounded" sx={{ bgcolor: 'secondary.main' }}>R</Avatar>
      <Avatar variant="square" sx={{ bgcolor: 'error.main' }}>S</Avatar>
    </Stack>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {([40, 32, 24, 18] as const).map((size) => (
        <Avatar key={size} size={size} sx={{ bgcolor: 'primary.main' }}>
          {String(size)}
        </Avatar>
      ))}
    </Stack>
  ),
}

// ─── AvatarGroup ─────────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Alice" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" alt="Bob" />
      <Avatar src="https://mui.com/static/images/avatar/3.jpg" alt="Carol" />
      <Avatar src="https://mui.com/static/images/avatar/4.jpg" alt="Dave" />
      <Avatar src="https://mui.com/static/images/avatar/5.jpg" alt="Eve" />
    </AvatarGroup>
  ),
}

// ─── AvatarGroup — sizes ──────────────────────────────────────────────────────

export const GroupSizes: Story = {
  name: 'AvatarGroup — sizes',
  render: () => (
    <Stack spacing={2}>
      {([40, 32, 24] as const).map((size) => (
        <AvatarGroup key={size} max={4} size={size}>
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Alice" />
          <Avatar src="https://mui.com/static/images/avatar/2.jpg" alt="Bob" />
          <Avatar src="https://mui.com/static/images/avatar/3.jpg" alt="Carol" />
          <Avatar src="https://mui.com/static/images/avatar/4.jpg" alt="Dave" />
          <Avatar src="https://mui.com/static/images/avatar/5.jpg" alt="Eve" />
        </AvatarGroup>
      ))}
    </Stack>
  ),
}

// ─── AvatarGroup — spacing ────────────────────────────────────────────────────

export const GroupSpacing: Story = {
  name: 'AvatarGroup — spacing',
  render: () => (
    <Stack spacing={2}>
      <AvatarGroup max={5} spacing="medium">
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Alice" />
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" alt="Bob" />
        <Avatar src="https://mui.com/static/images/avatar/3.jpg" alt="Carol" />
        <Avatar src="https://mui.com/static/images/avatar/4.jpg" alt="Dave" />
      </AvatarGroup>
      <AvatarGroup max={5} spacing="small">
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="Alice" />
        <Avatar src="https://mui.com/static/images/avatar/2.jpg" alt="Bob" />
        <Avatar src="https://mui.com/static/images/avatar/3.jpg" alt="Carol" />
        <Avatar src="https://mui.com/static/images/avatar/4.jpg" alt="Dave" />
      </AvatarGroup>
    </Stack>
  ),
}
