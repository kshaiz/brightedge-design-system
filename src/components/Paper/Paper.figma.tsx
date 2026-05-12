import figma from '@figma/code-connect'
import { Paper } from './Paper'

// Paper — Figma props: variant ("Elevation"|"Outlined"), square (bool), elevation (string)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Paper,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6584-46711',
  {
    example: () => (
      <Paper variant="outlined">
        Content
      </Paper>
    ),
  },
)
