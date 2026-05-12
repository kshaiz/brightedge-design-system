import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from '@mui/material'

export interface DrawerProps extends MuiDrawerProps {}

export function Drawer({
  anchor = 'right',
  variant = 'temporary',
  ...props
}: DrawerProps) {
  return <MuiDrawer anchor={anchor} variant={variant} {...props} />
}
