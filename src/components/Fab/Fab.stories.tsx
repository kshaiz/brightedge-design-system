import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import NavigationIcon from '@mui/icons-material/Navigation'
import { Fab } from './Fab'
// @ts-ignore
import instructions from './Fab.instructions.md?raw'

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['circular', 'extended'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Fab>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'circular',
    color: 'primary',
    size: 'large',
    disabled: false,
    'aria-label': 'Add',
    children: <AddIcon />,
  },
}

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit">
        <EditIcon />
      </Fab>
      <Fab disabled aria-label="Add (disabled)">
        <AddIcon />
      </Fab>
    </Stack>
  ),
}

// ─── Extended ─────────────────────────────────────────────────────────────────

export const Extended: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" color="secondary">
        <EditIcon sx={{ mr: 1 }} />
        Edit
      </Fab>
    </Stack>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab size="small" color="primary" aria-label="Add small">
        <AddIcon fontSize="small" />
      </Fab>
      <Fab size="medium" color="primary" aria-label="Add medium">
        <AddIcon />
      </Fab>
      <Fab size="large" color="primary" aria-label="Add large">
        <AddIcon />
      </Fab>
    </Stack>
  ),
}

export const ExtendedSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab variant="extended" size="small" color="primary">
        <AddIcon fontSize="small" sx={{ mr: 0.5 }} />
        Small
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Medium
      </Fab>
      <Fab variant="extended" size="large" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Large
      </Fab>
    </Stack>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Fab disabled aria-label="Add (disabled)">
        <AddIcon />
      </Fab>
      <Fab variant="extended" disabled>
        <AddIcon sx={{ mr: 1 }} />
        Disabled
      </Fab>
    </Stack>
  ),
}
