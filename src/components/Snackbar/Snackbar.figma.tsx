import figma from '@figma/code-connect'
import { Alert } from '../Alert'
import { Snackbar } from './Snackbar'

// No Figma node provided for Snackbar — connect once a Figma URL is available
// figma.connect(Snackbar, 'https://www.figma.com/design/...', {
//   example: () => (
//     <Snackbar open>
//       <Alert severity="success" onClose={() => {}}>Message</Alert>
//     </Snackbar>
//   ),
// })

export {}
