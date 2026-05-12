import figma from '@figma/code-connect'
import { Box } from '@mui/material'
import { FormLabel } from '../FormLabel'
import { TextField } from './TextField'

// Single-line TextField
figma.connect(
  TextField,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6570-48313',
  {
    props: {
      size: figma.enum('Size', {
        Medium: 'medium',
        Small: 'small',
      }),
      disabled: figma.enum('State', { Disabled: true }),
      error: figma.enum('State', { Error: true }),
    },
    example: ({ size, disabled, error }) => (
      <Box>
        <FormLabel disabled={disabled} error={error}>Label</FormLabel>
        <TextField size={size} disabled={disabled} error={error} placeholder="Value" />
      </Box>
    ),
  },
)

// Single-line TextField with helper text (error state)
figma.connect(
  TextField,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11140-154883',
  {
    example: () => (
      <Box>
        <FormLabel error>Label</FormLabel>
        <TextField error helperText="Helper text" placeholder="Value" />
      </Box>
    ),
  },
)

// Multiline TextField
figma.connect(
  TextField,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=7551-51690',
  {
    example: () => (
      <Box>
        <FormLabel>Label</FormLabel>
        <TextField multiline minRows={4} maxRows={8} placeholder="Enter text…" />
      </Box>
    ),
  },
)
