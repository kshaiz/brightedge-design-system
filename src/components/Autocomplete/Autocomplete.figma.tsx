import figma from '@figma/code-connect'
import { Autocomplete } from './Autocomplete'

figma.connect(
  Autocomplete,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6570-49856',
  {
    props: {
      multiple: figma.enum('Multiple Value', {
        True: true,
        False: false,
      }),
    },
    example: ({ multiple }) => (
      <Autocomplete
        label="Option"
        options={[]}
        multiple={multiple}
      />
    ),
  },
)
