import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from '@mui/material'

export interface SkeletonProps extends MuiSkeletonProps {}

export function Skeleton({ variant = 'text', animation = 'pulse', ...props }: SkeletonProps) {
  return <MuiSkeleton variant={variant} animation={animation} {...props} />
}
