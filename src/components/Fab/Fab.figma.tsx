import figma from '@figma/code-connect'
import AddIcon from '@mui/icons-material/Add'
import { Fab } from './Fab'

figma.connect(
  Fab,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6556-38264',
  {
    props: {
      variant: figma.enum('Variant', {
        Round: 'circular',
        Extended: 'extended',
      }),
      color: figma.enum('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
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
    example: ({ variant, color, size, disabled }) => (
      <Fab
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        aria-label="Add"
      >
        <AddIcon />
      </Fab>
    ),
  },
)
