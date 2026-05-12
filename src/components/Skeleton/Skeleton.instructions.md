# Skeleton — AI Instructions

## When to use
- Use `Skeleton` as a placeholder while content is loading to reduce perceived load time
- Match the skeleton shape and size as closely as possible to the real content it will replace
- Prefer skeletons over spinners for content-heavy areas (cards, lists, tables)

## Variants

```tsx
// Text — default; matches line height of surrounding text
<Skeleton variant="text" sx={{ fontSize: '1rem' }} />

// Circular — avatars, icons
<Skeleton variant="circular" width={40} height={40} />

// Rectangular — images, cards, charts
<Skeleton variant="rectangular" width={320} height={200} />

// Rounded — chips, buttons, tags
<Skeleton variant="rounded" width={80} height={32} />
```

## Sizing
Always set explicit `width` and `height` for circular and rectangular variants. For text, set `sx={{ fontSize }}` to match the real typography variant:

```tsx
<Skeleton variant="text" sx={{ fontSize: '2rem' }} />  // matches h5
<Skeleton variant="text" sx={{ fontSize: '1rem' }} />  // matches body1
<Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />  // matches body2
```

## Conditional render — swap skeleton for real content
```tsx
{loading ? (
  <Skeleton variant="rectangular" width={320} height={200} />
) : (
  <img src={src} alt={alt} width={320} height={200} />
)}
```

## Card loading pattern
```tsx
<Card sx={{ maxWidth: 360 }}>
  <Skeleton variant="rectangular" height={200} />
  <CardContent>
    <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '0.875rem', width: '60%' }} />
  </CardContent>
</Card>
```

## List loading pattern
```tsx
<List>
  {Array.from({ length: 4 }).map((_, i) => (
    <ListItem key={i}>
      <ListItemAvatar>
        <Skeleton variant="circular" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={<Skeleton variant="text" sx={{ fontSize: '1rem' }} />}
        secondary={<Skeleton variant="text" sx={{ fontSize: '0.875rem', width: '60%' }} />}
      />
    </ListItem>
  ))}
</List>
```

## Animation
- `animation="pulse"` (default) — subtle opacity fade; use for most cases
- `animation="wave"` — sweeping highlight; use when pulse feels too static
- `animation={false}` — no animation; use when reduced motion is preferred

## Do not
- Do not use skeleton for real-time updates (live data changing every few seconds) — use a spinner instead
- Do not use skeleton for operations under ~300ms — the flash is more disruptive than helpful
- Do not set arbitrary sizes — match the real component dimensions exactly
