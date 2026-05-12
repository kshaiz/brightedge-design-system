import figma from '@figma/code-connect'
import InboxIcon from '@mui/icons-material/Inbox'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from './List'

// Actionable list row — use ListItemButton
figma.connect(
  ListItemButton,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6591-48882',
  {
    example: () => (
      <List>
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="List item" secondary="Secondary text" />
          <IconButton edge="end" aria-label="action">
            <DeleteIcon />
          </IconButton>
        </ListItemButton>
      </List>
    ),
  },
)

// Display-only list row — use ListItem
figma.connect(
  ListItem,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6591-48882',
  {
    example: () => (
      <List>
        <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="List item" />
        </ListItem>
      </List>
    ),
  },
)
