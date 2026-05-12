import figma from '@figma/code-connect'
import { Button } from './Button'

// TODO: replace FIGMA_FILE_KEY and FIGMA_NODE_ID with values from your Figma file.
// How to find them: open your Figma file → right-click the Button component → "Copy link"
// URL format: figma.com/design/FILE_KEY/...?node-id=NODE_ID
// Run `npm run figma` to publish after updating.

figma.connect(Button, 'https://www.figma.com/design/FIGMA_FILE_KEY?node-id=FIGMA_NODE_ID', {
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
    }),
    size: figma.enum('Size', {
      Small: 'small',
      Medium: 'medium',
      Large: 'large',
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    children: figma.string('Label'),
  },
  example: ({ variant, color, size, disabled, children }) => (
    <Button variant={variant} color={color} size={size} disabled={disabled}>
      {children}
    </Button>
  ),
})
