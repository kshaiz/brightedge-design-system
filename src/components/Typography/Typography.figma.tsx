import figma from '@figma/code-connect'
import { Typography } from './Typography'

figma.connect(
  Typography,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11609-174872',
  {
    example: () => <Typography variant="body1">Typography</Typography>,
  },
)
