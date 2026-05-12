import figma from '@figma/code-connect'
import AddIcon from '@mui/icons-material/Add'
import { Button } from './Button'

figma.connect(
  Button,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6543-36744',
  {
    props: {
      variant: figma.enum('Variant', {
        Contained: 'contained',
        Outlined: 'outlined',
        Text: 'text',
      }),
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Inherit: 'inherit',
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
      children: figma.string('Label'),
    },
    example: ({ variant, color, size, disabled, children }) => (
      <Button
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        disableElevation
      >
        {children}
      </Button>
    ),
  },
)

// Figma treats LoadingButton as a separate component but it maps directly
// to Button with loading={true} — no separate code component needed.
// loadingPosition defaults to "start" in our Button wrapper.
figma.connect(
  Button,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=1634-70207',
  {
    props: {
      variant: figma.enum('Variant', {
        Contained: 'contained',
        Outlined: 'outlined',
        Text: 'text',
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
    },
    example: ({ variant, size }) => (
      <Button
        variant={variant}
        size={size}
        loading
        startIcon={<AddIcon />}
        disableElevation
      >
        Loading
      </Button>
    ),
  },
)
