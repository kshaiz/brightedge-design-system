# Link — AI Instructions

## When to use
- Use `Link` for navigating to another page, section, or external URL
- For actions that don't navigate (e.g. open a dialog), use `Button variant="text"` instead

## Default style
Links use a **dashed underline** at rest that becomes a **solid underline** on hover. This is the BrightEdge standard — do not override `textDecorationStyle` unless explicitly requested.

```tsx
<Link href="/reports">View reports</Link>
```

## External links — always add the icon
When a link opens in a new tab, pass `external` or `target="_blank"`. The `OpenInNewOutlinedIcon` is added automatically.

```tsx
<Link href="https://example.com" external>
  External resource
</Link>
```

Do **not** add the icon manually — the `external` prop handles it.

## Color variants
```tsx
// Default — uses primary color
<Link href="#">Primary link</Link>

// Inherit — adopts the surrounding text color
<Link href="#" color="inherit">Inherit color link</Link>
```

## Underline variants
```tsx
<Link href="#" underline="always">Always underlined (default)</Link>
<Link href="#" underline="hover">Underline on hover only</Link>
<Link href="#" underline="none">No underline</Link>
```

## In body text
```tsx
<Typography>
  Read the <Link href="/docs">full documentation</Link> for details.
</Typography>
```

## Do not
- Do not use `Link` for buttons — use `Button variant="text"` for click actions
- Do not manually add `OpenInNewOutlinedIcon` — use the `external` prop instead
- Do not omit `rel="noopener noreferrer"` on external links — the `external` prop sets it automatically
