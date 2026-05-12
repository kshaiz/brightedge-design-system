import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Button } from '../Button'
import { CircularProgress, LinearProgress } from './Progress'
// @ts-ignore
import instructions from './Progress.instructions.md?raw'

const meta: Meta = {
  title: 'Components/Progress',
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
type Story = StoryObj

// ─── Linear — indeterminate ───────────────────────────────────────────────────

export const LinearIndeterminate: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 320 }}>
      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="inherit" />
    </Stack>
  ),
}

// ─── Linear — determinate with label ─────────────────────────────────────────

export const LinearDeterminate: Story = {
  render: () => {
    const [value, setValue] = useState(30)
    const ref = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
      ref.current = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 10))
      }, 800)
      return () => { if (ref.current) clearInterval(ref.current) }
    }, [])

    return (
      <Stack spacing={2} sx={{ width: 320 }}>
        <LinearProgress variant="determinate" value={value} showLabel />
        <LinearProgress variant="determinate" value={65} showLabel color="secondary" />
        <LinearProgress variant="determinate" value={100} showLabel color="success" />
      </Stack>
    )
  },
}

// ─── Linear — buffer ──────────────────────────────────────────────────────────

export const LinearBuffer: Story = {
  render: () => (
    <Box sx={{ width: 320 }}>
      <LinearProgress variant="buffer" value={60} valueBuffer={80} />
    </Box>
  ),
}

// ─── Linear — fixed top loading bar ──────────────────────────────────────────

export const LinearPageLevel: Story = {
  name: 'Linear — page-level (fixed top)',
  render: () => {
    const [loading, setLoading] = useState(false)
    return (
      <Box>
        {loading && (
          <LinearProgress
            sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1400 }}
            aria-label="Loading page data"
          />
        )}
        <Stack direction="row" spacing={1}>
          <Button onClick={() => setLoading(true)} disabled={loading}>Start loading</Button>
          <Button variant="outlined" onClick={() => setLoading(false)}>Stop</Button>
        </Stack>
      </Box>
    )
  },
}

// ─── Circular — indeterminate ─────────────────────────────────────────────────

export const CircularIndeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress aria-label="Loading" />
      <CircularProgress color="secondary" aria-label="Loading" />
      <CircularProgress size={24} aria-label="Loading" />
      <CircularProgress size={16} aria-label="Loading" />
    </Stack>
  ),
}

// ─── Circular — determinate with label ───────────────────────────────────────

export const CircularDeterminate: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <CircularProgress variant="determinate" value={25} showLabel aria-label="25%" />
      <CircularProgress variant="determinate" value={50} showLabel aria-label="50%" />
      <CircularProgress variant="determinate" value={75} showLabel aria-label="75%" color="secondary" />
      <CircularProgress variant="determinate" value={100} showLabel aria-label="100%" color="success" />
    </Stack>
  ),
}

// ─── Loading button ───────────────────────────────────────────────────────────

export const LoadingButton: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <Button
        variant="contained"
        disabled={loading}
        onClick={handleClick}
        startIcon={loading ? <CircularProgress size={16} color="inherit" aria-label="Saving" /> : undefined}
      >
        {loading ? 'Saving…' : 'Save report'}
      </Button>
    )
  },
}
