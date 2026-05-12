# BrightEdge Design System — AI Codegen Instructions

This file is read by Claude to generate UI from product requirements.
It lives in `@brightedge/design-system` and is included automatically when the package is installed.

Read the linked files below for the full rules before generating any UI.

---

## Detailed Guidelines

- [Component Guidelines](docs/components.md)
- [UI Layout](docs/layouts-and-interactions.md)
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

Each component in `src/components/` has a corresponding `ComponentName.figma.tsx` file.
When adding a new component:
1. Create `ComponentName.figma.tsx` alongside it
2. Map Figma property names to React prop values using `figma.enum()` and `figma.string()`
3. Run `npm run figma` to publish the mapping

---

## When Documenting a Component

When working through the component checklist, for each component:
1. Fetch the MUI documentation page and identify all variants shown (exclude any Customization sections)
2. Ensure every variant has a corresponding Storybook story
3. Write `ComponentName.instructions.md` with BrightEdge-specific rules for that component
4. Create `ComponentName.figma.tsx` with the Figma Code Connect mapping
5. Add a reference to the instructions file in `docs/components.md`
6. Mark all three columns (Guidelines, Figma Connect, Storybook) as ✅ in `docs/component-checklist.md`

---

## When Asked to Add Instructions

Before adding any new instruction, always ask the user which file it belongs in:

- `docs/components.md` — how to use specific components (buttons, forms, tables, charts)
- `docs/layouts-and-interactions.md` — page structure, spacing, theme usage, file organization
- `docs/language-and-tone.md` — copy, labels, error messages, terminology
- `docs/accessibility.md` — ARIA, keyboard navigation, color, screen readers

Do not add instructions to `CLAUDE.md` itself unless they are meta-rules about how to work with this system.

---

## When Given Product Requirements

1. Identify the main entities (data objects the user acts on)
2. Identify the primary actions (CRUD, filter, export, etc.)
3. Map each requirement to a component: list → DataGrid, metric → Card + number, trend → LineChart
4. Generate the page following the rules in [UI Layout](docs/layouts-and-interactions.md) and [Component Guidelines](docs/components.md)
5. Use placeholder data shaped like the real data (typed interfaces, not `any`)
6. Add a `// TODO:` comment where an API call or real data hook should be wired in

Do not generate backend code, API routes, or database schemas unless explicitly asked.
