import { useState } from 'react'
import { ButtonGroup as MuiButtonGroup, ButtonGroupProps as MuiButtonGroupProps, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Button } from '../Button/Button'

export interface ButtonGroupItem {
  label: string
  onClick: () => void
  disabled?: boolean
  startIcon?: React.ReactNode
}

export interface ButtonGroupProps extends Omit<MuiButtonGroupProps, 'children'> {
  buttons: ButtonGroupItem[]
}

const MAX_VISIBLE = 4

export function ButtonGroup({ buttons, variant = 'outlined', color = 'primary', size = 'medium', ...props }: ButtonGroupProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const overflow = buttons.length > MAX_VISIBLE
  const visible = overflow ? buttons.slice(0, MAX_VISIBLE - 1) : buttons
  const hidden = overflow ? buttons.slice(MAX_VISIBLE - 1) : []

  return (
    <>
      <MuiButtonGroup variant={variant} color={color} size={size} {...props}>
        {visible.map((btn, i) => (
          <Button key={i} onClick={btn.onClick} disabled={btn.disabled} startIcon={btn.startIcon}>
            {btn.label}
          </Button>
        ))}
        {overflow && (
          <Button
            aria-label="More actions"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{ minWidth: 'auto', px: 1 }}
          >
            <MoreVertIcon fontSize="small" />
          </Button>
        )}
      </MuiButtonGroup>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {hidden.map((btn, i) => (
          <MenuItem
            key={i}
            disabled={btn.disabled}
            onClick={() => {
              setAnchorEl(null)
              btn.onClick()
            }}
          >
            {btn.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
