import figma from '@figma/code-connect'
import { FormLabel } from './FormLabel'

figma.connect(
  FormLabel,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11436-165380',
  {
    props: {
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      disabled: figma.enum('State', { Disabled: true }),
      error: figma.enum('State', { Error: true }),
    },
    example: ({ color, disabled, error }) => (
      <FormLabel color={color} disabled={disabled} error={error}>
        Label
      </FormLabel>
    ),
  },
)
