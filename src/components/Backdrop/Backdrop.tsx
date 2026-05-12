import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
  CircularProgress,
} from '@mui/material'

export interface BackdropProps extends MuiBackdropProps {
  showSpinner?: boolean
}

export function Backdrop({ showSpinner = false, children, sx, ...props }: BackdropProps) {
  return (
    <MuiBackdrop
      sx={[
        (theme) => ({
          color: '#fff',
          zIndex: theme.zIndex.drawer + 1,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {showSpinner ? <CircularProgress color="inherit" /> : children}
    </MuiBackdrop>
  )
}
