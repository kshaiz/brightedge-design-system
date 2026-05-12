# Drawer — AI Instructions

## When to use
- Use `Drawer` to show **additional details of a line item** or to present forms without leaving the current page
- Always opens from the **right side** — never left, top, or bottom
- Almost always pair with a `Backdrop` (handled automatically by `variant="temporary"`)
- Close on backdrop click and on pressing Escape

## Basic usage
```tsx
<Drawer open={open} onClose={() => setOpen(false)}>
  <Box sx={{ width: 480, p: 3 }}>
    Drawer content here.
  </Box>
</Drawer>
```

The default `anchor="right"` and `variant="temporary"` are already set — do not override unless there is a strong reason.

## With a header
```tsx
<Drawer open={open} onClose={handleClose}>
  <Box sx={{ width: 480 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant="h6">Record details</Typography>
      <IconButton onClick={handleClose} aria-label="Close drawer">
        <CloseIcon />
      </IconButton>
    </Box>
    <Box sx={{ p: 3 }}>
      Content here.
    </Box>
  </Box>
</Drawer>
```

## Width guidance
- Detail panels: 480px
- Forms: 480–560px
- Complex workflows: 640px max

## Do not
- Do not use `anchor` other than `"right"`
- Do not use `variant="persistent"` or `variant="permanent"` unless building a persistent sidebar — use `temporary` (default) for detail views and forms
- Do not put primary navigation in a temporary drawer
