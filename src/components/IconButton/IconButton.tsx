import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material'

export interface IconButtonProps extends MuiIconButtonProps {
  'aria-label': string
}

export function IconButton({ color = 'primary', size = 'medium', ...props }: IconButtonProps) {
  return <MuiIconButton color={color} size={size} {...props} />
}
