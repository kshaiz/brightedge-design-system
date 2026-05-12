import figma from '@figma/code-connect'
import { Skeleton } from './Skeleton'

figma.connect(
  Skeleton,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6596-49017',
  {
    example: () => <Skeleton variant="rectangular" width={120} height={120} />,
  },
)
