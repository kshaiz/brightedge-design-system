# UI Layout

## Layout Primitives — Which to Use

| Need | Use |
|---|---|
| Constrain page content to a max-width with horizontal centering | `Container` |
| Arrange children with uniform spacing | `Stack` |
| Ad-hoc `sx` styling on a plain wrapper (last resort) | `Box` |
| Elevated or outlined surface | `Paper` or `Card` |

**Default to `Container` for page sections. Default to `Stack` for spacing children. Reach for `Box` only when none of the above fit.**

Never use `Box` just to add margin or gap between children — that is what `Stack` is for.

## Spacing Scale

Use MUI spacing units (1 unit = 8px). Always use one of these values — no arbitrary numbers:

| Value | px | When to use |
|---|---|---|
| 0.5 | 4px | Tight inline elements (icon + label) |
| 1 | 8px | Related items within a group |
| 2 | 16px | Items within a section |
| 4 | 32px | Between sections |
| 8 | 64px | Between major page blocks |

## General Rules
- In MUI v9, all layout props (`alignItems`, `justifyContent`, `flexWrap`, `fontWeight`, etc.) must go inside the `sx` prop — they are not accepted as direct props on `Stack`, `Box`, or `Typography`

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

## Page Layout Pattern

```tsx
<Container maxWidth="lg">
  <Stack spacing={4}>
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h5">{title}</Typography>
      <Stack direction="row" spacing={1}>{/* actions */}</Stack>
    </Stack>
    <ContentSection />
    <AnotherSection />
  </Stack>
</Container>
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
