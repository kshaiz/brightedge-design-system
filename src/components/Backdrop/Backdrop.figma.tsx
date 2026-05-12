import figma from '@figma/code-connect'
import { Backdrop } from './Backdrop'

figma.connect(
  Backdrop,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6643-52207',
  {
    example: () => <Backdrop open showSpinner />,
  },
)
