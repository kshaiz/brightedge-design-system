import figma from '@figma/code-connect'
import { Button } from '../Button'
import { Tooltip } from './Tooltip'

figma.connect(
  Tooltip,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6590-48770',
  {
    example: () => (
      <Tooltip title="Tooltip text" arrow placement="top">
        <Button>Hover me</Button>
      </Tooltip>
    ),
  },
)
