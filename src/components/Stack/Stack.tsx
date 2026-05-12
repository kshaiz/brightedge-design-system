import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material'

export interface StackProps extends MuiStackProps {}

export function Stack(props: StackProps) {
  return <MuiStack {...props} />
}
