import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paper } from '../Paper'
import { Stack } from '../Stack'
import { Typography } from '../Typography'
import { Container } from './Container'
// @ts-ignore
import instructions from './Container.instructions.md?raw'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
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
type Story = StoryObj<typeof Container>

// ─── Default (lg) ─────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Container maxWidth="lg">
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary">
          maxWidth="lg" — 1200px max. This is the default for most pages.
        </Typography>
      </Paper>
    </Container>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Container key={size} maxWidth={size}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              maxWidth="{size}"
            </Typography>
          </Paper>
        </Container>
      ))}
    </Stack>
  ),
}

// ─── Disable gutters ──────────────────────────────────────────────────────────

export const NoGutters: Story = {
  name: 'Disable gutters',
  render: () => (
    <Container maxWidth="md" disableGutters>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          disableGutters — no horizontal padding. Use for full-bleed content like tables or images.
        </Typography>
      </Paper>
    </Container>
  ),
}

// ─── Typical page layout ──────────────────────────────────────────────────────

export const PageLayout: Story = {
  name: 'Typical page layout',
  render: () => (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5">Page Title</Typography>
        </Stack>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="body2" color="text.secondary">Section A</Typography>
        </Paper>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="body2" color="text.secondary">Section B</Typography>
        </Paper>
      </Stack>
    </Container>
  ),
}
