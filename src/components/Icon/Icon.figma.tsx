import figma from '@figma/code-connect'
import SearchIcon from '@mui/icons-material/Search'
import { SvgIcon } from './Icon'

figma.connect(
  SvgIcon,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6594-47648',
  {
    example: () => <SearchIcon fontSize="medium" />,
  },
)
