import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material'

export interface ContainerProps extends MuiContainerProps {}

export function Container(props: ContainerProps) {
  return <MuiContainer {...props} />
}
