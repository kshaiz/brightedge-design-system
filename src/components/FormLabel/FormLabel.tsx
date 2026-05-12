import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material'

export interface FormLabelProps extends MuiFormLabelProps {}

export function FormLabel(props: FormLabelProps) {
  return <MuiFormLabel {...props} />
}
