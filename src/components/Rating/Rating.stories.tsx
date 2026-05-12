import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Stack, Typography } from '@mui/material'
import { Rating } from './Rating'
// @ts-ignore
import instructions from './Rating.instructions.md?raw'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    precision: { control: 'select', options: [0.5, 1] },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    name: 'playground',
    defaultValue: 2.5,
    size: 'medium',
    precision: 0.5,
    disabled: false,
    readOnly: false,
  },
}

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="uncontrolled" defaultValue={3} />
      <Rating name="half-star" defaultValue={2.5} />
      <Rating name="read-only" value={4} readOnly />
      <Rating name="disabled" defaultValue={3} disabled />
    </Stack>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(3.5)
    return (
      <Stack spacing={1}>
        <Rating
          name="controlled"
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        />
        <Typography variant="body2" color="text.secondary">
          Value: {value ?? 'null'}
        </Typography>
      </Stack>
    )
  },
}

// ─── Read-only ────────────────────────────────────────────────────────────────

export const ReadOnly: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="ro-1" value={1} readOnly />
      <Rating name="ro-2" value={2.5} readOnly />
      <Rating name="ro-3" value={3.5} readOnly />
      <Rating name="ro-4" value={5} readOnly />
    </Stack>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ width: 80 }}>Small</Typography>
        <Rating name="size-small" defaultValue={3.5} size="small" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ width: 80 }}>Medium</Typography>
        <Rating name="size-medium" defaultValue={3.5} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ width: 80 }}>Large</Typography>
        <Rating name="size-large" defaultValue={3.5} size="large" />
      </Box>
    </Stack>
  ),
}

// ─── Hover feedback ───────────────────────────────────────────────────────────

export const HoverFeedback: Story = {
  render: () => {
    const labels: Record<number, string> = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    }
    const [value, setValue] = useState<number | null>(3)
    const [hover, setHover] = useState(-1)
    const active = hover !== -1 ? hover : value
    return (
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Rating
          name="hover-feedback"
          value={value}
          getLabelText={(v) => `${v} Star${v !== 1 ? 's' : ''}, ${labels[v]}`}
          onChange={(_, newValue) => setValue(newValue)}
          onChangeActive={(_, newHover) => setHover(newHover)}
        />
        {active !== null && (
          <Typography variant="body2" color="text.secondary">
            {labels[active ?? 0]}
          </Typography>
        )}
      </Stack>
    )
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Stack spacing={1}>
      <Rating name="disabled-1" defaultValue={2} disabled />
      <Rating name="disabled-2" defaultValue={3.5} disabled />
    </Stack>
  ),
}

// ─── Custom max ───────────────────────────────────────────────────────────────

export const TenStars: Story = {
  name: 'Custom max (10 stars)',
  render: () => (
    <Rating name="ten-stars" defaultValue={7} max={10} />
  ),
}
