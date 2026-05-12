import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormControl, RadioGroup, FormControlLabel, Radio, Stack } from '@mui/material'
import { FormLabel } from './FormLabel'
// @ts-ignore
import instructions from './FormLabel.instructions.md?raw'

const meta: Meta<typeof FormLabel> = {
  title: 'Components/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof FormLabel>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    children: 'Label',
    disabled: false,
    error: false,
    required: false,
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormLabel>Enabled</FormLabel>
      <FormLabel disabled>Disabled</FormLabel>
      <FormLabel error>Error</FormLabel>
      <FormLabel required>Required</FormLabel>
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormLabel key={color} color={color}>{color}</FormLabel>
      ))}
    </Stack>
  ),
}

// ─── With spacing (0.5 units below label) ─────────────────────────────────────

export const WithSpacing: Story = {
  name: 'Spacing — 0.5 units below label (theme default)',
  render: () => (
    <FormControl>
      <FormLabel>Billing cycle</FormLabel>
      <RadioGroup defaultValue="monthly" name="plan">
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="annual" control={<Radio />} label="Annual" />
      </RadioGroup>
    </FormControl>
  ),
}

// ─── Inherited states from FormControl ────────────────────────────────────────

export const InheritedDisabled: Story = {
  render: () => (
    <FormControl disabled>
      <FormLabel>Disabled via FormControl</FormLabel>
      <RadioGroup defaultValue="a" name="disabled">
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
      </RadioGroup>
    </FormControl>
  ),
}

export const InheritedError: Story = {
  render: () => (
    <FormControl error>
      <FormLabel>Error via FormControl</FormLabel>
      <RadioGroup name="error">
        <FormControlLabel value="a" control={<Radio />} label="Option A" />
        <FormControlLabel value="b" control={<Radio />} label="Option B" />
      </RadioGroup>
    </FormControl>
  ),
}
