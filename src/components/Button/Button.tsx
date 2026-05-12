import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

export interface ButtonProps extends MuiButtonProps {}

export function Button({ loading, loadingPosition = 'start', ...props }: ButtonProps) {
  return <MuiButton loading={loading} loadingPosition={loading ? loadingPosition : undefined} {...props} />
}
