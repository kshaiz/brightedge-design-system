# Avatar — AI Instructions

## When to use
- Use `Avatar` to represent a user or entity with an image, initials, or icon fallback
- Use `AvatarGroup` to display a compact stack of multiple avatars (e.g. team members, collaborators)

## Sizes
Available sizes: `18 | 24 | 32 | 40` (default `40`). Pass as the `size` prop — do not set width/height manually via `sx`.

```tsx
<Avatar size={32} src="/photo.jpg" alt="Jane Smith" />
```

## Variants
- `variant="circular"` (default) — user avatars, profile pictures
- `variant="rounded"` — brand logos, workspace icons
- `variant="square"` — file or content thumbnails

## Content types

### Image
```tsx
<Avatar src="/photo.jpg" alt="Jane Smith" />
```
Always provide `alt` for screen readers. If the image fails to load, MUI falls back to the first letter of `alt`, then to the generic person icon.

### Initials
```tsx
<Avatar>JS</Avatar>
```
Use 1–2 characters. Pair with a background color via `sx={{ bgcolor: 'primary.main' }}` for visual distinction.

### Icon
```tsx
<Avatar sx={{ bgcolor: 'secondary.main' }}>
  <FolderIcon />
</Avatar>
```

## AvatarGroup
```tsx
<AvatarGroup max={4} size={32}>
  <Avatar src="/a.jpg" alt="Alice" />
  <Avatar src="/b.jpg" alt="Bob" />
  <Avatar src="/c.jpg" alt="Carol" />
  <Avatar src="/d.jpg" alt="Dave" />
  <Avatar src="/e.jpg" alt="Eve" />
</AvatarGroup>
```

- Set `max` to limit visible avatars — surplus is shown as `+N`
- Pass `size` on `AvatarGroup`, not on individual child Avatars — it propagates via CSS
- Use `spacing="small"` for tighter overlap in dense layouts

## Do not
- Do not mix sizes within an AvatarGroup — set size on the group, not individual children
- Do not use more than 2 characters for initials
- Do not omit `alt` on image avatars
