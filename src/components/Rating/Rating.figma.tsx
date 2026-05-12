import figma from '@figma/code-connect'
import { Rating } from './Rating'

figma.connect(
  Rating,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6562-39624',
  {
    props: {
      size: figma.enum('Size', {
        'Small': 'small',
        'Medium*': 'medium',
        'Large': 'large',
      }),
      disabled: figma.enum('Disabled', {
        True: true,
      }),
    },
    example: ({ size, disabled }) => (
      <Rating
        name="rating"
        defaultValue={2.5}
        size={size}
        disabled={disabled}
      />
    ),
  },
)
