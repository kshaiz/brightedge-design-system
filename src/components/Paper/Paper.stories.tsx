import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from '@mui/material'
import { Typography } from '../Typography'
import { Paper } from './Paper'
// @ts-ignore
import instructions from './Paper.instructions.md?raw'

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
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
type Story = StoryObj<typeof Paper>

// ─── Elevation variants ───────────────────────────────────────────────────────

export const Elevation: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', p: 4, bgcolor: 'grey.100' }}>
      {([0, 1, 2, 4, 8, 16, 24] as const).map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ p: 3, minWidth: 100, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            elevation={elevation}
          </Typography>
        </Paper>
      ))}
    </Box>
  ),
}

// ─── Outlined ─────────────────────────────────────────────────────────────────

export const Outlined: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ p: 3, maxWidth: 320 }}>
      <Typography variant="body2" color="text.secondary">
        Outlined variant — uses a border instead of a shadow.
      </Typography>
    </Paper>
  ),
}

// ─── Square corners ───────────────────────────────────────────────────────────

export const Square: Story = {
  render: () => (
    <Paper square elevation={2} sx={{ p: 3, maxWidth: 320 }}>
      <Typography variant="body2" color="text.secondary">
        Square corners — no border radius.
      </Typography>
    </Paper>
  ),
}
