import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  AlertTitle as MuiAlertTitle,
  AlertTitleProps as MuiAlertTitleProps,
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
