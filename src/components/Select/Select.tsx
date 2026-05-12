import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'

export type { SelectChangeEvent } from '@mui/material'

// Omit label/labelId — always use FormLabel above the Select instead of InputLabel.
export interface SelectProps extends Omit<MuiSelectProps, 'label' | 'labelId' | 'variant'> {}

export function Select({ size = 'medium', fullWidth = true, ...props }: SelectProps) {
  return <MuiSelect variant="outlined" size={size} fullWidth={fullWidth} {...props} />
}
