import figma from '@figma/code-connect'
import MailIcon from '@mui/icons-material/Mail'
import { IconButton } from '@mui/material'
import { Badge } from './Badge'

// Badge standalone
figma.connect(
  Badge,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6587-47500',
  {
    props: {
      variant: figma.enum('Variant', {
        Standard: 'standard',
        Dot: 'dot',
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
    },
    example: ({ variant, color }) => (
      <Badge variant={variant} badgeContent={1} color={color}>
        <MailIcon />
      </Badge>
    ),
  },
)

// Badge with instance (wrapping an IconButton)
figma.connect(
  Badge,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6587-47527',
  {
    props: {
      variant: figma.enum('Variant', {
        Standard: 'standard',
        Dot: 'dot',
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
    },
    example: ({ variant, color }) => (
      <IconButton aria-label="notifications">
        <Badge variant={variant} badgeContent={1} color={color}>
          <MailIcon />
        </Badge>
      </IconButton>
    ),
  },
)
