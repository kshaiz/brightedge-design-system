import figma from '@figma/code-connect'
import { Divider } from './Divider'

// Horizontal
figma.connect(
  Divider,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6645-53005',
  {
    example: () => <Divider />,
  },
)

// Vertical
figma.connect(
  Divider,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6645-53007',
  {
    example: () => <Divider orientation="vertical" flexItem />,
  },
)
