import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material'

export interface RadioProps extends MuiRadioProps {}

export function Radio({ color = 'primary', size = 'medium', ...props }: RadioProps) {
  return <MuiRadio color={color} size={size} {...props} />
}
