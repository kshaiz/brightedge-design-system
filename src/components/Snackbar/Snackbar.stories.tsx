import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Stack } from '@mui/material'
import { Alert, AlertTitle } from '../Alert'
import { Button } from '../Button'
import { Snackbar } from './Snackbar'
// @ts-ignore
import instructions from './Snackbar.instructions.md?raw'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
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
type Story = StoryObj<typeof Snackbar>

// ─── Severity ─────────────────────────────────────────────────────────────────

export const Severity: Story = {
  render: () => {
    const [open, setOpen] = useState<'success' | 'error' | 'warning' | 'info' | null>(null)

    const handleClose = (_: unknown, reason?: string) => {
      if (reason === 'clickaway') return
      setOpen(null)
    }

    return (
      <>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {(['success', 'info', 'warning', 'error'] as const).map((s) => (
            <Button key={s} variant="outlined" onClick={() => setOpen(s)}>
              {s}
            </Button>
          ))}
        </Stack>
        <Snackbar open={!!open} onClose={handleClose}>
          <Alert severity={open ?? 'info'} onClose={() => setOpen(null)}>
            This is a {open} message.
          </Alert>
        </Snackbar>
      </>
    )
  },
}

// ─── With title ───────────────────────────────────────────────────────────────

export const WithTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const handleClose = (_: unknown, reason?: string) => {
      if (reason === 'clickaway') return
      setOpen(false)
    }
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show with title</Button>
        <Snackbar open={open} onClose={handleClose}>
          <Alert severity="error" onClose={() => setOpen(false)}>
            <AlertTitle>Connection failed</AlertTitle>
            Could not reach the server. Check your connection and try again.
          </Alert>
        </Snackbar>
      </>
    )
  },
}

// ─── Persistent (no auto-hide) ────────────────────────────────────────────────

export const Persistent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show persistent error</Button>
        <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={null}>
          <Alert severity="error" onClose={() => setOpen(false)}>
            <AlertTitle>Payment failed</AlertTitle>
            Your card was declined. Please update your payment method.
          </Alert>
        </Snackbar>
      </>
    )
  },
}

// ─── Short duration ───────────────────────────────────────────────────────────

export const ShortDuration: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const handleClose = (_: unknown, reason?: string) => {
      if (reason === 'clickaway') return
      setOpen(false)
    }
    return (
      <>
        <Button onClick={() => setOpen(true)}>Copy link</Button>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
          <Alert severity="success" onClose={() => setOpen(false)}>
            Link copied to clipboard.
          </Alert>
        </Snackbar>
      </>
    )
  },
}
