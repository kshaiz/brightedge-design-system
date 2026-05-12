import figma from '@figma/code-connect'
import { Link } from './Link'

// Link — Figma props: color ("Primary"|"Inherit"), underline ("Always"|"Hover"|"None")
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Link,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6574-50682',
  {
    example: () => (
      <Link href="#">Link</Link>
    ),
  },
)
