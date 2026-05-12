import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  TextField,
} from '@mui/material'

export interface AutocompleteProps<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> extends MuiAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo> {
  placeholder?: string
  helperText?: string
  error?: boolean
  required?: boolean
}

export function Autocomplete<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  placeholder,
  helperText,
  error,
  required,
  size = 'medium',
  fullWidth = true,
  ...props
}: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>) {
  return (
    <MuiAutocomplete
      size={size}
      fullWidth={fullWidth}
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
          required={required}
        />
      )}
    />
  )
}
