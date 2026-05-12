import {
  Badge as MuiBadge,
  BadgeProps as MuiBadgeProps,
} from '@mui/material'

export interface BadgeProps extends MuiBadgeProps {}

export function Badge({ color = 'default', ...props }: BadgeProps) {
  return <MuiBadge color={color} {...props} />
}
