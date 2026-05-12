import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { IconButton } from './IconButton'
// @ts-ignore
import instructions from './IconButton.instructions.md?raw'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    edge: { control: 'select', options: [false, 'start', 'end'] },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

// ─── Playground (controls-driven) ────────────────────────────────────────────

export const Playground: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    'aria-label': 'Edit',
  },
  render: (args) => (
    <IconButton {...args}>
      <EditIcon />
    </IconButton>
  ),
}

// ─── BE Usage patterns ───────────────────────────────────────────────────────

export const DefaultAction: Story = {
  name: 'BE: Default action (primary)',
  render: () => (
    <Tooltip title="Edit">
      <IconButton aria-label="Edit keyword">
        <EditIcon />
      </IconButton>
    </Tooltip>
  ),
}

export const DestructiveAction: Story = {
  name: 'BE: Destructive action (error)',
  render: () => (
    <Tooltip title="Delete">
      <IconButton color="error" aria-label="Delete keyword">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  ),
}

// ─── Colors ──────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      {(['default', 'primary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Tooltip key={color} title={color}>
          <IconButton color={color} aria-label={color}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  ),
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Tooltip title="Small">
        <IconButton size="small" aria-label="Small edit">
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Medium">
        <IconButton size="medium" aria-label="Medium edit">
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Large">
        <IconButton size="large" aria-label="Large edit">
          <EditIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Stack>
  ),
}

// ─── With Tooltip ─────────────────────────────────────────────────────────────

export const WithTooltip: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Search">
        <IconButton aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter">
        <IconButton aria-label="Filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add">
        <IconButton aria-label="Add item">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  ),
}

// ─── Loading ─────────────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => (
    <IconButton loading aria-label="Saving">
      <EditIcon />
    </IconButton>
  ),
}

// ─── States ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <IconButton disabled aria-label="Delete keyword">
      <DeleteIcon />
    </IconButton>
  ),
}

// ─── Edge alignment ──────────────────────────────────────────────────────────

export const EdgeAlignment: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', border: '1px dashed', borderColor: 'divider', p: 1 }}>
        <IconButton edge="start" aria-label="Menu" size="large">
          <FilterListIcon />
        </IconButton>
        <IconButton edge="end" aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Stack>
    </Stack>
  ),
}
