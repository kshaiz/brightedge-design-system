import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Stack,
} from '@mui/material'
import { Radio } from './Radio'
// @ts-ignore
import instructions from './Radio.instructions.md?raw'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
}

// ─── Basic RadioGroup ─────────────────────────────────────────────────────────

export const BasicGroup: Story = {
  name: 'Basic RadioGroup',
  render: () => (
    <RadioGroup defaultValue="option1" name="basic">
      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
      <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
    </RadioGroup>
  ),
}

// ─── With FormControl (label + helper text) ───────────────────────────────────

export const WithFormControl: Story = {
  name: 'With FormControl',
  render: () => (
    <FormControl>
      <FormLabel id="plan-label">Billing cycle</FormLabel>
      <RadioGroup aria-labelledby="plan-label" name="plan" defaultValue="monthly">
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="annual" control={<Radio />} label="Annual — save 20%" />
        <FormControlLabel value="biennial" control={<Radio />} label="2-year — save 35%" />
      </RadioGroup>
      <FormHelperText>You can change this at any time</FormHelperText>
    </FormControl>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('monthly')
    return (
      <FormControl>
        <FormLabel>Billing cycle</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="controlled-plan"
        >
          <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
          <FormControlLabel value="annual" control={<Radio />} label="Annual" />
        </RadioGroup>
        <FormHelperText>Selected: {value}</FormHelperText>
      </FormControl>
    )
  },
}

// ─── Error state ──────────────────────────────────────────────────────────────

export const WithError: Story = {
  render: () => (
    <FormControl error>
      <FormLabel>Subscription plan</FormLabel>
      <RadioGroup name="plan-error">
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="annual" control={<Radio />} label="Annual" />
      </RadioGroup>
      <FormHelperText>Please select a plan to continue</FormHelperText>
    </FormControl>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <FormControl disabled>
      <FormLabel>Subscription plan</FormLabel>
      <RadioGroup name="plan-disabled" defaultValue="monthly">
        <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
        <FormControlLabel value="annual" control={<Radio />} label="Annual" />
        <FormControlLabel value="biennial" control={<Radio />} label="2-year" />
      </RadioGroup>
      <FormHelperText>Contact support to change your plan</FormHelperText>
    </FormControl>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <FormControl>
        <FormLabel>Small</FormLabel>
        <RadioGroup defaultValue="a" name="size-small">
          <FormControlLabel value="a" control={<Radio size="small" />} label="Option A" />
          <FormControlLabel value="b" control={<Radio size="small" />} label="Option B" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Medium (default)</FormLabel>
        <RadioGroup defaultValue="a" name="size-medium">
          <FormControlLabel value="a" control={<Radio />} label="Option A" />
          <FormControlLabel value="b" control={<Radio />} label="Option B" />
        </RadioGroup>
      </FormControl>
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <RadioGroup defaultValue="primary" name="colors">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormControlLabel
          key={color}
          value={color}
          control={<Radio color={color} />}
          label={color}
        />
      ))}
    </RadioGroup>
  ),
}

// ─── Multi-line label alignment ───────────────────────────────────────────────

export const MultiLineLabel: Story = {
  name: 'Multi-line label (radio aligns to first line)',
  render: () => (
    <RadioGroup defaultValue="a" name="multiline" sx={{ maxWidth: 300 }}>
      <FormControlLabel
        value="a"
        control={<Radio />}
        label="Standard shipping — arrives in 5–7 business days at no extra cost"
      />
      <FormControlLabel
        value="b"
        control={<Radio />}
        label="Express shipping — arrives in 1–2 business days for an additional fee"
      />
    </RadioGroup>
  ),
}
