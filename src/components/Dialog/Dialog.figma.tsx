import figma from '@figma/code-connect'
import { Button } from '../Button'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from './Dialog'

// Dialog
figma.connect(
  Dialog,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6586-47183',
  {
    example: () => (
      <Dialog open aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <DialogTitle id="dialog-title">Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desc">
            Dialog body text that describes the action or collects input.
          </DialogContentText>
        </DialogContent>
        <DialogActions cancelAction={<Button variant="text">Cancel</Button>}>
          <Button variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    ),
  },
)

// DialogTitle
figma.connect(
  DialogTitle,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6643-52210',
  {
    example: () => <DialogTitle>Dialog title</DialogTitle>,
  },
)

// DialogContent
figma.connect(
  DialogContent,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=127-59928',
  {
    example: () => (
      <DialogContent>
        <DialogContentText>Dialog body content.</DialogContentText>
      </DialogContent>
    ),
  },
)

// DialogActions
figma.connect(
  DialogActions,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=170-161662',
  {
    example: () => (
      <DialogActions cancelAction={<Button variant="text">Cancel</Button>}>
        <Button variant="contained">Confirm</Button>
      </DialogActions>
    ),
  },
)
