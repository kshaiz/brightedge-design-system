import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Stack,
} from '@mui/material'
import { useState } from 'react'
import { FormLabel } from '../FormLabel'
import { Switch } from './Switch'
// @ts-ignore
import instructions from './Switch.instructions.md?raw'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Setting" />
  ),
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Switch />} label="Unchecked" />
      <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
      <FormControlLabel control={<Switch disabled />} label="Disabled unchecked" />
      <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled checked" />
    </Stack>
  ),
}

// ─── Small size ───────────────────────────────────────────────────────────────

export const Small: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Switch size="small" />} label="Unchecked" />
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Checked" />
      <FormControlLabel control={<Switch size="small" disabled />} label="Disabled" />
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormControlLabel
          key={color}
          control={<Switch defaultChecked color={color} />}
          label={color}
        />
      ))}
    </Stack>
  ),
}

// ─── Controlled ───────────────────────────────────────────────────────────────

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        label={checked ? 'On' : 'Off'}
      />
    )
  },
}

// ─── In a group ───────────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Notifications</FormLabel>
      <FormGroup row={false}>
        <FormControlLabel control={<Switch defaultChecked />} label="Email" />
        <FormControlLabel control={<Switch defaultChecked />} label="Push" />
        <FormControlLabel control={<Switch />} label="SMS" />
      </FormGroup>
      <FormHelperText>Manage how you receive alerts</FormHelperText>
    </FormControl>
  ),
}

// ─── Group — disabled ─────────────────────────────────────────────────────────

export const GroupDisabled: Story = {
  name: 'Group — disabled',
  render: () => (
    <FormControl disabled>
      <FormLabel>Notifications</FormLabel>
      <FormGroup row={false}>
        <FormControlLabel control={<Switch defaultChecked />} label="Email" />
        <FormControlLabel control={<Switch />} label="Push" />
        <FormControlLabel control={<Switch />} label="SMS" />
      </FormGroup>
      <FormHelperText>Manage how you receive alerts</FormHelperText>
    </FormControl>
  ),
}

// ─── Group — error ────────────────────────────────────────────────────────────

export const GroupError: Story = {
  name: 'Group — error',
  render: () => (
    <FormControl error>
      <FormLabel>Notifications</FormLabel>
      <FormGroup row={false}>
        <FormControlLabel control={<Switch />} label="Email" />
        <FormControlLabel control={<Switch />} label="Push" />
        <FormControlLabel control={<Switch />} label="SMS" />
      </FormGroup>
      <FormHelperText>At least one notification channel must be enabled</FormHelperText>
    </FormControl>
  ),
}

// ─── Standalone (no visible label) ───────────────────────────────────────────

export const Standalone: Story = {
  name: 'Standalone — accessible label via aria',
  render: () => (
    <Switch defaultChecked inputProps={{ 'aria-label': 'Enable dark mode' }} />
  ),
}
