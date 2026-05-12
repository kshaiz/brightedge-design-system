import {
  SvgIcon as MuiSvgIcon,
  SvgIconProps as MuiSvgIconProps,
} from '@mui/material'

export interface SvgIconProps extends MuiSvgIconProps {}

export function SvgIcon({ fontSize = 'medium', ...props }: SvgIconProps) {
  return <MuiSvgIcon fontSize={fontSize} {...props} />
}
