# Component Checklist

Track progress for each component: **G** = Guidelines · **F** = Figma Code Connect · **S** = Storybook

For each component, share:
- The MUI documentation page (variants)
- The MUI API page (props)

Legend: ✅ done · 🚧 in progress · ⬜ not started

---

## Inputs

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Autocomplete | ⬜ | ⬜ | ⬜ |
| Button | ⬜ | ⬜ | ⬜ |
| Button Group | ⬜ | ⬜ | ⬜ |
| Checkbox | ⬜ | ⬜ | ⬜ |
| Floating Action Button | ⬜ | ⬜ | ⬜ |
| Number Field | ⬜ | ⬜ | ⬜ |
| Radio Group | ⬜ | ⬜ | ⬜ |
| Rating | ⬜ | ⬜ | ⬜ |
| Select | ⬜ | ⬜ | ⬜ |
| Slider | ⬜ | ⬜ | ⬜ |
| Switch | ⬜ | ⬜ | ⬜ |
| Text Field | ⬜ | ⬜ | ⬜ |
| Transfer List | ⬜ | ⬜ | ⬜ |
| Toggle Button | ⬜ | ⬜ | ⬜ |

## Data Display

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Avatar | ⬜ | ⬜ | ⬜ |
| Badge | ⬜ | ⬜ | ⬜ |
| Chip | ⬜ | ⬜ | ⬜ |
| Divider | ⬜ | ⬜ | ⬜ |
| Icons | ⬜ | ⬜ | ⬜ |
| List | ⬜ | ⬜ | ⬜ |
| Table | ⬜ | ⬜ | ⬜ |
| Tooltip | ⬜ | ⬜ | ⬜ |
| Typography | ⬜ | ⬜ | ⬜ |

## Feedback

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Alert | ⬜ | ⬜ | ⬜ |
| Backdrop | ⬜ | ⬜ | ⬜ |
| Dialog | ⬜ | ⬜ | ⬜ |
| Progress | ⬜ | ⬜ | ⬜ |
| Skeleton | ⬜ | ⬜ | ⬜ |
| Snackbar | ⬜ | ⬜ | ⬜ |

## Surfaces

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Accordion | ⬜ | ⬜ | ⬜ |
| App Bar | ⬜ | ⬜ | ⬜ |
| Card | ⬜ | ⬜ | ⬜ |
| Paper | ⬜ | ⬜ | ⬜ |

## Navigation

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Bottom Navigation | ⬜ | ⬜ | ⬜ |
| Breadcrumbs | ⬜ | ⬜ | ⬜ |
| Drawer | ⬜ | ⬜ | ⬜ |
| Link | ⬜ | ⬜ | ⬜ |
| Menu | ⬜ | ⬜ | ⬜ |
| Menubar | ⬜ | ⬜ | ⬜ |
| Pagination | ⬜ | ⬜ | ⬜ |
| Speed Dial | ⬜ | ⬜ | ⬜ |
| Stepper | ⬜ | ⬜ | ⬜ |
| Tabs | ⬜ | ⬜ | ⬜ |

## Layout

| Component | Guidelines | Figma Connect | Storybook |
|---|---|---|---|
| Box | ⬜ | ⬜ | ⬜ |
| Container | ⬜ | ⬜ | ⬜ |
| Grid | ⬜ | ⬜ | ⬜ |
| Stack | ⬜ | ⬜ | ⬜ |
| Image List | ⬜ | ⬜ | ⬜ |

---

## Publishing (address after all components are done)

| Step | Status |
|---|---|
| Add `publishConfig` to `package.json` pointing to GitHub Packages | ⬜ |
| Create GitHub Personal Access Token with `write:packages` scope | ⬜ |
| Configure `~/.npmrc` with auth token | ⬜ |
| Run `npm run build` and verify `dist/` output | ⬜ |
| Run `npm publish` to publish to GitHub Packages | ⬜ |
| Document `.npmrc` setup for consuming projects | ⬜ |
| Set up GitHub Actions workflow to auto-publish on version tag | ⬜ |
