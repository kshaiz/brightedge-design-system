import figma from '@figma/code-connect'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup } from '@mui/material'
import { Radio } from './Radio'

// Standalone Radio
figma.connect(
  Radio,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6558-39273',
  {
    props: {
      defaultChecked: figma.enum('Checked', { True: true }),
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
      disabled: figma.enum('State', { Disabled: true }),
    },
    example: ({ defaultChecked, color, size, disabled }) => (
      <Radio
        defaultChecked={defaultChecked}
        color={color}
        size={size}
        disabled={disabled}
      />
    ),
  },
)

// Radio with label — always labelPlacement="end" (radio left, label right)
figma.connect(
  FormControlLabel,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=634-100262',
  {
    props: {
      disabled: figma.enum('Disabled', { True: true }),
    },
    example: ({ disabled }) => (
      <FormControlLabel
        control={<Radio />}
        label="Label"
        disabled={disabled}
      />
    ),
  },
)

// Radio group with FormControl
figma.connect(
  RadioGroup,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=1479-32615',
  {
    props: {
      disabled: figma.enum('State', { Disabled: true }),
      error: figma.enum('State', { Error: true }),
    },
    example: ({ disabled, error }) => (
      <FormControl disabled={disabled} error={error}>
        <FormLabel>Label</FormLabel>
        <RadioGroup name="group">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </RadioGroup>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    ),
  },
)
