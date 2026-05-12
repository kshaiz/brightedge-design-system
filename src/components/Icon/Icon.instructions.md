# Icon — AI Instructions

## When to use
- Use MUI icons from `@mui/icons-material` for all iconography unless a custom icon is explicitly specified
- Icons are React components — import individually to keep bundle size small

## Import pattern
```tsx
import SearchIcon from '@mui/icons-material/Search'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
```
Do **not** import from the barrel (`@mui/icons-material`) — it imports the entire icon set.

## Size
Default is `medium` (24×24px). Pass `fontSize` to change:

```tsx
<SearchIcon />                        // medium — 24px (default)
<SearchIcon fontSize="small" />       // 20px
<SearchIcon fontSize="large" />       // 35px
<SearchIcon fontSize="inherit" />     // scales with surrounding text
```

Always use `fontSize="medium"` unless there is a layout reason to change size.

## Color
Icons inherit `color: currentColor` from their parent. To apply a theme color:

```tsx
<SearchIcon color="primary" />
<SearchIcon color="error" />
<SearchIcon color="action" />         // rgba(0,0,0,0.54) — default icon tone
<SearchIcon color="disabled" />
```

For arbitrary colors, use `sx`:
```tsx
<SearchIcon sx={{ color: 'text.secondary' }} />
```

## Inside buttons
Pass icons as children to `IconButton` or `Button` — do not wrap in an extra element:

```tsx
<IconButton aria-label="Search">
  <SearchIcon />
</IconButton>

<Button startIcon={<AddIcon />}>Add item</Button>
```

## Custom SVG icons
Only when a custom icon is explicitly requested — use `SvgIcon` from this design system as the base:

```tsx
import { SvgIcon } from '@brightedge/design-system'

function CustomIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}
```

## Do not
- Do not use emoji or unicode characters as icons
- Do not import from `@mui/icons-material` barrel — always use the individual file path
- Do not hardcode pixel sizes via `sx={{ fontSize: '24px' }}` — use the `fontSize` prop instead
- Do not use custom icon libraries (Heroicons, Feather, etc.) unless explicitly specified
