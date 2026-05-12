# Menu — AI Instructions

## When to use
- Use `Menu` for a list of choices that appears on a temporary surface — typically triggered by an icon button (MoreVert, MoreHoriz) or a text button
- Use `MenuItem` for each row in the menu
- Use `MenuList` when you need a standalone list without the popover wrapper (e.g. inside a custom Popover)

## Basic usage — icon button trigger
```tsx
const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

<IconButton onClick={(e) => setAnchorEl(e.currentTarget)} aria-label="More options">
  <MoreVertIcon />
</IconButton>
<Menu
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={() => setAnchorEl(null)}
>
  <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
  <MenuItem onClick={() => setAnchorEl(null)}>Duplicate</MenuItem>
  <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
</Menu>
```

## With icons in items
```tsx
<MenuItem onClick={handleClose}>
  <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
  <ListItemText>Edit</ListItemText>
</MenuItem>
```

Import `ListItemIcon` and `ListItemText` from `@mui/material`.

## With keyboard shortcut
```tsx
<MenuItem>
  <ListItemText>Copy</ListItemText>
  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>⌘C</Typography>
</MenuItem>
```

## Dense
Use `dense` on `MenuList` (or pass `MenuProps.MenuListProps`) when space is tight:
```tsx
<Menu MenuListProps={{ dense: true }} open={...} anchorEl={...} onClose={...}>
  ...
</Menu>
```

## With divider
```tsx
<MenuItem onClick={handleClose}>Edit</MenuItem>
<MenuItem onClick={handleClose}>Duplicate</MenuItem>
<Divider />
<MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>Delete</MenuItem>
```

## Scrollable — max height
```tsx
<Menu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  slotProps={{ paper: { style: { maxHeight: 240 } } }}
>
  {items.map((item) => (
    <MenuItem key={item} onClick={handleClose}>{item}</MenuItem>
  ))}
</Menu>
```

## Disabled item
```tsx
<MenuItem disabled>Unavailable action</MenuItem>
```

## Do not
- Do not use Menu for navigation — use Tabs, Drawer, or a sidebar instead
- Do not put forms inside a Menu — use Popover or Dialog instead
- Do not use Menu for destructive confirmations — use Dialog instead
