# Button — AI Instructions

## When to use
- Use `Button` for any user-triggered action
- Use `IconButton` for icon-only actions in toolbars or compact contexts

## Variant rules
- **`contained`** — primary action only; maximum one per section
- **`outlined`** — secondary or cancel actions
- **`text`** — tertiary actions, never for primary actions

## Props
- Always set `disableElevation` on `variant="contained"`
- Destructive actions: `variant="contained" color="error"`
- Always provide an accessible label — button text must describe the action

## Label copy
- Use verbs: "Save", "Export", "Delete" — not "OK", "Yes", or "Submit"
- Keep labels short (1–3 words)

## Do not
- Do not place two `variant="contained"` buttons in the same section
- Do not use `onClick` on non-button elements — always use this component
