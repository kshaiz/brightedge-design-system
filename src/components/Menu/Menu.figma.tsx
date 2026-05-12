import figma from '@figma/code-connect'
import { Menu, MenuItem, MenuList } from './Menu'

// Menu — Figma node 11402:158079
// MenuItem — Figma node 166:135123 removed: node is not a component or component set in Figma.
// MenuList — Figma node 11404:174321

figma.connect(
  Menu,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11402-158079',
  {
    example: () => (
      <Menu open anchorEl={null} onClose={() => {}}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
      </Menu>
    ),
  },
)

figma.connect(
  MenuList,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=11404-174321',
  {
    example: () => (
      <MenuList>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item</MenuItem>
      </MenuList>
    ),
  },
)
