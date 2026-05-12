import figma from '@figma/code-connect'
import { Alert, AlertTitle } from './Alert'

figma.connect(
  Alert,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6595-48211',
  {
    example: () => (
      <Alert severity="info">
        <AlertTitle>Title</AlertTitle>
        Alert description text.
      </Alert>
    ),
  },
)
