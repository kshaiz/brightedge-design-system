import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Stack } from '@mui/material'
import { Button } from '../Button'
import { Alert, AlertTitle, PageAlert } from './Alert'
// @ts-ignore
import instructions from './Alert.instructions.md?raw'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
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
type Story = StoryObj<typeof Alert>

// ─── Severity ─────────────────────────────────────────────────────────────────

export const Severity: Story = {
  render: () => (
    <Stack spacing={1} sx={{ maxWidth: 480 }}>
      <Alert severity="error">This is an error alert.</Alert>
      <Alert severity="warning">This is a warning alert.</Alert>
      <Alert severity="info">This is an info alert.</Alert>
      <Alert severity="success">This is a success alert.</Alert>
    </Stack>
  ),
}

// ─── With title ───────────────────────────────────────────────────────────────

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={1} sx={{ maxWidth: 480 }}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to save changes. Please try again.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Approaching limit</AlertTitle>
        You have 12 keywords remaining in your plan.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Scheduled maintenance</AlertTitle>
        The system will be unavailable Saturday 2–4am UTC.
      </Alert>
      <Alert severity="success">
        <AlertTitle>Published</AlertTitle>
        Your report is now visible to workspace members.
      </Alert>
    </Stack>
  ),
}

// ─── Closeable ────────────────────────────────────────────────────────────────

export const Closeable: Story = {
  render: () => {
    const [show, setShow] = useState(true)
    return show ? (
      <Alert severity="info" onClose={() => setShow(false)} sx={{ maxWidth: 480 }}>
        This alert can be dismissed.
      </Alert>
    ) : (
      <Button onClick={() => setShow(true)}>Show alert</Button>
    )
  },
}

// ─── With action ──────────────────────────────────────────────────────────────

export const WithAction: Story = {
  render: () => (
    <Alert
      severity="info"
      action={<Button size="small" color="inherit">Upgrade</Button>}
      sx={{ maxWidth: 480 }}
    >
      Upgrade your plan to track unlimited keywords.
    </Alert>
  ),
}

// ─── PageAlert (top-right toast) ──────────────────────────────────────────────

export const PageAlertStory: Story = {
  name: 'PageAlert — top-right toast',
  render: () => {
    const [severity, setSeverity] = useState<'error' | 'warning' | 'info' | 'success' | null>(null)
    return (
      <>
        <Stack direction="row" spacing={1}>
          {(['success', 'info', 'warning', 'error'] as const).map((s) => (
            <Button key={s} variant="outlined" onClick={() => setSeverity(s)}>
              {s}
            </Button>
          ))}
        </Stack>
        {severity && (
          <PageAlert
            open
            onClose={() => setSeverity(null)}
            severity={severity}
            title={severity.charAt(0).toUpperCase() + severity.slice(1)}
            message={`This is a ${severity} page alert appearing 32px from the top-right edge.`}
          />
        )}
      </>
    )
  },
}

// ─── PageAlert — all severities ───────────────────────────────────────────────

export const PageAlertSeverities: Story = {
  name: 'PageAlert — with title',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show page alert with title</Button>
        <PageAlert
          open={open}
          onClose={() => setOpen(false)}
          severity="success"
          title="Report published"
          message="Your report is now visible to all workspace members."
        />
      </>
    )
  },
}
