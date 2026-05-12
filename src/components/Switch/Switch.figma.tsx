import figma from '@figma/code-connect'
import { FormControl, FormGroup, FormHelperText, FormControlLabel } from '@mui/material'
import { FormLabel } from '../FormLabel'
import { Switch } from './Switch'

// Standalone Switch
figma.connect(
  Switch,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6564-39128',
  {
    props: {
      size: figma.enum('Size', {
        Medium: 'medium',
        Small: 'small',
      }),
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      checked: figma.enum('Checked', {
        True: true,
      }),
      disabled: figma.enum('State', { Disabled: true }),
    },
    example: ({ size, color, checked, disabled }) => (
      <Switch
        size={size}
        color={color}
        defaultChecked={checked}
        disabled={disabled}
        inputProps={{ 'aria-label': 'Switch' }}
      />
    ),
  },
)

// Switch with label — label always on the right (end), no exceptions
figma.connect(
  Switch,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=642-114423',
  {
    props: {
      disabled: figma.enum('Disabled', { True: true }),
    },
    example: ({ disabled }) => (
      <FormControlLabel
        control={<Switch disabled={disabled} />}
        label="Label"
      />
    ),
  },
)

// Switch group
figma.connect(
  Switch,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=642-108242',
  {
    props: {
      disabled: figma.enum('State', { Disabled: true }),
      error: figma.enum('State', { Error: true }),
    },
    example: ({ disabled, error }) => (
      <FormControl disabled={disabled} error={error}>
        <FormLabel>Label</FormLabel>
        <FormGroup row={false}>
          <FormControlLabel control={<Switch defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Switch />} label="Option 2" />
          <FormControlLabel control={<Switch />} label="Option 3" />
        </FormGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    ),
  },
)
