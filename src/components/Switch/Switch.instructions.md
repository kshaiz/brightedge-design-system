# Switch — AI Instructions

## When to use
- Use `Switch` for a single binary on/off setting that takes effect immediately (no form submission needed)
- Use `Checkbox` instead when the setting is part of a form submitted later, or when multiple related options need to be selected
- Good for: notifications on/off, dark mode, feature flags, permission toggles

## Label — always on the right
**Always place the label to the right of the switch — no exceptions.** The theme enforces `labelPlacement="end"` as the default on `FormControlLabel`. Never override `labelPlacement` on a Switch's `FormControlLabel`.

```tsx
// Correct
<FormControlLabel control={<Switch />} label="Enable notifications" />

// Never do this
<FormControlLabel control={<Switch />} label="Enable notifications" labelPlacement="start" />
```

## Standalone (no visible label)
When used without a visible label (e.g. in a table row), always provide an accessible label via `inputProps`:
```tsx
<Switch inputProps={{ 'aria-label': 'Enable dark mode' }} />
```

## In a group
Use `FormControl` + `FormLabel` + `FormGroup` + `FormControlLabel` for a group of related switches. Use `row={false}` on `FormGroup` — switch groups stack vertically since each item represents an independent setting:

```tsx
<FormControl>
  <FormLabel>Notifications</FormLabel>
  <FormGroup row={false}>
    <FormControlLabel control={<Switch defaultChecked />} label="Email" />
    <FormControlLabel control={<Switch />} label="Push" />
    <FormControlLabel control={<Switch />} label="SMS" />
  </FormGroup>
  <FormHelperText>Manage how you receive alerts</FormHelperText>
</FormControl>
```

Disable the entire group by setting `disabled` on `FormControl` — this propagates to all children without touching each switch individually.

## Error state
Set `error` on `FormControl` and add `FormHelperText` to explain the issue:
```tsx
<FormControl error>
  <FormLabel>Notifications</FormLabel>
  <FormGroup row={false}>
    <FormControlLabel control={<Switch />} label="Email" />
  </FormGroup>
  <FormHelperText>At least one notification channel must be enabled</FormHelperText>
</FormControl>
```

## Size
- `size="medium"` (default) — standard touch target
- `size="small"` — use in dense layouts (tables, compact side panels)

## Color
Default is `primary`. Use other colors sparingly — only when the switch color carries semantic meaning (e.g. `color="error"` for a destructive toggle like "Delete all on exit").

## Do not
- Do not use `labelPlacement` other than `"end"` — the theme default enforces this
- Do not use `Switch` for multi-select scenarios — use `Checkbox` instead
- Do not use `Switch` without an accessible label (visible or via `aria-label`)
- Do not use `FormGroup row` (horizontal) for switch groups — switches stack vertically
