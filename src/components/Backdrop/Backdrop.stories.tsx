import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { Button } from '../Button'
import { Backdrop } from './Backdrop'
// @ts-ignore
import instructions from './Backdrop.instructions.md?raw'

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
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
type Story = StoryObj<typeof Backdrop>

// ─── With spinner ─────────────────────────────────────────────────────────────

export const WithSpinner: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Start loading</Button>
        <Backdrop open={open} onClick={() => setOpen(false)} showSpinner />
      </>
    )
  },
}

// ─── With message ─────────────────────────────────────────────────────────────

export const WithMessage: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Process report</Button>
        <Backdrop open={open} onClick={() => setOpen(false)}>
          <Stack alignItems="center" spacing={2}>
            <CircularProgress color="inherit" />
            <Typography color="white" variant="body2">
              Processing your report… Click to dismiss
            </Typography>
          </Stack>
        </Backdrop>
      </>
    )
  },
}
