import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from '../Typography'
import { Stack } from '../Stack'
import { Box } from './Box'
// @ts-ignore
import instructions from './Box.instructions.md?raw'

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
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
type Story = StoryObj<typeof Box>

// ─── Last-resort wrapper ──────────────────────────────────────────────────────

export const AsStyledWrapper: Story = {
  name: 'As styled wrapper (last resort)',
  render: () => (
    <Box sx={{ position: 'relative', p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Box is used here because no semantic component fits — it provides a relative-positioned clipping boundary.
      </Typography>
    </Box>
  ),
}

// ─── Prefer Stack for spacing ─────────────────────────────────────────────────

export const PreferStack: Story = {
  name: 'Prefer Stack for spacing children',
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ bgcolor: 'primary.main', height: 40, borderRadius: 1 }} />
      <Box sx={{ bgcolor: 'secondary.main', height: 40, borderRadius: 1 }} />
      <Box sx={{ bgcolor: 'error.main', height: 40, borderRadius: 1 }} />
    </Stack>
  ),
}
