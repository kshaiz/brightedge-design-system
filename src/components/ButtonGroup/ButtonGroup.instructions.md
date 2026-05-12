# ButtonGroup — AI Instructions

## When to use

Use ButtonGroup to group 2–4 closely related actions that share the same variant and color. If actions are unrelated or differ in emphasis, use separate Buttons instead.

## Overflow rule

- **Maximum 4 buttons** visible at once
- When more than 4 buttons are provided, the first 3 are shown inline and the rest collapse into a **MoreVert (⋮) icon button** at the end
- Clicking the MoreVert button opens a Menu listing the hidden actions

## Variant rules

| Situation | Variant | Color |
|---|---|---|
| Primary grouped actions | `contained` | `primary` |
| Secondary grouped actions | `outlined` | `primary` |
| Low-emphasis grouped actions | `text` | `primary` |

- Default is `variant="outlined" color="primary"`
- All buttons in a group share the same variant and color — do not mix

## Orientation

- `horizontal` (default) — left-to-right row
- `vertical` — stacked column; only use when horizontal space is very limited

## Size

- `medium` — default
- `small` — use inside tables or compact layouts only

## Do not

- Do not use more than 4 visible buttons without the overflow mechanism
- Do not mix variants or colors within a single group
- Do not use ButtonGroup for a single button — use Button instead
- Do not use for navigation — use Tabs or ToggleButtonGroup instead
