import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from '@mui/material'

// ─── Menu ─────────────────────────────────────────────────────────────────────

export interface MenuProps extends MuiMenuProps {}

export function Menu(props: MenuProps) {
  return <MuiMenu {...props} />
}

// ─── MenuItem ─────────────────────────────────────────────────────────────────

export interface MenuItemProps extends MuiMenuItemProps {}

export function MenuItem(props: MenuItemProps) {
  return <MuiMenuItem {...props} />
}

// ─── MenuList ─────────────────────────────────────────────────────────────────

export interface MenuListProps extends MuiMenuListProps {}

export function MenuList(props: MenuListProps) {
  return <MuiMenuList {...props} />
}
