import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DeleteIcon from '@mui/icons-material/Delete'
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
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ─── BE Usage patterns ───────────────────────────────────────────────────────

export const PrimaryAction: Story = {
  name: 'BE: Primary action (contained primary)',
  args: { variant: 'contained', color: 'primary', children: 'Save', disableElevation: true },
}

export const SecondaryAction: Story = {
  name: 'BE: Secondary action (contained secondary)',
  args: { variant: 'contained', color: 'secondary', children: 'Export', disableElevation: true },
}

export const DefaultAction: Story = {
  name: 'BE: Default action (outlined primary)',
  args: { variant: 'outlined', color: 'primary', children: 'Edit' },
}

export const LowEmphasisAction: Story = {
  name: 'BE: Low emphasis (text)',
  args: { variant: 'text', color: 'primary', children: 'Cancel' },
}

export const DestructiveAction: Story = {
  name: 'BE: Destructive action (contained error)',
  args: { variant: 'contained', color: 'error', children: 'Delete', disableElevation: true },
}

// ─── Variants ────────────────────────────────────────────────────────────────

export const Contained: Story = {
  args: { variant: 'contained', children: 'Button', disableElevation: true },
}

export const Outlined: Story = {
  args: { variant: 'outlined', children: 'Button' },
}

export const Text: Story = {
  args: { variant: 'text', children: 'Button' },
}

// ─── Colors ──────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Button key={color} variant="contained" color={color} disableElevation>
          {color}
        </Button>
      ))}
    </Stack>
  ),
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Button variant="contained" size="small" disableElevation>Small</Button>
      <Button variant="contained" size="medium" disableElevation>Medium</Button>
      <Button variant="contained" size="large" disableElevation>Large</Button>
    </Stack>
  ),
}

// ─── Icons ───────────────────────────────────────────────────────────────────

export const WithStartIcon: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<AddIcon />} disableElevation>Add keyword</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Delete</Button>
    </Stack>
  ),
}

export const WithEndIcon: Story = {
  render: () => (
    <Button variant="contained" endIcon={<ArrowForwardIcon />} disableElevation>
      Next
    </Button>
  ),
}

// ─── Loading ─────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: { variant: 'contained', loading: true, children: 'Save', disableElevation: true },
}

export const LoadingWithPosition: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" loading loadingPosition="start" startIcon={<AddIcon />} disableElevation>
        Saving
      </Button>
      <Button variant="outlined" loading loadingPosition="end" endIcon={<ArrowForwardIcon />}>
        Loading
      </Button>
    </Stack>
  ),
}

// ─── States ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" disabled disableElevation>Contained</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Button variant="text" disabled>Text</Button>
    </Stack>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Stack spacing={2}>
      <Button variant="contained" fullWidth disableElevation>Full width contained</Button>
      <Button variant="outlined" fullWidth>Full width outlined</Button>
    </Stack>
  ),
}
