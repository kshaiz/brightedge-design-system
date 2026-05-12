import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material'

export interface FabProps extends MuiFabProps {}

export function Fab({ color = 'primary', size = 'large', ...props }: FabProps) {
  return <MuiFab color={color} size={size} {...props} />
}
