import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'

// Omit label/variant — always outlined, always use FormLabel above the input.
export interface TextFieldProps extends Omit<MuiTextFieldProps, 'label' | 'variant'> {}

export function TextField({ fullWidth = true, size = 'medium', ...props }: TextFieldProps) {
  return <MuiTextField variant="outlined" fullWidth={fullWidth} size={size} {...props} />
}
