# Box — AI Instructions

## What Box is

`Box` is a generic styled `div` with full access to the `sx` prop. It renders no visual chrome of its own.

## When to use Box

Use `Box` as a **last resort** — only when no other semantic component fits:
- You need a one-off `sx` style on a plain wrapper that isn't spacing children (use `Stack` for that)
- You need to change the rendered HTML element via `component` prop
- You're wrapping something that already handles its own layout

## When NOT to use Box

| Need | Use instead |
|---|---|
| Arrange children with a gap | `Stack` |
| Center content with a max-width | `Container` |
| Elevated or outlined surface | `Paper` or `Card` |
| Page-level padding | `Container` |

## Usage

```tsx
<Box sx={{ position: 'relative', overflow: 'hidden' }}>
  {children}
</Box>
```

## Spacing inside sx

Use MUI spacing units (1 unit = 8px). Stick to the approved scale:

| Value | px |
|---|---|
| 0.5 | 4px |
| 1 | 8px |
| 2 | 16px |
| 4 | 32px |
| 8 | 64px |

Never use arbitrary pixel values — always use the spacing scale above.

## Do not
- Do not use `Box` just to add margin or padding between children — use `Stack spacing={n}` instead
- Do not wrap every element in a `Box` — prefer the semantic component directly
