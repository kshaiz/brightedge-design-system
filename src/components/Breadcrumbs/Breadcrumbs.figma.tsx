import figma from '@figma/code-connect'
import { Link } from '@mui/material'
import { Breadcrumbs } from './Breadcrumbs'
import { Typography } from '../Typography'

figma.connect(
  Breadcrumbs,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6572-50436',
  {
    example: () => (
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="#" underline="hover" color="inherit">Link</Link>
        <Link href="#" underline="hover" color="inherit">Link</Link>
        <Typography color="text.primary">Current</Typography>
      </Breadcrumbs>
    ),
  },
)
