# Radio — AI Instructions

## When to use

Use Radio buttons for mutually exclusive choices where the user must select exactly one option from a visible list. If there are more than ~6 options, use Select instead.

## Always use inside RadioGroup

Wrap all radio buttons in `RadioGroup`. This manages selection state, keyboard navigation, and accessibility automatically.

```tsx
<RadioGroup name="plan" defaultValue="monthly">
  <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
  <FormControlLabel value="annual" control={<Radio />} label="Annual" />
</RadioGroup>
```

## Always use with a label

Wrap each `Radio` in `FormControlLabel`. Never render a bare `Radio` without either a `FormControlLabel` or an explicit `aria-label`.

## Label placement — always end (left radio, right label)

The radio button must always appear to the **left** of its label. Do not change `labelPlacement` — it is locked to `"end"` by the theme default.

When a label spans multiple lines, the radio stays vertically aligned with the **centre of the first line** (enforced by the theme's `MuiFormControlLabel` override).

## Wrap in FormControl for groups

Use `FormControl` + `FormLabel` to add a group heading. Use `FormHelperText` for validation messages.

```tsx
<FormControl error={hasError}>
  <FormLabel id="plan-label">Billing cycle</FormLabel>
  <RadioGroup aria-labelledby="plan-label" name="plan" defaultValue="monthly">
    <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
    <FormControlLabel value="annual" control={<Radio />} label="Annual" />
  </RadioGroup>
  {hasError && <FormHelperText>Please select an option</FormHelperText>}
</FormControl>
```

## Color and size defaults

- **Color**: `primary` (default)
- **Size**: `medium` (default) — use `small` only inside tables or dense/compact layouts

## Controlled vs uncontrolled

- Use `defaultValue` on `RadioGroup` for uncontrolled (form submission)
- Use `value` + `onChange` on `RadioGroup` for controlled (state managed in React)

## Do not

- Do not change `labelPlacement` — radio is always left of the label
- Do not use Radio for multi-select — use Checkbox instead
- Do not use Radio for binary on/off toggles — use Switch instead
- Do not use Radio without a `RadioGroup` wrapper
- Do not use more than ~6 options — use Select instead
