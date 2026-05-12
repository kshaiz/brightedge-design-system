# Select — AI Instructions

## When to use
- Use `Select` for 10 or fewer fixed options where all choices can be shown upfront
- Use `Autocomplete` for more than 10 options or when the user can type a custom value

## Variant
Always use the **outlined** variant. The `variant` prop is intentionally omitted from the wrapper — it is always `outlined`.

## Labelling — always use FormLabel, never InputLabel
**Never** pass a `label` or `labelId` prop to `Select`. These props use MUI's `InputLabel` internally, which floats inside the input border. BrightEdge always places the label **above** the input using `FormLabel`.

Correct pattern:
```tsx
<FormControl fullWidth>
  <FormLabel>Billing cycle</FormLabel>
  <Select value={value} onChange={handleChange}>
    <MenuItem value="monthly">Monthly</MenuItem>
    <MenuItem value="annual">Annual</MenuItem>
  </Select>
</FormControl>
```

This same rule applies to `Autocomplete`, `TextField`, and `Textarea` — never use `InputLabel` in any form layout.

## Props
- `fullWidth` defaults to `true` — only override when embedding in a constrained layout
- `size`: use `"medium"` (default) in standard layouts, `"small"` in dense/compact layouts
- `multiple`: enable to allow multi-select; selected values render as comma-separated text by default, or use `renderValue` to render Chips
- `displayEmpty`: set to `true` when showing a placeholder via `renderValue`
- `error`: pass for validation feedback; pair with `FormHelperText` below the Select
- `disabled`: disables the control entirely

## Helper text and error state
Use `FormHelperText` from `@mui/material` below the Select inside the `FormControl`:
```tsx
<FormControl fullWidth error>
  <FormLabel>Status</FormLabel>
  <Select value={value} onChange={handleChange} error>
    <MenuItem value="active">Active</MenuItem>
  </Select>
  <FormHelperText>This field is required</FormHelperText>
</FormControl>
```

## Grouping
Group related options with `ListSubheader` from `@mui/material`.

## Do not
- Do not use `label` or `labelId` props — they are blocked at the type level
- Do not use `variant="filled"` or `variant="standard"` — always outlined
- Do not use `InputLabel` anywhere in form layouts
