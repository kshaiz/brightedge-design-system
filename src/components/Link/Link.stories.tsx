import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from '@mui/material'
import { Typography } from '../Typography'
import { Link } from './Link'
// @ts-ignore
import instructions from './Link.instructions.md?raw'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
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
type Story = StoryObj<typeof Link>

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Link href="#">View reports</Link>
  ),
}

// ─── External link ────────────────────────────────────────────────────────────

export const External: Story = {
  name: 'External link (opens new tab)',
  render: () => (
    <Link href="https://mui.com" external>
      MUI documentation
    </Link>
  ),
}

// ─── Color variants ───────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Link href="#">Primary color (default)</Link>
      <Typography color="text.secondary">
        Surrounding text with an{' '}
        <Link href="#" color="inherit">inherit color link</Link>
        {' '}inside it.
      </Typography>
    </Box>
  ),
}

// ─── Underline variants ───────────────────────────────────────────────────────

export const Underline: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Link href="#" underline="always">Always underlined (default)</Link>
      <Link href="#" underline="hover">Underline on hover only</Link>
      <Link href="#" underline="none">No underline</Link>
    </Box>
  ),
}

// ─── In body text ─────────────────────────────────────────────────────────────

export const InBodyText: Story = {
  render: () => (
    <Typography>
      Discover the top-ranking pages for your keywords. Read the{' '}
      <Link href="#">keyword analysis guide</Link>{' '}
      or check the{' '}
      <Link href="https://brightedge.com" external>BrightEdge platform</Link>{' '}
      for more details.
    </Typography>
  ),
}
