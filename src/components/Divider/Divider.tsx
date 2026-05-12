import {
  Divider as MuiDivider,
  DividerProps as MuiDividerProps,
} from '@mui/material'

export interface DividerProps extends MuiDividerProps {}

export function Divider({ orientation = 'horizontal', ...props }: DividerProps) {
  return <MuiDivider orientation={orientation} {...props} />
}
