# List — AI Instructions

## When to use
- Use `List` + `ListItem` for display-only content (read-only rows)
- Use `List` + `ListItemButton` for any actionable (clickable/selectable) rows — **never use a bare `ListItem` with an `onClick`**
- Use `ListSubheader` to group rows under a category label

## Display-only list
```tsx
<List>
  <ListItem>
    <ListItemIcon><InboxIcon /></ListItemIcon>
    <ListItemText primary="Inbox" secondary="Unread messages" />
  </ListItem>
  <ListItem>
    <ListItemIcon><DraftsIcon /></ListItemIcon>
    <ListItemText primary="Drafts" />
  </ListItem>
</List>
```

## Actionable list (use ListItemButton)
```tsx
const [selected, setSelected] = useState<number | null>(null)

<List>
  {items.map((item, i) => (
    <ListItemButton
      key={item.id}
      selected={selected === i}
      onClick={() => setSelected(i)}
    >
      <ListItemIcon><item.Icon /></ListItemIcon>
      <ListItemText primary={item.label} secondary={item.description} />
    </ListItemButton>
  ))}
</List>
```

## With secondary action (independent from row click)
```tsx
<List>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemText primary="Row with action" />
  </ListItem>
</List>
```

## Nested / collapsible list
```tsx
const [open, setOpen] = useState(true)

<List>
  <ListItemButton onClick={() => setOpen(!open)}>
    <ListItemIcon><InboxIcon /></ListItemIcon>
    <ListItemText primary="Inbox" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open} unmountOnExit>
    <List disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary="Starred" />
      </ListItemButton>
    </List>
  </Collapse>
</List>
```

## With subheaders
```tsx
<List subheader={<ListSubheader>Recent</ListSubheader>}>
  <ListItem>…</ListItem>
</List>
```

## Dense list
```tsx
<List dense>
  <ListItem><ListItemText primary="Dense item" /></ListItem>
</List>
```

## Avatar list
```tsx
<List>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar src="/photo.jpg" alt="Jane" />
    </ListItemAvatar>
    <ListItemText primary="Jane Smith" secondary="Last message preview…" />
  </ListItem>
</List>
```
Use `alignItems="flex-start"` on `ListItem` when secondary text is multi-line — keeps the avatar top-aligned.

## Do not
- Do not use `ListItem` with an `onClick` — use `ListItemButton` instead
- Do not use `ListItemButton` for display-only rows — reserve it for interactive items
- Do not add borders between items via `sx` — use `divider` prop on `ListItem`/`ListItemButton` instead, or place a `<Divider component="li" />` between items
