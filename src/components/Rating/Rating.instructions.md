# Rating — AI Instructions

## Defaults

- **Size**: `medium`
- **Precision**: `0.5` — half-star increments are always enabled; do not set `precision={1}` unless explicitly requested

## When to use

Use Rating to let users submit a star rating or to display an aggregate score. For read-only display, always set `readOnly`.

## Always provide a name

The `name` prop is required for accessibility — it wires up the underlying radio inputs.

```tsx
<Rating name="product-quality" defaultValue={3.5} />
```

## Controlled vs uncontrolled

- Use `defaultValue` for uncontrolled (form submission, one-off ratings)
- Use `value` + `onChange` for controlled (state managed in React)

```tsx
// Controlled
const [value, setValue] = useState<number | null>(3)
<Rating
  name="rating"
  value={value}
  onChange={(_, newValue) => setValue(newValue)}
/>
```

## Read-only display

Use `readOnly` when displaying a rating without allowing interaction. Always pair with an accessible label.

```tsx
<Rating name="read-only" value={4.5} readOnly />
```

## Sizes

- `medium` (default)
- `small` — use inside tables or dense layouts
- `large` — use only when the rating is a primary focal point of the page

## Max stars

Default is 5. Use `max` only when the rating scale is explicitly different (e.g. `max={10}`).

## Do not

- Do not set `precision={1}` — the default 0.5 step is required
- Do not omit the `name` prop
- Do not use Rating for binary thumbs up/down — use IconButton instead
