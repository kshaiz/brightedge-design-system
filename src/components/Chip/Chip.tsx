import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
} from '@mui/material'

export interface ChipProps extends MuiChipProps {}

export function Chip({ size = 'medium', color = 'default', ...props }: ChipProps) {
  return <MuiChip size={size} color={color} {...props} />
}
