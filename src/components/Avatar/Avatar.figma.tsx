import figma from '@figma/code-connect'
import PersonIcon from '@mui/icons-material/Person'
import { Avatar, AvatarGroup } from './Avatar'

// Avatar
figma.connect(
  Avatar,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6587-47403',
  {
    props: {
      size: figma.enum('Size', {
        '40': 40,
        '32': 32,
        '24': 24,
        '18': 18,
      }),
      variant: figma.enum('Variant', {
        Rounded: 'rounded',
        Square: 'square',
      }),
    },
    example: ({ size, variant }) => (
      <Avatar size={size} variant={variant} sx={{ bgcolor: 'primary.main' }}>
        <PersonIcon />
      </Avatar>
    ),
  },
)

// AvatarGroup
figma.connect(
  AvatarGroup,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=7432-52415',
  {
    props: {
      size: figma.enum('Size', {
        '40': 40,
        '32': 32,
        '24': 24,
      }),
      max: figma.enum('Max', {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      }),
      spacing: figma.enum('Spacing', {
        Small: 'small',
      }),
    },
    example: ({ size, max, spacing }) => (
      <AvatarGroup size={size} max={max} spacing={spacing}>
        <Avatar alt="User 1" />
        <Avatar alt="User 2" />
        <Avatar alt="User 3" />
        <Avatar alt="User 4" />
        <Avatar alt="User 5" />
      </AvatarGroup>
    ),
  },
)
