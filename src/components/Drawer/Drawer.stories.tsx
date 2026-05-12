import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Divider } from '@mui/material'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { FormLabel } from '../FormLabel'
import { TextField } from '../TextField'
import { Drawer } from './Drawer'
// @ts-ignore
import instructions from './Drawer.instructions.md?raw'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
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
type Story = StoryObj<typeof Drawer>

// ─── Detail panel ─────────────────────────────────────────────────────────────

export const DetailPanel: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open detail panel
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 480 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6">Keyword details</Typography>
              <IconButton onClick={() => setOpen(false)} aria-label="Close drawer">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ p: 3 }}>
              <Typography variant="overline" color="text.secondary" display="block">
                Keyword
              </Typography>
              <Typography variant="body1" gutterBottom>best seo tools 2024</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="overline" color="text.secondary" display="block">
                Monthly volume
              </Typography>
              <Typography variant="body1" gutterBottom>14,800</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="overline" color="text.secondary" display="block">
                Difficulty
              </Typography>
              <Typography variant="body1">72 / Hard</Typography>
            </Box>
          </Box>
        </Drawer>
      </>
    )
  },
}

// ─── Form panel ───────────────────────────────────────────────────────────────

export const FormPanel: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add keyword set
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 480 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6">New keyword set</Typography>
              <IconButton onClick={() => setOpen(false)} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <FormLabel>Set name</FormLabel>
                <TextField placeholder="e.g. Brand keywords" fullWidth />
              </Box>
              <Box>
                <FormLabel>Keywords</FormLabel>
                <TextField
                  multiline
                  minRows={4}
                  placeholder="One keyword per line"
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'flex-end',
                p: 2,
                borderTop: 1,
                borderColor: 'divider',
              }}
            >
              <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Save</Button>
            </Box>
          </Box>
        </Drawer>
      </>
    )
  },
}
