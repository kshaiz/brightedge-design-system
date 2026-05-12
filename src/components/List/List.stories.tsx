import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Box, Collapse, Paper } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import WifiIcon from '@mui/icons-material/Wifi'
import BluetoothIcon from '@mui/icons-material/Bluetooth'
import { Avatar } from '../Avatar'
import { Divider } from '../Divider'
import { IconButton } from '../IconButton'
import { Switch } from '../Switch'
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from './List'
// @ts-ignore
import instructions from './List.instructions.md?raw'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof List>

// ─── Basic display list ───────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Inbox" secondary="Unread messages" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemIcon><DraftsIcon /></ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemIcon><SendIcon /></ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>
    </Paper>
  ),
}

// ─── Actionable list (ListItemButton) ────────────────────────────────────────

export const Actionable: Story = {
  render: () => {
    const [selected, setSelected] = useState<number | null>(0)
    return (
      <Paper sx={{ width: 320 }}>
        <List>
          {['Inbox', 'Drafts', 'Sent', 'Trash'].map((label, i) => (
            <ListItemButton
              key={label}
              selected={selected === i}
              onClick={() => setSelected(i)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    )
  },
}

// ─── Nested / collapsible ─────────────────────────────────────────────────────

export const Nested: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Paper sx={{ width: 320 }}>
        <List>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} unmountOnExit>
            <List disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon><StarBorderIcon /></ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon><SendIcon /></ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><DraftsIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </List>
      </Paper>
    )
  },
}

// ─── With secondary action ────────────────────────────────────────────────────

export const SecondaryAction: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        {['Item one', 'Item two', 'Item three'].map((label) => (
          <ListItem
            key={label}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Paper>
  ),
}

// ─── Avatar list ──────────────────────────────────────────────────────────────

export const AvatarList: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List>
        {[
          { name: 'Brunch this weekend?', from: 'Ali Connors', preview: "I'll be in your neighborhood…" },
          { name: 'Summer BBQ', from: 'to Scott, Alex, Jennifer', preview: "Wish I could come, but I'm…" },
          { name: 'Oui Oui', from: 'Sandra Adams', preview: 'Do you have Paris recommendations?…' },
        ].map((item, i) => (
          <Box key={item.name}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>{item.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`${item.from} — ${item.preview}`}
              />
            </ListItem>
            {i < 2 && <Divider component="li" variant="inset" />}
          </Box>
        ))}
      </List>
    </Paper>
  ),
}

// ─── Switch list ──────────────────────────────────────────────────────────────

export const SwitchList: Story = {
  render: () => {
    const [checked, setChecked] = useState<string[]>(['wifi'])
    const toggle = (val: string) =>
      setChecked((prev) => (prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]))
    return (
      <Paper sx={{ width: 320 }}>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem
            secondaryAction={
              <Switch
                checked={checked.includes('wifi')}
                onChange={() => toggle('wifi')}
                inputProps={{ 'aria-label': 'Wi-Fi' }}
              />
            }
          >
            <ListItemIcon><WifiIcon /></ListItemIcon>
            <ListItemText primary="Wi-Fi" />
          </ListItem>
          <ListItem
            secondaryAction={
              <Switch
                checked={checked.includes('bluetooth')}
                onChange={() => toggle('bluetooth')}
                inputProps={{ 'aria-label': 'Bluetooth' }}
              />
            }
          >
            <ListItemIcon><BluetoothIcon /></ListItemIcon>
            <ListItemText primary="Bluetooth" />
          </ListItem>
        </List>
      </Paper>
    )
  },
}

// ─── With subheader ───────────────────────────────────────────────────────────

export const WithSubheader: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List subheader={<ListSubheader>Recent</ListSubheader>}>
        <ListItemButton><ListItemText primary="Report Q1" /></ListItemButton>
        <ListItemButton><ListItemText primary="Campaign overview" /></ListItemButton>
      </List>
      <List subheader={<ListSubheader>Pinned</ListSubheader>}>
        <ListItemButton><ListItemText primary="SEO dashboard" /></ListItemButton>
      </List>
    </Paper>
  ),
}

// ─── Dense ────────────────────────────────────────────────────────────────────

export const Dense: Story = {
  render: () => (
    <Paper sx={{ width: 320 }}>
      <List dense>
        <ListItemButton><ListItemIcon><InboxIcon /></ListItemIcon><ListItemText primary="Inbox" /></ListItemButton>
        <ListItemButton><ListItemIcon><DraftsIcon /></ListItemIcon><ListItemText primary="Drafts" /></ListItemButton>
        <ListItemButton><ListItemIcon><SendIcon /></ListItemIcon><ListItemText primary="Sent" /></ListItemButton>
      </List>
    </Paper>
  ),
}
