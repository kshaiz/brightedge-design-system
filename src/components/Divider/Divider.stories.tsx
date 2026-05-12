import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Stack, Typography } from '@mui/material'
import { Chip } from '../Chip'
import { Divider } from './Divider'
// @ts-ignore
import instructions from './Divider.instructions.md?raw'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
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
type Story = StoryObj<typeof Divider>

// ─── Horizontal ───────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2">Above the divider</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2">Below the divider</Typography>
    </Box>
  ),
}

// ─── Vertical ─────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ height: 40 }}>
      <Typography variant="body2">Left</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="body2">Center</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="body2">Right</Typography>
    </Stack>
  ),
}

// ─── With text ────────────────────────────────────────────────────────────────

export const WithText: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Divider>Center</Divider>
      <Box sx={{ my: 2 }} />
      <Divider textAlign="left">Left aligned</Divider>
      <Box sx={{ my: 2 }} />
      <Divider textAlign="right">Right aligned</Divider>
    </Box>
  ),
}

// ─── With Chip ────────────────────────────────────────────────────────────────

export const WithChip: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Divider>
        <Chip label="OR" size="small" />
      </Divider>
    </Box>
  ),
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="caption" color="text.secondary">fullWidth (default)</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="caption" color="text.secondary">middle</Typography>
      <Divider variant="middle" sx={{ my: 1 }} />
      <Typography variant="caption" color="text.secondary">inset</Typography>
      <Divider variant="inset" sx={{ my: 1 }} />
    </Box>
  ),
}
