import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'

export interface CheckboxProps extends MuiCheckboxProps {}

export function Checkbox({ color = 'primary', size = 'medium', ...props }: CheckboxProps) {
  return <MuiCheckbox color={color} size={size} {...props} />
}
