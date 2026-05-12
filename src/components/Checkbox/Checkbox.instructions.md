# Checkbox — AI Instructions

## When to use

Use Checkbox for multi-select choices where the user can pick zero or more options from a list. For a single on/off toggle, prefer Switch instead.

## Always use with a label

Wrap in `FormControlLabel` to attach a visible label. Never render a bare `Checkbox` without either a `FormControlLabel` or an explicit `aria-label`.

```tsx
<FormControlLabel control={<Checkbox />} label="Enable notifications" />
```

## Label placement — always end (left checkbox, right label)

The checkbox must always appear to the **left** of its label. Do not change `labelPlacement` — it is locked to `"end"` by the theme default.

When a label spans multiple lines, the checkbox stays vertically aligned with the **centre of the first line** (enforced globally via the theme's `MuiFormControlLabel` override — no per-instance fix needed).

## Color and size defaults

- **Color**: `primary` (default) — use for all standard checkboxes
- **Size**: `medium` (default) — use `small` only inside tables or dense/compact layouts

## Grouping

Use `FormGroup` to group related checkboxes. The theme defaults `FormGroup` to `row` (horizontal). Switch to `row={false}` (column) only when horizontal space is too narrow.

```tsx
<FormControl error={hasError}>
  <FormLabel>Permissions</FormLabel>
  <FormGroup>  {/* row by default */}
    <FormControlLabel control={<Checkbox />} label="Read" />
    <FormControlLabel control={<Checkbox />} label="Write" />
  </FormGroup>
  {hasError && <FormHelperText>Select at least one</FormHelperText>}
</FormControl>
```

## Indeterminate state

Use `indeterminate` for a parent checkbox that controls a group where some but not all children are selected.

```tsx
<Checkbox
  checked={allSelected}
  indeterminate={someSelected && !allSelected}
  onChange={handleParentChange}
/>
```

## Controlled vs uncontrolled

- Use `defaultChecked` for uncontrolled checkboxes (forms handled by native form submission)
- Use `checked` + `onChange` for controlled checkboxes (state managed in React)

## Do not

- Do not change `labelPlacement` — checkbox is always left of the label
- Do not use Checkbox for mutually exclusive choices — use Radio Group instead
- Do not use Checkbox as a standalone action trigger — use Button instead
- Do not use `color="default"` unless a neutral (grey) appearance is specifically required
- Do not place a Checkbox inside a table cell without `size="small"`
