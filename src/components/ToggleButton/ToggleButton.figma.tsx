import figma from '@figma/code-connect'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import { ToggleButton, ToggleButtonGroup } from './ToggleButton'

// Standalone ToggleButton
figma.connect(
  ToggleButton,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6601-50975',
  {
    props: {
      size: figma.enum('Size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      selected: figma.enum('State', { Selected: true }),
      disabled: figma.enum('State', { Disabled: true }),
    },
    example: ({ size, selected, disabled }) => (
      <ToggleButton
        value="option"
        size={size}
        selected={selected}
        disabled={disabled}
        aria-label="Option"
      >
        <FormatAlignLeftIcon />
      </ToggleButton>
    ),
  },
)

// ToggleButtonGroup
figma.connect(
  ToggleButtonGroup,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6601-51012',
  {
    props: {
      size: figma.enum('Size', {
        Large: 'large',
        Medium: 'medium',
        Small: 'small',
      }),
      orientation: figma.enum('Orientation', {
        Vertical: 'vertical',
      }),
    },
    example: ({ size, orientation }) => (
      <ToggleButtonGroup
        exclusive
        defaultValue="left"
        size={size}
        orientation={orientation}
        buttons={[
          { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
          { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
          { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
          { value: 'justify', icon: <FormatAlignJustifyIcon />, 'aria-label': 'Justify' },
        ]}
      />
    ),
  },
)
