import figma from '@figma/code-connect'
import { Typography } from '../Typography'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from './Accordion'
import { Button } from '../Button'

figma.connect(
  Accordion,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6583-46084',
  {
    example: () => (
      <Accordion>
        <AccordionSummary id="panel-header" aria-controls="panel-content">
          <Typography>Section title</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel-content">
          <Typography variant="body2" color="text.secondary">
            Section content goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    ),
  },
)
