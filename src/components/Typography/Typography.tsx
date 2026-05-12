import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'

export interface TypographyProps extends MuiTypographyProps {}

export function Typography({ variant = 'body1', color = 'text.primary', ...props }: TypographyProps) {
  return <MuiTypography variant={variant} color={color} {...props} />
}
