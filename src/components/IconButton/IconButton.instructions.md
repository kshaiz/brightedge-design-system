# IconButton — AI Instructions

## When to use
- Use `IconButton` for icon-only actions in toolbars, app bars, table rows, or compact layouts
- Use `Button` with `startIcon` instead when the action needs a visible text label

## Color rules
- **`primary`** — default for all standard actions
- **`error`** — destructive actions (delete, remove, clear)
- **`default`** — when the button sits on a colored or dark surface and should not carry semantic color
- **`secondary`** — only when explicitly specified; do not use by default

## Size rules
- **`medium`** — default for all contexts
- **`small`** — use inside table rows, dense lists, or compact toolbars
- **`large`** — use only when explicitly specified

## Accessibility
- `aria-label` is required on every `IconButton` — it is enforced in the component type
- The label must describe the action, not the icon: `aria-label="Delete keyword"` not `aria-label="trash icon"`
- Wrap in `Tooltip` to surface the label visually on hover

## Loading state
- Use the `loading` prop to disable interaction and show a spinner during async operations

## Edge alignment
- Use `edge="start"` or `edge="end"` when the button is the first or last item in a toolbar row — this removes the outer margin to keep it visually flush

## Do not
- Do not omit `aria-label`
- Do not use `color="secondary"` unless the designer or user has explicitly specified it
- Do not use `IconButton` for primary page-level actions — those need a labelled `Button`
