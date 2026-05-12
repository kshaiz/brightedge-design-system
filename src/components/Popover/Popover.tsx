import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from '@mui/material'

export interface PopoverProps extends MuiPopoverProps {}

export function Popover({
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  ...props
}: PopoverProps) {
  return (
    <MuiPopover
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...props}
    />
  )
}
