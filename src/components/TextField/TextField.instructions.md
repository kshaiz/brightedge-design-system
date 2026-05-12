# TextField — AI Instructions

## When to use
- Use `TextField` for any single-line or multi-line free-text input
- Use `Select` instead when the user picks from a fixed list of options (≤10)
- Use `Autocomplete` instead when there are more than 10 options or the user can type a custom value
- Use `type="password"` for password fields; never store or log the value

## Variant
Always **outlined** — the `variant` prop is blocked at the type level. Never use `filled` or `standard`.

## Labelling — always use FormLabel, never label prop
The `label` prop has been removed from this wrapper. It feeds MUI's `InputLabel`, which floats inside the input border. BrightEdge always places the label **above** the input using `FormLabel`.

Pass `error`, `disabled`, and `required` explicitly to both `FormLabel` and `TextField` so each renders the correct visual state:

```tsx
<Box>
  <FormLabel required error={hasError}>Email address</FormLabel>
  <TextField
    placeholder="user@example.com"
    type="email"
    required
    error={hasError}
    helperText={hasError ? 'Enter a valid email' : undefined}
  />
</Box>
```

Use `helperText` on `TextField` (not a separate `FormHelperText`) — it inherits the field's `error` state automatically.

## Multiline — single-value vs multi-value inputs
Use `multiline` when:
- The expected input is longer than a sentence (descriptions, notes, comments)
- The user needs to enter **multiple values** on separate lines: email addresses, URLs, domain names, keywords

For multi-value inputs (emails, URLs, etc.), add a `placeholder` that shows the expected format:
```tsx
<Box>
  <FormLabel>Email addresses</FormLabel>
  <TextField
    multiline
    minRows={3}
    maxRows={8}
    placeholder={'user@example.com\ncolleague@example.com'}
    helperText="One email per line"
  />
</Box>
```

### Rows
- Prefer `minRows` + `maxRows` over fixed `rows` — lets the field grow with content up to a cap
- `rows` (fixed height) only when the expected input length is predictable and bounded
- Good defaults: `minRows={3}` for short lists, `minRows={5}` for longer content

## Adornments
Use `slotProps.input` for start/end icons or prefix/suffix text:
```tsx
<TextField
  placeholder="0.00"
  slotProps={{
    input: {
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    },
  }}
/>
```

## Size
- `size="medium"` (default) — standard form layout
- `size="small"` — dense/compact layouts (filters, toolbars, table inline editing)

## fullWidth
Defaults to `true`. Only set `fullWidth={false}` when embedding in a fixed-width inline context (e.g. a number input beside a unit selector).

## Do not
- Do not use the `label` prop — it is blocked at the type level; use `FormLabel` above
- Do not use `variant="filled"` or `variant="standard"` — always outlined
- Do not use `type="number"` — use a dedicated number input or `inputMode="numeric"` with pattern validation instead; `type="number"` has poor UX (scroll-to-change, inconsistent browser behaviour)
- Do not use `rows` (fixed) when `minRows`+`maxRows` would serve better
- Do not use raw text below the field for validation messages — use `helperText` on `TextField`
