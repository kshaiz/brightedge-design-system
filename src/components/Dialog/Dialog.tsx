import React from 'react'
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
  Box,
} from '@mui/material'

// ─── Dialog ───────────────────────────────────────────────────────────────────

export interface DialogProps extends MuiDialogProps {}

export function Dialog({ maxWidth = 'sm', fullWidth = true, ...props }: DialogProps) {
  return <MuiDialog maxWidth={maxWidth} fullWidth={fullWidth} {...props} />
}

// ─── DialogTitle ──────────────────────────────────────────────────────────────

export interface DialogTitleProps extends MuiDialogTitleProps {}

export function DialogTitle(props: DialogTitleProps) {
  return <MuiDialogTitle {...props} />
}

// ─── DialogContent ────────────────────────────────────────────────────────────

export interface DialogContentProps extends MuiDialogContentProps {}

export function DialogContent(props: DialogContentProps) {
  return <MuiDialogContent {...props} />
}

// ─── DialogContentText ────────────────────────────────────────────────────────

export interface DialogContentTextProps extends MuiDialogContentTextProps {}

export function DialogContentText(props: DialogContentTextProps) {
  return <MuiDialogContentText {...props} />
}

// ─── DialogActions ────────────────────────────────────────────────────────────
// Cancel / Back always goes on the left via `cancelAction`.
// Primary CTA and any secondary right-side actions go in `children` (right side).
// When no `cancelAction` is provided, children align right (single-button case).

export interface DialogActionsProps extends Omit<MuiDialogActionsProps, 'children'> {
  cancelAction?: React.ReactNode
  children?: React.ReactNode
}

export function DialogActions({ cancelAction, children, sx, ...props }: DialogActionsProps) {
  if (!cancelAction) {
    return (
      <MuiDialogActions sx={sx} {...props}>
        {children}
      </MuiDialogActions>
    )
  }

  return (
    <MuiDialogActions
      sx={[{ justifyContent: 'space-between' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <Box>{cancelAction}</Box>
      <Box sx={{ display: 'flex', gap: 1 }}>{children}</Box>
    </MuiDialogActions>
  )
}
