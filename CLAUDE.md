# BrightEdge Design System — AI Codegen Instructions

This file is read by Claude to generate UI from product requirements.
It lives in `@brightedge/design-system` and is included automatically when the package is installed.

Read the linked files below for the full rules before generating any UI.

---

## Detailed Guidelines

- [Component Guidelines](docs/component-guidelines.md)
- [UI Layout](docs/ui-layout.md)
- [Language & Tone](docs/language-and-tone.md)
- [Accessibility](docs/accessibility.md)

---

## Stack

- **React 18+ with TypeScript** — all components are functional, no class components
- **MUI v9** (`@mui/material`, `@mui/icons-material`) — primary UI component library
- **Highcharts v12** (`highcharts`, `highcharts-react-official`) — all charts
- **Design system package**: `@brightedge/design-system` — import from here first; fall back to MUI directly only if the component isn't wrapped yet

```ts
// Prefer this:
import { Button } from '@brightedge/design-system'

// Only if not wrapped yet:
import { Chip } from '@mui/material'
```

---

## Figma Code Connect

Each component in `src/components/` has a corresponding `ComponentName.figma.ts` file.
When adding a new component:
1. Create `ComponentName.figma.ts` alongside it
2. Map Figma property names to React prop values using `figma.enum()` and `figma.string()`
3. Run `npm run figma` to publish the mapping

---

## When Asked to Add Instructions

Before adding any new instruction, always ask the user which file it belongs in:

- `docs/component-guidelines.md` — how to use specific components (buttons, forms, tables, charts)
- `docs/ui-layout.md` — page structure, spacing, theme usage, file organization
- `docs/language-and-tone.md` — copy, labels, error messages, terminology
- `docs/accessibility.md` — ARIA, keyboard navigation, color, screen readers

Do not add instructions to `CLAUDE.md` itself unless they are meta-rules about how to work with this system.

---

## When Given Product Requirements

1. Identify the main entities (data objects the user acts on)
2. Identify the primary actions (CRUD, filter, export, etc.)
3. Map each requirement to a component: list → DataGrid, metric → Card + number, trend → LineChart
4. Generate the page following the rules in [UI Layout](docs/ui-layout.md) and [Component Guidelines](docs/component-guidelines.md)
5. Use placeholder data shaped like the real data (typed interfaces, not `any`)
6. Add a `// TODO:` comment where an API call or real data hook should be wired in

Do not generate backend code, API routes, or database schemas unless explicitly asked.
