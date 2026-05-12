# Button — AI Instructions

## When to use each variant

| Situation | Variant | Color |
|---|---|---|
| Primary action (one per section) | `contained` | `primary` |
| Secondary but important action | `contained` | `secondary` |
| All other actions | `outlined` | `primary` |
| Destructive actions | `contained` | `error` |
| Low-emphasis actions (Back, Cancel, etc.) | `text` | `primary` |

## Size rules
- **`medium`** — default for all contexts
- **`small`** — use inside tables or dense/compact layouts only
- **`large`** — use only when explicitly specified

## Key rules
- Only **one** `variant="contained" color="primary"` button per section
- Always set `disableElevation` on `variant="contained"`
- Button labels are verbs: "Save", "Export", "Delete" — not "OK", "Yes", or "Submit"
- Keep labels short (1–3 words)

## Icons
- Use `startIcon` for action-indicating icons (e.g. `<AddIcon />` before "Add keyword")
- Use `endIcon` for directional icons (e.g. `<ArrowForwardIcon />` after "Next")
- Import icons from `@mui/icons-material`

## Loading state
- Use the `loading` prop to disable interaction and show a spinner during async operations
- `loadingPosition` defaults to `"start"` automatically — do not set it unless overriding
- Always pass a `startIcon` when using `loading` so the spinner has a position to anchor to
- The Figma "Loading Button" component maps to this same `Button` — there is no separate component

## Do not
- Do not use `variant="text"` for primary or secondary actions
- Do not place two `variant="contained"` buttons of the same color in the same section
- Do not use `onClick` on non-button elements — always use this component
- Do not use `fullWidth` outside of forms or mobile layouts
