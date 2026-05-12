import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Stack,
} from '@mui/material'
import { Checkbox } from './Checkbox'
// @ts-ignore
import instructions from './Checkbox.instructions.md?raw'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    indeterminate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    indeterminate: false,
  },
}

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </Stack>
  ),
}

// ─── With Label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <Stack>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </Stack>
  ),
}

// ─── Multi-line label alignment ───────────────────────────────────────────────

export const MultiLineLabel: Story = {
  name: 'Multi-line label (checkbox aligns to first line)',
  render: () => (
    <Stack sx={{ maxWidth: 280 }}>
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to the terms and conditions, including the privacy policy and cookie usage"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Send me occasional product updates and announcements via email"
      />
    </Stack>
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Medium" />
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] as const).map((color) => (
        <FormControlLabel
          key={color}
          control={<Checkbox color={color} defaultChecked />}
          label={color}
        />
      ))}
    </Stack>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label={checked ? 'Checked' : 'Unchecked'}
      />
    )
  },
}

// ─── Indeterminate ────────────────────────────────────────────────────────────

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState([true, false])
    const allChecked = checked.every(Boolean)
    const someChecked = checked.some(Boolean) && !allChecked

    return (
      <>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={(e) => setChecked([e.target.checked, e.target.checked])}
            />
          }
        />
        <Stack sx={{ pl: 3 }}>
          <FormControlLabel
            label="Child 1"
            control={
              <Checkbox
                checked={checked[0]}
                onChange={(e) => setChecked([e.target.checked, checked[1]])}
              />
            }
          />
          <FormControlLabel
            label="Child 2"
            control={
              <Checkbox
                checked={checked[1]}
                onChange={(e) => setChecked([checked[0], e.target.checked])}
              />
            }
          />
        </Stack>
      </>
    )
  },
}

// ─── FormGroup ────────────────────────────────────────────────────────────────

export const Group: Story = {
  name: 'FormGroup (row — default)',
  render: () => (
    <FormControl>
      <FormLabel>Notifications</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
        <FormControlLabel control={<Checkbox />} label="SMS" />
        <FormControlLabel control={<Checkbox />} label="Push" />
      </FormGroup>
    </FormControl>
  ),
}

export const GroupColumn: Story = {
  name: 'FormGroup (column — narrow space)',
  render: () => (
    <FormControl>
      <FormLabel>Permissions</FormLabel>
      <FormGroup row={false}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Read" />
        <FormControlLabel control={<Checkbox />} label="Write" />
        <FormControlLabel control={<Checkbox />} label="Delete" />
      </FormGroup>
    </FormControl>
  ),
}

export const GroupWithError: Story = {
  render: () => (
    <FormControl error>
      <FormLabel>Permissions</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Read" />
        <FormControlLabel control={<Checkbox />} label="Write" />
        <FormControlLabel control={<Checkbox />} label="Delete" />
      </FormGroup>
      <FormHelperText>Select at least one permission</FormHelperText>
    </FormControl>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
      <Checkbox disabled indeterminate />
    </Stack>
  ),
}
