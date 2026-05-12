import figma from '@figma/code-connect'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from './IconButton'

figma.connect(
  IconButton,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6557-38545',
  {
    props: {
      color: figma.enum('Color', {
        Default: 'default',
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
    },
    example: ({ color, size, disabled }) => (
      <IconButton color={color} size={size} disabled={disabled} aria-label="Action">
        <EditIcon />
      </IconButton>
    ),
  },
)
