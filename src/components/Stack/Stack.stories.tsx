import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paper } from '../Paper'
import { Divider } from '../Divider'
import { Typography } from '../Typography'
import { Stack } from './Stack'
// @ts-ignore
import instructions from './Stack.instructions.md?raw'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
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
type Story = StoryObj<typeof Stack>

const Item = ({ label }: { label: string }) => (
  <Paper variant="outlined" sx={{ p: 2 }}>
    <Typography variant="body2" color="text.secondary">{label}</Typography>
  </Paper>
)

// ─── Column (default) ─────────────────────────────────────────────────────────

export const Column: Story = {
  render: () => (
    <Stack spacing={2}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
}

// ─── Row ──────────────────────────────────────────────────────────────────────

export const Row: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
}

// ─── Spacing scale ────────────────────────────────────────────────────────────

export const SpacingScale: Story = {
  name: 'Spacing scale',
  render: () => (
    <Stack spacing={4}>
      {([0.5, 1, 2, 4, 8] as const).map((s) => (
        <Stack key={s} direction="row" spacing={s} sx={{ alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ minWidth: 60 }}>
            spacing={s}
          </Typography>
          <Item label="A" />
          <Item label="B" />
        </Stack>
      ))}
    </Stack>
  ),
}

// ─── With divider ─────────────────────────────────────────────────────────────

export const WithDivider: Story = {
  name: 'With divider',
  render: () => (
    <Stack spacing={2} divider={<Divider />}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
}

// ─── Row alignment ────────────────────────────────────────────────────────────

export const RowAlignment: Story = {
  name: 'Row — space between (page header pattern)',
  render: () => (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h5">Page Title</Typography>
      <Stack direction="row" spacing={1}>
        <Item label="Action A" />
        <Item label="Action B" />
      </Stack>
    </Stack>
  ),
}

// ─── Responsive direction ─────────────────────────────────────────────────────

export const Responsive: Story = {
  name: 'Responsive direction',
  render: () => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Item label="Item 1" />
      <Item label="Item 2" />
      <Item label="Item 3" />
    </Stack>
  ),
}
