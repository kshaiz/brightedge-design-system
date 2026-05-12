import figma from '@figma/code-connect'
import { Stack } from './Stack'

// Stack — Figma props: Direction ("Row"|"Column"), Spacing (number), Instances (count)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.string() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Stack,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11114-137757',
  {
    example: () => (
      <Stack direction="row" spacing={2}>
        {/* children */}
      </Stack>
    ),
  },
)
