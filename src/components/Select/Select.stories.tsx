import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FormControl,
  FormHelperText,
  ListSubheader,
  OutlinedInput,
  Chip,
  Box,
} from '@mui/material'
import { useState } from 'react'
import { FormLabel } from '../FormLabel'
import { Select, MenuItem, SelectChangeEvent } from './Select'
// @ts-ignore
import instructions from './Select.instructions.md?raw'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    multiple: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <FormControl fullWidth={args.fullWidth ?? true}>
      <FormLabel>Label</FormLabel>
      <Select {...args} defaultValue="option1">
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  ),
  args: {
    size: 'medium',
    disabled: false,
    error: false,
  },
}

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('monthly')
    return (
      <FormControl fullWidth>
        <FormLabel>Billing cycle</FormLabel>
        <Select value={value} onChange={(e: SelectChangeEvent) => setValue(e.target.value as string)}>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="quarterly">Quarterly</MenuItem>
          <MenuItem value="annual">Annual</MenuItem>
        </Select>
      </FormControl>
    )
  },
}

// ─── Small size ───────────────────────────────────────────────────────────────

export const Small: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Region</FormLabel>
      <Select defaultValue="us" size="small">
        <MenuItem value="us">United States</MenuItem>
        <MenuItem value="eu">Europe</MenuItem>
        <MenuItem value="apac">Asia Pacific</MenuItem>
      </Select>
    </FormControl>
  ),
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Status</FormLabel>
      <Select defaultValue="active" disabled>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
    </FormControl>
  ),
}

// ─── Error ────────────────────────────────────────────────────────────────────

export const Error: Story = {
  render: () => (
    <FormControl fullWidth error>
      <FormLabel>Role</FormLabel>
      <Select defaultValue="" error>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="editor">Editor</MenuItem>
        <MenuItem value="viewer">Viewer</MenuItem>
      </Select>
      <FormHelperText>Please select a role</FormHelperText>
    </FormControl>
  ),
}

// ─── With helper text ─────────────────────────────────────────────────────────

export const WithHelperText: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Plan</FormLabel>
      <Select defaultValue="pro">
        <MenuItem value="starter">Starter</MenuItem>
        <MenuItem value="pro">Pro</MenuItem>
        <MenuItem value="enterprise">Enterprise</MenuItem>
      </Select>
      <FormHelperText>Your plan determines the features available to your team.</FormHelperText>
    </FormControl>
  ),
}

// ─── Placeholder ──────────────────────────────────────────────────────────────

export const Placeholder: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormControl fullWidth>
        <FormLabel>Category</FormLabel>
        <Select
          value={value}
          onChange={(e: SelectChangeEvent) => setValue(e.target.value as string)}
          displayEmpty
          renderValue={(selected) => (selected ? String(selected) : <em>Select a category…</em>)}
        >
          <MenuItem value="seo">SEO</MenuItem>
          <MenuItem value="content">Content</MenuItem>
          <MenuItem value="analytics">Analytics</MenuItem>
        </Select>
      </FormControl>
    )
  },
}

// ─── Multiple ─────────────────────────────────────────────────────────────────

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(['seo'])
    return (
      <FormControl fullWidth>
        <FormLabel>Channels</FormLabel>
        <Select
          multiple
          value={values}
          onChange={(e: SelectChangeEvent<string[]>) => setValues(e.target.value as string[])}
        >
          <MenuItem value="seo">SEO</MenuItem>
          <MenuItem value="ppc">PPC</MenuItem>
          <MenuItem value="social">Social</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="display">Display</MenuItem>
        </Select>
      </FormControl>
    )
  },
}

// ─── Multiple with Chips ───────────────────────────────────────────────────────

export const MultipleChips: Story = {
  name: 'Multiple — Chips',
  render: () => {
    const [values, setValues] = useState<string[]>(['seo', 'ppc'])
    return (
      <FormControl fullWidth>
        <FormLabel>Channels</FormLabel>
        <Select
          multiple
          value={values}
          onChange={(e: SelectChangeEvent<string[]>) => setValues(e.target.value as string[])}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as string[]).map((val) => (
                <Chip key={val} label={val} size="small" />
              ))}
            </Box>
          )}
        >
          <MenuItem value="seo">SEO</MenuItem>
          <MenuItem value="ppc">PPC</MenuItem>
          <MenuItem value="social">Social</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="display">Display</MenuItem>
        </Select>
      </FormControl>
    )
  },
}

// ─── Grouped options ──────────────────────────────────────────────────────────

export const Grouped: Story = {
  render: () => (
    <FormControl fullWidth>
      <FormLabel>Metric</FormLabel>
      <Select defaultValue="clicks">
        <ListSubheader>Traffic</ListSubheader>
        <MenuItem value="clicks">Clicks</MenuItem>
        <MenuItem value="impressions">Impressions</MenuItem>
        <ListSubheader>Engagement</ListSubheader>
        <MenuItem value="ctr">CTR</MenuItem>
        <MenuItem value="bounce">Bounce rate</MenuItem>
      </Select>
    </FormControl>
  ),
}
