# Paper — AI Instructions

## When to use
- Use `Paper` as a generic surface container when none of the more semantic surfaces (Card, Dialog, Drawer) fit
- Use `elevation` to establish visual hierarchy — higher elevation = more prominent
- Use `variant="outlined"` when you want a border instead of a shadow

## Basic usage — elevation
```tsx
<Paper elevation={2}>
  Content on an elevated surface.
</Paper>
```

## Outlined variant
```tsx
<Paper variant="outlined">
  Content on an outlined surface.
</Paper>
```

## Square corners
```tsx
<Paper square elevation={3}>
  Content with square corners.
</Paper>
```

## Elevation scale
- `elevation={0}` — flat, no shadow (use for nested content)
- `elevation={1}` — default, subtle lift
- `elevation={4}` — menus, dropdowns
- `elevation={8}` — popovers
- `elevation={16}` — drawers
- `elevation={24}` — modals and dialogs

## Do not
- Do not set `elevation` when `variant="outlined"` — outlined Paper always has elevation 0
- Do not use Paper when Card, Dialog, or Drawer is a better semantic fit
