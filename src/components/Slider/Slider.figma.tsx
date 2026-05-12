import figma from '@figma/code-connect'
import { FormControl } from '@mui/material'
import { FormLabel } from '../FormLabel'
import { Slider } from './Slider'

figma.connect(
  Slider,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6562-39045',
  {
    props: {
      size: figma.enum('Size', {
        Medium: 'medium',
        Small: 'small',
      }),
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      marks: figma.enum('Variant', {
        Marks: true,
      }),
      value: figma.enum('Variant', {
        Range: [20, 80],
      }),
      orientation: figma.enum('Orientation', {
        Vertical: 'vertical',
      }),
      disabled: figma.enum('State', { Disabled: true }),
    },
    example: ({ size, color, marks, value, orientation, disabled }) => (
      <FormControl fullWidth disabled={disabled}>
        <FormLabel>Label</FormLabel>
        <Slider
          size={size}
          color={color}
          marks={marks}
          value={value}
          orientation={orientation}
          min={0}
          max={100}
          step={10}
          disabled={disabled}
        />
      </FormControl>
    ),
  },
)
