import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormControl, Box, Stack } from '@mui/material'
import { useState } from 'react'
import { FormLabel } from '../FormLabel'
import { Slider } from './Slider'
// @ts-ignore
import instructions from './Slider.instructions.md?raw'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 320, pt: 2, px: 2 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    color: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    showEndLabels: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <FormControl fullWidth>
      <FormLabel>Volume</FormLabel>
      <Slider {...args} />
    </FormControl>
  ),
  args: {
    min: 0,
    max: 100,
    defaultValue: 30,
    step: 10,
    marks: true,
    showEndLabels: true,
  },
}

// ─── Discrete (preferred) ─────────────────────────────────────────────────────

export const Discrete: Story = {
  name: 'Discrete — preferred',
  render: () => (
    <Stack spacing={4}>
      <FormControl fullWidth>
        <FormLabel>Confidence threshold</FormLabel>
        <Slider min={0} max={100} step={10} marks defaultValue={50} />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Quality level</FormLabel>
        <Slider
          min={0}
          max={100}
          step={null}
          marks={[
            { value: 0, label: 'Low' },
            { value: 50, label: 'Medium' },
            { value: 100, label: 'High' },
          ]}
          defaultValue={50}
          showEndLabels={false}
        />
      </FormControl>
    </Stack>
  ),
}

// ─── Continuous (value shown to right) ───────────────────────────────────────

export const Continuous: Story = {
  name: 'Continuous — value shown right',
  render: () => {
    const [value, setValue] = useState(0.4)
    return (
      <FormControl fullWidth>
        <FormLabel>Opacity</FormLabel>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={value}
          onChange={(_, v) => setValue(v as number)}
        />
      </FormControl>
    )
  },
}

// ─── Range ────────────────────────────────────────────────────────────────────

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 80])
    return (
      <FormControl fullWidth>
        <FormLabel>Price range</FormLabel>
        <Slider
          min={0}
          max={200}
          step={10}
          marks
          value={value}
          onChange={(_, v) => setValue(v as number[])}
          disableSwap
        />
      </FormControl>
    )
  },
}

// ─── Range continuous ─────────────────────────────────────────────────────────

export const RangeContinuous: Story = {
  name: 'Range — continuous',
  render: () => {
    const [value, setValue] = useState<number[]>([20, 80])
    return (
      <FormControl fullWidth>
        <FormLabel>Keyword volume</FormLabel>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={(_, v) => setValue(v as number[])}
          disableSwap
        />
      </FormControl>
    )
  },
}

// ─── Small ────────────────────────────────────────────────────────────────────

export const Small: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Threshold</FormLabel>
      <Slider min={0} max={100} step={5} marks defaultValue={25} size="small" />
    </FormControl>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Max results</FormLabel>
      <Slider min={0} max={100} step={10} marks defaultValue={40} disabled />
    </FormControl>
  ),
}

// ─── Vertical ─────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <Box sx={{ height: 240, pt: 2, px: 2 }}>
        <Story />
      </Box>
    ),
  ],
  render: () => (
    <FormControl>
      <FormLabel>Level</FormLabel>
      <Box sx={{ height: 200, mt: 1 }}>
        <Slider orientation="vertical" min={0} max={100} step={10} marks defaultValue={60} />
      </Box>
    </FormControl>
  ),
}
