# Badge — AI Instructions

## When to use
- Use `Badge` to surface a count or status indicator on top of another element (icon, avatar, button)
- Prefer `variant="dot"` when you only need to signal activity/presence without a count
- Use `color="error"` for notification counts that require urgent attention

## Basic usage
```tsx
<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
```

## Variants

### Standard (count)
```tsx
<Badge badgeContent={99} color="error">
  <NotificationsIcon />
</Badge>
```
Counts above `max` (default 99) render as `99+`. Override with `max={999}` for larger counts.

### Dot (presence indicator)
```tsx
<Badge variant="dot" color="success">
  <Avatar src="/photo.jpg" alt="Jane" />
</Badge>
```

## Colors
`primary` | `secondary` | `error` | `warning` | `info` | `success` | `default`

Use `error` for notification badges that need attention. Use `success` for online/active status dots.

## Overlap
- `overlap="rectangular"` (default) — for icons and rectangular elements
- `overlap="circular"` — for avatars and circular elements

```tsx
<Badge badgeContent={3} color="primary" overlap="circular">
  <Avatar src="/photo.jpg" alt="Jane" />
</Badge>
```

## Hiding the badge
```tsx
// Hide programmatically without unmounting
<Badge badgeContent={count} color="primary" invisible={count === 0}>
  <MailIcon />
</Badge>

// Show zero explicitly
<Badge badgeContent={0} color="primary" showZero>
  <MailIcon />
</Badge>
```

## Accessibility
Always ensure the parent element has an accessible label:
```tsx
<IconButton aria-label="4 new messages">
  <Badge badgeContent={4} color="error">
    <MailIcon />
  </Badge>
</IconButton>
```

## Do not
- Do not use Badge without a child element — it must wrap something
- Do not use `color="default"` for important alerts — it lacks visual salience
