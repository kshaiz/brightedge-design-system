# Typography — AI Instructions

## When to use
- Use `Typography` for all text rendering — do not use raw `<p>`, `<h1>`–`<h6>`, `<span>` HTML elements
- Default is `variant="body1"` with `color="text.primary"`

## Variant reference

| Variant | Size | Weight | Use for |
|---|---|---|---|
| `h1` | 96px | Light (300) | Hero / marketing only — rarely used in app UI |
| `h2` | 60px | Light (300) | Page-level section titles in very spacious layouts |
| `h3` | 48px | Regular (400) | Major page sections |
| `h4` | 32px | Regular (400) | Page headings, dialog titles |
| `h5` | 24px | Regular (400) | Card headings, section headings |
| `h6` | 20px | Medium (500) | Sub-section labels, sidebar headings |
| `subtitle1` | 16px | Regular (400) | Supporting text below a heading |
| `subtitle2` | 14px | Medium (500) | Secondary labels |
| `body1` | 16px | Regular (400) | **Default** — all body copy |
| `body2` | 14px | Regular (400) | Dense body text, helper text |
| `caption` | 12px | Regular (400) | Metadata, timestamps, fine print |
| `overline` | 12px | Regular (400) | Category labels, uppercase section markers |

## Heading hierarchy — do not skip levels

Always use heading levels sequentially within a page or section. The first heading on a page should be `h4` or `h5` for typical app UI (not `h1`/`h2` which are for marketing pages).

```tsx
// ✅ Correct — sequential
<Typography variant="h4">Page Title</Typography>
<Typography variant="h5">Section</Typography>
<Typography variant="h6">Sub-section</Typography>

// ❌ Wrong — skips from h4 to h6
<Typography variant="h4">Page Title</Typography>
<Typography variant="h6">Sub-section</Typography>
```

The semantic HTML element rendered follows the variant by default (`h4` → `<h4>`, `body1` → `<p>`). To decouple visual style from semantics, use `component`:

```tsx
// Render h2 visually but output a <h1> in HTML (e.g. only one h1 per page)
<Typography variant="h2" component="h1">Page Title</Typography>
```

## Colors

```tsx
<Typography color="text.primary">Default body text</Typography>
<Typography color="text.secondary">Subdued / helper text</Typography>
<Typography color="text.disabled">Disabled state</Typography>
<Typography color="error">Error message</Typography>
<Typography color="primary">Brand-colored label</Typography>
```

## Common patterns

### Page header
```tsx
<Typography variant="h4">Reports</Typography>
<Typography variant="body2" color="text.secondary">
  Showing data for the last 30 days
</Typography>
```

### Card header
```tsx
<Typography variant="h5">Keyword Rankings</Typography>
<Typography variant="subtitle1" color="text.secondary">
  Tracked across all your domains
</Typography>
```

### Metadata / label
```tsx
<Typography variant="caption" color="text.secondary">
  Last updated 5 minutes ago
</Typography>
```

### No-wrap with ellipsis
```tsx
<Typography noWrap sx={{ maxWidth: 200 }}>
  Very long text that will be truncated with an ellipsis
</Typography>
```

## Do not
- Do not use raw `<p>`, `<h1>`–`<h6>`, `<span>` — always use `<Typography>`
- Do not skip heading levels (e.g. `h4` → `h6`)
- Do not use `h1` or `h2` for standard app UI — reserve them for marketing/hero contexts
- Do not set `color` via `sx={{ color: '...' }}` — use the `color` prop instead
