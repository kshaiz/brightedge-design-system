import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
  Snackbar,
} from '@mui/material'

// ─── Alert (inline) ───────────────────────────────────────────────────────────

export interface AlertProps extends MuiAlertProps {}

export function Alert({ severity = 'info', variant = 'standard', ...props }: AlertProps) {
  return <MuiAlert severity={severity} variant={variant} {...props} />
}

// ─── AlertTitle ───────────────────────────────────────────────────────────────

export interface AlertTitleProps extends MuiAlertTitleProps {}

export function AlertTitle(props: AlertTitleProps) {
  return <MuiAlertTitle {...props} />
}

// ─── PageAlert ────────────────────────────────────────────────────────────────

export interface PageAlertProps {
  open: boolean
  onClose: () => void
  severity?: MuiAlertProps['severity']
  message: string
  title?: string
  autoHideDuration?: number
}

export function PageAlert({
  open,
  onClose,
  severity = 'info',
  message,
  title,
  autoHideDuration = 6000,
}: PageAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
