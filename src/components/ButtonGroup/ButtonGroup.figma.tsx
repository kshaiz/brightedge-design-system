import figma from '@figma/code-connect'
import { ButtonGroup } from './ButtonGroup'

figma.connect(
  ButtonGroup,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6543-39843',
  {
    props: {
      variant: figma.enum('Variant', {
        Contained: 'contained',
        Outlined: 'outlined',
        Text: 'text',
      }),
      color: figma.enum('Color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Inherit: 'inherit',
      }),
      orientation: figma.enum('Orientation', {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
      }),
    },
    example: ({ variant, color, orientation }) => (
      <ButtonGroup
        variant={variant}
        color={color}
        orientation={orientation}
        buttons={[
          { label: 'Action 1', onClick: () => {} },
          { label: 'Action 2', onClick: () => {} },
          { label: 'Action 3', onClick: () => {} },
        ]}
      />
    ),
  },
)
