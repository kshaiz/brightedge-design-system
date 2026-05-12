# Autocomplete — AI Instructions

## When to use
- Use `Autocomplete` when there are more than 10 options to choose from
- Use `Autocomplete` when the user can select an existing value OR type a new one (`freeSolo`)
- Use `Select` for 10 or fewer fixed options

## Variants

### Single value (default)
Standard selection from a list of options.

### Multiple values (`multiple`)
Allows selecting more than one option. Selected values appear as Chips.
Use `limitTags` to cap how many chips show when unfocused.
Always set `filterSelectedOptions` to hide already-selected items from the dropdown.

### Free solo (`freeSolo`)
User can type a custom value not in the options list.
Combine with `selectOnFocus`, `clearOnBlur`, and `handleHomeEndKeys` when users should be able to create new entries (Creatable pattern).

### Async / load on open (`loading`)
Use when options are fetched from an API.
Always show `loadingText` and set `loading` while fetching.
Use `filterOptions={(x) => x}` to disable client-side filtering when the server filters results.

### Grouped options (`groupBy`)
Use to organise a large flat list into labelled categories.

### Disabled options (`getOptionDisabled`)
Use to prevent selection of specific options (e.g. unavailable time slots).

## Labelling — always use FormLabel, never InputLabel
**Never** pass a `label` prop to `Autocomplete`. The `label` prop has been removed from this wrapper because it feeds MUI's `InputLabel`, which floats inside the input border. BrightEdge always places the label **above** the input using `FormLabel`.

Correct pattern:
```tsx
<FormControl fullWidth>
  <FormLabel>Keywords</FormLabel>
  <Autocomplete
    options={options}
    renderInput={(params) => <TextField {...params} placeholder="Search…" />}
  />
</FormControl>
```

## Props
- `fullWidth` defaults to `true` — only override when embedding in a constrained layout
- Use `size="small"` in dense layouts, `size="medium"` (default) elsewhere
- Use `noOptionsText` to provide a meaningful empty state message
- Use `helperText` + `error` for validation feedback — never raw text below the field

## Do not
- Do not use `Autocomplete` for fewer than 10 options — use `Select` instead
- Do not pass a `label` prop — use `FormLabel` above the input instead
- Do not use `disablePortal` unless the dropdown is being clipped by a container with `overflow: hidden`
- Do not hardcode `filterOptions` to bypass search unless doing server-side filtering
