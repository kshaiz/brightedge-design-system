# FormLabel — AI Instructions

## Rule: always use FormLabel, never InputLabel

In all form layouts, use `FormLabel` to label inputs. **Do not use `InputLabel`** — it is reserved for internal MUI use inside TextField and Select and should never appear directly in product code.

| Situation | Use |
|---|---|
| Label above a RadioGroup | `FormLabel` |
| Label above a CheckboxGroup | `FormLabel` |
| Label above a standalone input | `FormLabel` |
| Floating label inside a TextField | Use the `label` prop on TextField — it handles this internally |
| Floating label inside a Select | Use the `label` prop on TextField wrapping the Select |

## Spacing

The theme enforces **0.5 spacing units (4px)** of `marginBottom` on every `FormLabel`. Do not add extra margin manually.

## Always wrap in FormControl

`FormLabel` must always be a child of `FormControl` so that `disabled`, `error`, and `focused` states propagate automatically to the label.

```tsx
<FormControl error={hasError}>
  <FormLabel>Billing cycle</FormLabel>
  <RadioGroup name="plan">
    ...
  </RadioGroup>
  {hasError && <FormHelperText>Please select an option</FormHelperText>}
</FormControl>
```

## States

States are inherited from the parent `FormControl` — do not set them directly on `FormLabel`:

- `disabled` — propagated from `<FormControl disabled>`
- `error` — propagated from `<FormControl error>`

## Do not

- Do not use `InputLabel` anywhere in product code
- Do not set `marginBottom` on `FormLabel` directly — the theme already handles it
- Do not use `FormLabel` outside of a `FormControl`
