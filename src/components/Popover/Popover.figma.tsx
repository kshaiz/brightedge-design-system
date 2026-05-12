import figma from '@figma/code-connect'
import { Box } from '@mui/material'
import { Popover } from './Popover'
import { Typography } from '../Typography'

figma.connect(
  Popover,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=1489-11841',
  {
    example: () => (
      <Popover open anchorEl={null} onClose={() => {}}>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">The content of the Popover.</Typography>
        </Box>
      </Popover>
    ),
  },
)
