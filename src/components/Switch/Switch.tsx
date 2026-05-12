import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material'

export interface SwitchProps extends MuiSwitchProps {}

export function Switch({ color = 'primary', size = 'medium', ...props }: SwitchProps) {
  return <MuiSwitch color={color} size={size} {...props} />
}
