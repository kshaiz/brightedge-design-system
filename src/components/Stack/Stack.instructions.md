# Stack — AI Instructions

## What Stack is

`Stack` arranges children in a row or column with uniform spacing between them. It is the **primary layout primitive** for composing UI — prefer it over `Box` whenever you need to space or align children.

## Basic usage

```tsx
<Stack spacing={2}>
  <ComponentA />
  <ComponentB />
  <ComponentC />
</Stack>
```

## Direction

```tsx
{/* vertical (default) */}
<Stack spacing={2}>
  <Item />
  <Item />
</Stack>

{/* horizontal */}
<Stack direction="row" spacing={2}>
  <Item />
  <Item />
</Stack>
```

## Spacing scale

Use MUI spacing units (1 unit = 8px). Stick to the approved scale:

| Value | px | When to use |
|---|---|---|
| 0.5 | 4px | Tight inline elements (icon + label) |
| 1 | 8px | Related items within a group |
| 2 | 16px | Items within a section |
| 4 | 32px | Between sections |
| 8 | 64px | Between major page blocks |

Never use odd values like 3, 5, 6, 7 — always choose the nearest approved value.

## Alignment (must go in sx)

In MUI v9, `alignItems` and `justifyContent` must be inside `sx`:

```tsx
<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
  <Typography variant="h5">Title</Typography>
  <Button>Action</Button>
</Stack>
```

## With a divider

```tsx
import { Divider } from '@brightedge/design-system'

<Stack spacing={2} divider={<Divider />}>
  <Item />
  <Item />
</Stack>
```

## Responsive direction

```tsx
<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
  <Item />
  <Item />
</Stack>
```

## Page header pattern

```tsx
<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }} mb={3}>
  <Typography variant="h5">{title}</Typography>
  <Stack direction="row" spacing={1}>{/* actions */}</Stack>
</Stack>
```

## Do not
- Do not use `Box` just to add gap between children — use `Stack`
- Do not use spacing values outside the approved scale (0.5, 1, 2, 4, 8)
- Do not pass `alignItems` or `justifyContent` as direct props — put them in `sx`
