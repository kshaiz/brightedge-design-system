import figma from '@figma/code-connect'
import { FormControl } from '@mui/material'
import { FormLabel } from '../FormLabel'
import { Select, MenuItem } from './Select'

figma.connect(
  Select,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6570-41424',
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
      <FormControl fullWidth disabled={disabled} error={error}>
        <FormLabel>Label</FormLabel>
        <Select size={size} error={error}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    ),
  },
)
