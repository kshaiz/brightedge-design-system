# Breadcrumbs — AI Instructions

## When to use
- Use `Breadcrumbs` to show the user's current location within a hierarchical page structure
- Always place breadcrumbs at the top of the page content, above the page title
- Do not use breadcrumbs on top-level pages (home, dashboard root) where there is no parent context

## Basic usage
```tsx
<Breadcrumbs aria-label="breadcrumb">
  <Link href="/dashboard">Dashboard</Link>
  <Link href="/dashboard/reports">Reports</Link>
  <Typography color="text.primary">Keyword Gap</Typography>
</Breadcrumbs>
```

The last item (current page) should always be plain `Typography`, not a link.

## With icons
```tsx
<Breadcrumbs aria-label="breadcrumb">
  <Link href="/" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    <HomeIcon fontSize="small" />
    Home
  </Link>
  <Link href="/reports">Reports</Link>
  <Typography color="text.primary">Overview</Typography>
</Breadcrumbs>
```

## Collapsed (long paths)
```tsx
<Breadcrumbs maxItems={3} aria-label="breadcrumb">
  <Link href="/">Home</Link>
  <Link href="/category">Category</Link>
  <Link href="/category/sub">Sub-category</Link>
  <Link href="/category/sub/detail">Detail</Link>
  <Typography color="text.primary">Current page</Typography>
</Breadcrumbs>
```

MUI automatically collapses items beyond `maxItems` and shows an expand button.

## Custom separator
```tsx
<Breadcrumbs separator={<ChevronRightIcon fontSize="small" />} aria-label="breadcrumb">
  ...
</Breadcrumbs>
```

## Do not
- Do not link the last (current page) breadcrumb item
- Do not omit `aria-label="breadcrumb"` on the Breadcrumbs element
- Do not use breadcrumbs as a substitute for tab or sidebar navigation
