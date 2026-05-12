import {
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material'

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export function Breadcrumbs({ maxItems = 8, ...props }: BreadcrumbsProps) {
  return <MuiBreadcrumbs maxItems={maxItems} {...props} />
}
