import figma from '@figma/code-connect'
import { LinearProgress, CircularProgress } from './Progress'

figma.connect(
  LinearProgress,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6586-46855',
  {
    example: () => <LinearProgress variant="determinate" value={50} showLabel />,
  },
)

figma.connect(
  CircularProgress,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6586-47016',
  {
    example: () => <CircularProgress variant="determinate" value={66} showLabel />,
  },
)
