import figma from '@figma/code-connect'
import { Box } from '@mui/material'
import { Drawer } from './Drawer'
import { Typography } from '../Typography'

figma.connect(
  Drawer,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6632-53856',
  {
    example: () => (
      <Drawer open onClose={() => {}}>
        <Box sx={{ width: 480, p: 3 }}>
          <Typography variant="body1">Drawer content here.</Typography>
        </Box>
      </Drawer>
    ),
  },
)
