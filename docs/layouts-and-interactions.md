# UI Layout

## General Rules
- Use MUI `Box`, `Stack`, and `Grid2` for layout — no custom CSS grid/flexbox
- Page-level padding: `p: 3` on the outer `Box`
- Section spacing: `<Stack spacing={3}>` between major sections
- Card containers: `<Paper elevation={0} variant="outlined" sx={{ p: 3 }}>`

## Theme
- Always wrap generated pages in the BrightEdge `ThemeProvider`:

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@brightedge/design-system'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* page content */}
    </ThemeProvider>
  )
}
```

- Never hardcode color hex values — always use theme tokens:
  - `theme.palette.primary.main`
  - `theme.palette.text.secondary`
  - `theme.spacing(2)`
- In `sx` props use the shorthand: `color: 'primary.main'`, `bgcolor: 'background.paper'`

## Page Header Pattern
```tsx
<Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
  <Typography variant="h5">{title}</Typography>
  <Stack direction="row" spacing={1}>{/* actions */}</Stack>
</Stack>
```

## File Structure for Generated Pages
```
src/
  pages/
    FeatureName/
      FeaturePage.tsx       ← main page component
      components/           ← page-local components (not shared)
        FeatureTable.tsx
        FeatureFilters.tsx
      hooks/
        useFeatureData.ts   ← data fetching / business logic
      index.ts              ← re-exports FeaturePage
```
