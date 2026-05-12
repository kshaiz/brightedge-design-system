import figma from '@figma/code-connect'
import { Container } from './Container'

// Container — Figma props: maxWidth ("Extra Large"|"Large"|"Medium"|"Small"|"Extra Small"), disableGutters (bool)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Container,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=7660-81184',
  {
    example: () => (
      <Container maxWidth="lg">
        {/* page content */}
      </Container>
    ),
  },
)
