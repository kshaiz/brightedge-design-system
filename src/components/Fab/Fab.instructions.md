# Fab — AI Instructions

> **Do not use this component unless the user explicitly asks for it.**
>
> FABs represent the single most important action on a screen. They are intentionally rare — most product surfaces should not have one. If a user requirement doesn't specifically call out a Floating Action Button, use a regular `Button` instead.

## When it is appropriate

Only use a FAB when all of the following are true:
- The action is the primary, screen-level action (not a section-level action)
- The action is constructive (create, add, compose) — not destructive or navigational
- The UI is a full-page canvas or feed where a persistent floating affordance genuinely helps

## Variants

| Variant | When to use |
|---|---|
| `circular` (default) | Icon-only; use when the action is universally understood (e.g. Add) |
| `extended` | Icon + label; use when the action needs labelling for clarity |

## Color

- `primary` (default) — use in all standard cases
- `secondary` — only when the surface already uses primary heavily and a distinct FAB is needed
- Do not use `default` or `inherit` unless overriding for a specific themed surface

## Size

- `large` (default) — standard FAB
- `medium` — use in compact layouts where a large FAB would overwhelm the content
- `small` — use only as a supporting secondary FAB alongside a large primary FAB

## Placement

- Position fixed to the bottom-right corner of the screen: `position: 'fixed', bottom: 24, right: 24`
- Never place a FAB inside a scrollable container or card

## Accessibility

- Always provide `aria-label` on `circular` variant (icon-only): `<Fab aria-label="Add item">`
- `extended` variant label text is sufficient — `aria-label` is optional

## Do not

- Do not use more than one FAB per screen
- Do not use FAB for navigation — use Bottom Navigation instead
- Do not use FAB for destructive actions
- Do not use FAB without an icon
