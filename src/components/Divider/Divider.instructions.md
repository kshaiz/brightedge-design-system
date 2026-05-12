# Divider — AI Instructions

## When to use
- Use `Divider` whenever you need a visual separator between sections or list items
- **Always prefer `<Divider />` over applying `borderBottom`, `borderTop`, or `border` styles via `sx`** — it keeps layout and visual separation concerns separate and ensures consistent theming

## Basic horizontal
```tsx
<Divider />
```

## Vertical (in flex containers)
```tsx
<Stack direction="row" alignItems="center" spacing={1}>
  <span>Left</span>
  <Divider orientation="vertical" flexItem />
  <span>Right</span>
</Stack>
```
Always add `flexItem` when the divider is a direct child of a flex container, or it will collapse to zero height.

## With text or chip
```tsx
<Divider>Section Title</Divider>
<Divider textAlign="left">Left-aligned</Divider>
<Divider><Chip label="OR" size="small" /></Divider>
```

## In a list
```tsx
<List>
  <ListItem>Item 1</ListItem>
  <Divider component="li" />
  <ListItem>Item 2</ListItem>
</List>
```
Use `component="li"` so the divider is valid HTML inside a `<ul>`.

## Inset and middle variants
```tsx
<Divider variant="inset" />   // indented from left — for list items with leading icons/avatars
<Divider variant="middle" />  // inset from both edges
```

## Accessibility
For purely decorative dividers, add `aria-hidden="true"`:
```tsx
<Divider aria-hidden="true" />
```

## Do not
- Do not use `sx={{ borderBottom: '1px solid ...' }}` to separate sections — use `<Divider />` instead
- Do not use `variant="inset"` outside list contexts
- Do not omit `flexItem` when using a vertical Divider inside a flex container
