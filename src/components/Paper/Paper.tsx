import {
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
} from '@mui/material'

export interface PaperProps extends MuiPaperProps {}

export function Paper({ variant = 'elevation', elevation = 1, ...props }: PaperProps) {
  return <MuiPaper variant={variant} elevation={variant === 'outlined' ? 0 : elevation} {...props} />
}
