import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Box } from '@mui/material'
import { Button } from '../Button'
import { Typography } from '../Typography'
import { FormLabel } from '../FormLabel'
import { TextField } from '../TextField'
import { Popover } from './Popover'
// @ts-ignore
import instructions from './Popover.instructions.md?raw'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
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
type Story = StoryObj<typeof Popover>

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open popover
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Box sx={{ p: 2, maxWidth: 320 }}>
            <Typography variant="body2">
              The content of the Popover.
            </Typography>
          </Box>
        </Popover>
      </>
    )
  },
}

// ─── With form ────────────────────────────────────────────────────────────────

export const WithForm: Story = {
  name: 'With form (filter panel)',
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Filter
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 280 }}>
            <Typography variant="subtitle2">Filter options</Typography>
            <Box>
              <FormLabel>Keyword</FormLabel>
              <TextField placeholder="Search keywords" size="small" fullWidth />
            </Box>
            <Box>
              <FormLabel>Volume range</FormLabel>
              <TextField placeholder="Min volume" size="small" fullWidth />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button variant="text" size="small" onClick={() => setAnchorEl(null)}>Reset</Button>
              <Button variant="contained" size="small" onClick={() => setAnchorEl(null)}>Apply</Button>
            </Box>
          </Box>
        </Popover>
      </>
    )
  },
}

// ─── Anchor positions ─────────────────────────────────────────────────────────

export const AnchorTop: Story = {
  name: 'Anchor — opens above trigger',
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <Box sx={{ mt: 8 }}>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Open above
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="body2">Appears above the trigger.</Typography>
          </Box>
        </Popover>
      </Box>
    )
  },
}
