import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { Button } from '../Button'
import { FormLabel } from '../FormLabel'
import { TextField } from '../TextField'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from './Dialog'
// @ts-ignore
import instructions from './Dialog.instructions.md?raw'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
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
type Story = StoryObj<typeof Dialog>

// ─── Confirmation ─────────────────────────────────────────────────────────────

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Delete report</Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <DialogTitle id="confirm-title">Delete report?</DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-desc">
              This will permanently delete the report and cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions cancelAction={<Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>}>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

// ─── Alert dialog ─────────────────────────────────────────────────────────────

export const AlertDialog: Story = {
  name: 'Alert dialog — urgent interruption',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Navigate away</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          role="alertdialog"
          aria-labelledby="alert-title"
          aria-describedby="alert-desc"
        >
          <DialogTitle id="alert-title">Unsaved changes</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-desc">
              You have unsaved changes. Do you want to leave without saving?
            </DialogContentText>
          </DialogContent>
          <DialogActions cancelAction={<Button variant="text" onClick={() => setOpen(false)}>Stay</Button>}>
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
              Leave without saving
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

// ─── Form dialog ──────────────────────────────────────────────────────────────

export const FormDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Add domain</Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-title">
          <DialogTitle id="form-title">Add domain</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              Enter the domain URL you want to track in BrightEdge.
            </DialogContentText>
            <FormLabel>Domain URL</FormLabel>
            <TextField placeholder="https://example.com" autoFocus />
          </DialogContent>
          <DialogActions cancelAction={<Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>}>
            <Button variant="contained" onClick={() => setOpen(false)}>Add</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

// ─── Scrollable content ───────────────────────────────────────────────────────

export const Scrollable: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>View terms</Button>
        <Dialog open={open} onClose={() => setOpen(false)} scroll="paper" aria-labelledby="scroll-title">
          <DialogTitle id="scroll-title">Terms of Service</DialogTitle>
          <DialogContent dividers>
            {Array.from({ length: 12 }).map((_, i) => (
              <DialogContentText key={i} gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </DialogContentText>
            ))}
          </DialogContent>
          <DialogActions cancelAction={<Button variant="text" onClick={() => setOpen(false)}>Decline</Button>}>
            <Button variant="contained" onClick={() => setOpen(false)}>Accept</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<false | 'xs' | 'sm' | 'md' | 'lg'>(false)
    return (
      <>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
            <Button key={s} variant="outlined" onClick={() => setSize(s)}>{s}</Button>
          ))}
        </div>
        <Dialog open={!!size} onClose={() => setSize(false)} maxWidth={size || 'sm'}>
          <DialogTitle>maxWidth="{size}"</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog uses maxWidth="{size}". The content area expands to fill the available
              width.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setSize(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}

// ─── Responsive full-screen ───────────────────────────────────────────────────

export const Responsive: Story = {
  name: 'Responsive — full-screen on mobile',
  render: () => {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen={fullScreen} aria-labelledby="resp-title">
          <DialogTitle id="resp-title">Responsive dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog goes full-screen on viewports narrower than "sm" (600px). Resize the
              browser to see the behaviour.
            </DialogContentText>
          </DialogContent>
          <DialogActions cancelAction={<Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>}>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  },
}
