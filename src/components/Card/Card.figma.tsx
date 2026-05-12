import figma from '@figma/code-connect'
import { Card, CardHeader, CardContent } from './Card'
import { Typography } from '../Typography'

// Card — Figma props: TBD (confirm from dev panel)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Card,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11479-243797',
  {
    example: () => (
      <Card>
        <CardHeader title="Section title" subheader="Subheader" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Card content goes here.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
)
