# Popover — AI Instructions

## When to use
- Use `Popover` for **interactive or rich content** triggered by a click — forms, menus, details panels
- Use `Tooltip` instead when the content is plain text with no interactive elements
- Good use cases: date pickers, filter forms, user profile cards, contextual help with links

## Basic usage
```tsx
const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open</Button>
<Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={() => setAnchorEl(null)}
>
  <Box sx={{ p: 2 }}>Popover content here.</Box>
</Popover>
```

## Positioning
The default anchor opens the popover **below and left-aligned** with the trigger element. Override with `anchorOrigin` and `transformOrigin`:

```tsx
// Open above the trigger, right-aligned
<Popover
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  ...
>
```

## With a form
```tsx
<Popover open={open} anchorEl={anchorEl} onClose={handleClose}>
  <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 280 }}>
    <FormLabel>Date range</FormLabel>
    <TextField placeholder="Start date" size="small" />
    <TextField placeholder="End date" size="small" />
    <Button variant="contained" onClick={handleClose}>Apply</Button>
  </Box>
</Popover>
```

## Do not
- Do not use Popover for plain text — use Tooltip instead
- Do not use Popover for destructive confirmations — use Dialog instead
- Do not stack multiple Popovers (nested overlays)
