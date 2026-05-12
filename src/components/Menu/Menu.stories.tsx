import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Divider, ListItemIcon, ListItemText } from '@mui/material'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { Menu, MenuItem } from './Menu'
// @ts-ignore
import instructions from './Menu.instructions.md?raw'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
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
type Story = StoryObj<typeof Menu>

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} aria-label="More options">
          <MoreVertIcon />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Duplicate</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Archive</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)} disabled>Export (unavailable)</MenuItem>
        </Menu>
      </>
    )
  },
}

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Actions
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Duplicate</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => setAnchorEl(null)} sx={{ color: 'error.main' }}>
            <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </>
    )
  },
}

// ─── With keyboard shortcuts ──────────────────────────────────────────────────

export const WithShortcuts: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Edit menu
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>⌘X</Typography>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemText>Copy</ListItemText>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>⌘C</Typography>
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>
            <ListItemText>Paste</ListItemText>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>⌘V</Typography>
          </MenuItem>
        </Menu>
      </>
    )
  },
}

// ─── Scrollable ───────────────────────────────────────────────────────────────

export const Scrollable: Story = {
  name: 'Scrollable (max height)',
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const items = ['Afghanistan', 'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Japan', 'United Kingdom', 'United States']
    return (
      <>
        <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
          Select country
        </Button>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          slotProps={{ paper: { style: { maxHeight: 240 } } }}
        >
          {items.map((item) => (
            <MenuItem key={item} onClick={() => setAnchorEl(null)}>{item}</MenuItem>
          ))}
        </Menu>
      </>
    )
  },
}

// ─── Dense ────────────────────────────────────────────────────────────────────

export const Dense: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    return (
      <Box>
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} aria-label="More">
          <MoreVertIcon />
        </IconButton>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{ dense: true }}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>View</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
        </Menu>
      </Box>
    )
  },
}
