import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material'

export interface SnackbarProps extends MuiSnackbarProps {}

export function Snackbar({
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  autoHideDuration = 6000,
  ...props
}: SnackbarProps) {
  return (
    <MuiSnackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      {...props}
    />
  )
}
