import figma from '@figma/code-connect'
import { Chip } from './Chip'

figma.connect(
  Chip,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6588-47683',
  {
    props: {
      variant: figma.enum('Variant', {
        Filled: 'filled',
        Outlined: 'outlined',
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
        Medium: 'medium',
        Small: 'small',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ variant, color, size, disabled }) => (
      <Chip label="Label" variant={variant} color={color} size={size} disabled={disabled} />
    ),
  },
)
