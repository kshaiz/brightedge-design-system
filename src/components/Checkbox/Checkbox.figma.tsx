import figma from '@figma/code-connect'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from './Checkbox'

// Standalone Checkbox (no label)
figma.connect(
  Checkbox,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6543-43052',
  {
    props: {
      defaultChecked: figma.enum('Checked', {
        True: true,
      }),
      indeterminate: figma.enum('Indeterminate', {
        True: true,
      }),
      color: figma.enum('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ defaultChecked, indeterminate, color, size, disabled }) => (
      <Checkbox
        defaultChecked={defaultChecked}
        indeterminate={indeterminate}
        color={color}
        size={size}
        disabled={disabled}
      />
    ),
  },
)

// Checkbox with label — always labelPlacement="end" (checkbox left, label right)
figma.connect(
  FormControlLabel,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=642-114394',
  {
    props: {
      disabled: figma.enum('Disabled', {
        True: true,
      }),
    },
    example: ({ disabled }) => (
      <FormControlLabel
        control={<Checkbox />}
        label="Label"
        disabled={disabled}
      />
    ),
  },
)
