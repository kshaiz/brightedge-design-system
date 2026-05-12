import React from 'react'
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  CardMedia as MuiCardMedia,
  CardMediaProps as MuiCardMediaProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material'

// ─── Card ─────────────────────────────────────────────────────────────────────

export interface CardProps extends MuiCardProps {}

export function Card({ variant = 'outlined', ...props }: CardProps) {
  return <MuiCard variant={variant} {...props} />
}

// ─── CardHeader ───────────────────────────────────────────────────────────────

export interface CardHeaderProps extends MuiCardHeaderProps {}

export function CardHeader(props: CardHeaderProps) {
  return <MuiCardHeader {...props} />
}

// ─── CardContent ──────────────────────────────────────────────────────────────

export interface CardContentProps extends MuiCardContentProps {}

export function CardContent(props: CardContentProps) {
  return <MuiCardContent {...props} />
}

// ─── CardMedia ────────────────────────────────────────────────────────────────

export interface CardMediaProps extends MuiCardMediaProps {}

export function CardMedia(props: CardMediaProps) {
  return <MuiCardMedia {...props} />
}

// ─── CardActions ──────────────────────────────────────────────────────────────

export interface CardActionsProps extends MuiCardActionsProps {}

export function CardActions(props: CardActionsProps) {
  return <MuiCardActions {...props} />
}
