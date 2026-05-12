import { useState } from 'react'
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckIcon from '@mui/icons-material/Check'

// ─── Standalone ToggleButton ──────────────────────────────────────────────────

export interface ToggleButtonProps extends MuiToggleButtonProps {}

export function ToggleButton({ size = 'medium', color = 'primary', ...props }: ToggleButtonProps) {
  return <MuiToggleButton size={size} {...props} />
}

// ─── ToggleButtonGroup with overflow ─────────────────────────────────────────

export interface ToggleButtonItem {
  value: string
  label?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  'aria-label'?: string
}

export interface ToggleButtonGroupProps
  extends Omit<MuiToggleButtonGroupProps, 'children' | 'onChange' | 'value' | 'defaultValue'> {
  buttons: ToggleButtonItem[]
  value?: string | string[] | null
  defaultValue?: string | string[] | null
  onChange?: (event: React.MouseEvent<HTMLElement>, value: string | string[] | null) => void
  exclusive?: boolean
}

const MAX_VISIBLE = 4

export function ToggleButtonGroup({
  buttons,
  value: valueProp,
  defaultValue,
  onChange,
  exclusive = false,
  size = 'medium',
  color = 'primary',
  orientation = 'horizontal',
  disabled,
  fullWidth,
  ...props
}: ToggleButtonGroupProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [internalValue, setInternalValue] = useState<string | string[] | null>(
    defaultValue !== undefined ? defaultValue : exclusive ? null : []
  )

  const isControlled = valueProp !== undefined
  const currentValue = isControlled ? valueProp : internalValue

  const hasOverflow = buttons.length > MAX_VISIBLE
  const visible = hasOverflow ? buttons.slice(0, MAX_VISIBLE - 1) : buttons
  const hidden = hasOverflow ? buttons.slice(MAX_VISIBLE - 1) : []

  const selectedValues: string[] =
    currentValue == null ? [] : Array.isArray(currentValue) ? currentValue : [currentValue]

  const isSelected = (val: string) => selectedValues.includes(val)

  const handleGroupChange = (event: React.MouseEvent<HTMLElement>, newValue: any) => {
    // Swallow __overflow__ sentinel so the MoreVert button doesn't affect selection state
    if (exclusive) {
      if (newValue === '__overflow__') return
    } else {
      if (Array.isArray(newValue) && newValue.includes('__overflow__')) {
        newValue = (newValue as string[]).filter((v) => v !== '__overflow__')
      }
    }
    if (!isControlled) setInternalValue(newValue)
    onChange?.(event, newValue)
  }

  const handleOverflowItemClick = (event: React.MouseEvent<HTMLElement>, val: string) => {
    const newValue: string | string[] | null = exclusive
      ? isSelected(val) ? null : val
      : isSelected(val)
      ? selectedValues.filter((v) => v !== val)
      : [...selectedValues, val]

    if (!isControlled) setInternalValue(newValue)
    onChange?.(event, newValue)
    setAnchorEl(null)
  }

  return (
    <>
      <MuiToggleButtonGroup
        value={currentValue}
        exclusive={exclusive}
        onChange={handleGroupChange}
        size={size}
        color={color}
        orientation={orientation}
        disabled={disabled}
        fullWidth={fullWidth}
        {...props}
      >
        {visible.map((btn) => (
          <MuiToggleButton
            key={btn.value}
            value={btn.value}
            disabled={btn.disabled}
            aria-label={btn['aria-label']}
          >
            {btn.icon}
            {btn.label}
          </MuiToggleButton>
        ))}
        {hasOverflow && (
          <MuiToggleButton
            value="__overflow__"
            selected={hidden.some((b) => isSelected(b.value))}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            aria-label="More options"
            aria-haspopup="menu"
          >
            <MoreVertIcon />
          </MuiToggleButton>
        )}
      </MuiToggleButtonGroup>

      {hasOverflow && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          {hidden.map((btn) => (
            <MenuItem
              key={btn.value}
              disabled={btn.disabled}
              selected={isSelected(btn.value)}
              onClick={(e) => handleOverflowItemClick(e as React.MouseEvent<HTMLElement>, btn.value)}
            >
              {btn.icon && <ListItemIcon>{btn.icon}</ListItemIcon>}
              <ListItemText>{btn.label ?? btn['aria-label'] ?? btn.value}</ListItemText>
              {isSelected(btn.value) && (
                <CheckIcon fontSize="small" sx={{ ml: 1, color: 'action.active', flexShrink: 0 }} />
              )}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}
