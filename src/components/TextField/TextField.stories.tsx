import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, InputAdornment, Stack } from '@mui/material'
import { useState } from 'react'
import { FormLabel } from '../FormLabel'
import { TextField } from './TextField'
// @ts-ignore
import instructions from './TextField.instructions.md?raw'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
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
      <Box sx={{ width: 360 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    multiline: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <Box>
      <FormLabel required={args.required} error={args.error} disabled={args.disabled}>
        Label
      </FormLabel>
      <TextField {...args} placeholder="Value" />
    </Box>
  ),
  args: {
    size: 'medium',
    disabled: false,
    error: false,
    required: false,
  },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <FormLabel>Enabled</FormLabel>
        <TextField placeholder="Enter a value" />
      </Box>

      <Box>
        <FormLabel>With value</FormLabel>
        <TextField defaultValue="Existing content" />
      </Box>

      <Box>
        <FormLabel disabled>Disabled</FormLabel>
        <TextField disabled defaultValue="Cannot edit" />
      </Box>

      <Box>
        <FormLabel error>Error</FormLabel>
        <TextField error helperText="This field is required" placeholder="Enter a value" />
      </Box>

      <Box>
        <FormLabel required>Required</FormLabel>
        <TextField required placeholder="Enter a value" />
      </Box>
    </Stack>
  ),
}

// ─── Small ────────────────────────────────────────────────────────────────────

export const Small: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <FormLabel>Keyword</FormLabel>
        <TextField size="small" placeholder="e.g. digital marketing" />
      </Box>
      <Box>
        <FormLabel error>Invalid</FormLabel>
        <TextField size="small" error helperText="Required" placeholder="Enter value" />
      </Box>
    </Stack>
  ),
}

// ─── With helper text ─────────────────────────────────────────────────────────

export const WithHelperText: Story = {
  render: () => (
    <Box>
      <FormLabel>Domain</FormLabel>
      <TextField
        placeholder="example.com"
        helperText="Enter your root domain without http:// or www"
      />
    </Box>
  ),
}

// ─── With adornments ──────────────────────────────────────────────────────────

export const WithAdornments: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <FormLabel>Monthly budget</FormLabel>
        <TextField
          placeholder="0.00"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
          }}
        />
      </Box>
      <Box>
        <FormLabel>Weight</FormLabel>
        <TextField
          placeholder="0"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            },
          }}
        />
      </Box>
    </Stack>
  ),
}

// ─── Password ─────────────────────────────────────────────────────────────────

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    return (
      <Box>
        <FormLabel>Password</FormLabel>
        <TextField
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="••••••••"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="button"
                    onClick={() => setShow((s) => !s)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'text.secondary',
                      fontSize: 12,
                      p: 0,
                    }}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Box>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    )
  },
}

// ─── Multiline — flexible height ──────────────────────────────────────────────

export const Multiline: Story = {
  name: 'Multiline — flexible height',
  render: () => (
    <Box>
      <FormLabel>Description</FormLabel>
      <TextField
        multiline
        minRows={3}
        maxRows={8}
        placeholder="Enter a description…"
        helperText="Describe the campaign goal in a few sentences"
      />
    </Box>
  ),
}

// ─── Multiline — multiple email addresses ─────────────────────────────────────

export const MultilineEmails: Story = {
  name: 'Multiline — multiple email addresses',
  render: () => (
    <Box>
      <FormLabel>Recipient emails</FormLabel>
      <TextField
        multiline
        minRows={3}
        maxRows={8}
        placeholder={'user@example.com\ncolleague@example.com'}
        helperText="One email address per line"
      />
    </Box>
  ),
}

// ─── Multiline — multiple URLs ────────────────────────────────────────────────

export const MultilineUrls: Story = {
  name: 'Multiline — multiple URLs',
  render: () => (
    <Box>
      <FormLabel>Landing page URLs</FormLabel>
      <TextField
        multiline
        minRows={3}
        maxRows={8}
        placeholder={'https://example.com/page-1\nhttps://example.com/page-2'}
        helperText="One URL per line"
      />
    </Box>
  ),
}

// ─── Multiline — fixed rows ───────────────────────────────────────────────────

export const MultilineFixed: Story = {
  name: 'Multiline — fixed rows',
  render: () => (
    <Box>
      <FormLabel>Notes</FormLabel>
      <TextField
        multiline
        rows={4}
        placeholder="Additional notes visible to the team…"
      />
    </Box>
  ),
}
