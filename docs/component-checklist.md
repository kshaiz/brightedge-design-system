# Component Checklist

Track progress for each component: **G** = Guidelines · **F** = Figma Code Connect · **S** = Storybook · **P** = Figma props confirmed by user

Legend: ✅ done · 🚧 in progress · ⬜ not started

---

## Inputs

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Autocomplete | ✅ | ✅ | ✅ | ⬜ |
| Button | ✅ | ✅ | ✅ | ⬜ |
| Button Group | ✅ | ✅ | ✅ | ⬜ |
| Checkbox | ✅ | ✅ | ✅ | ⬜ |
| Floating Action Button | ✅ | ✅ | ✅ | ⬜ |
| IconButton | ✅ | ✅ | ✅ | ⬜ |
| Radio Group | ✅ | ✅ | ✅ | ⬜ |
| Rating | ✅ | ✅ | ✅ | ⬜ |
| Select | ✅ | ✅ | ✅ | ⬜ |
| Slider | ✅ | ✅ | ✅ | ⬜ |
| Switch | ✅ | ✅ | ✅ | ⬜ |
| Text Field | ✅ | ✅ | ✅ | ⬜ |
| Toggle Button | ✅ | ✅ | ✅ | ⬜ |
| Number Field | ⬜ | ⬜ | ⬜ | ⬜ |
| Transfer List | ⬜ | ⬜ | ⬜ | ⬜ |

## Data Display

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Avatar | ✅ | ✅ | ✅ | ⬜ |
| Badge | ✅ | ✅ | ✅ | ⬜ |
| Chip | ✅ | ✅ | ✅ | ⬜ |
| Divider | ✅ | ✅ | ✅ | ⬜ |
| Icons | ✅ | ✅ | ✅ | ⬜ |
| List | ✅ | ✅ | ✅ | ⬜ |
| Tooltip | ✅ | ✅ | ✅ | ⬜ |
| Typography | ✅ | ✅ | ✅ | ⬜ |
| Table | ⬜ | ⬜ | ⬜ | ⬜ |

## Feedback

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Alert | ✅ | ✅ | ✅ | ⬜ |
| Backdrop | ✅ | ✅ | ✅ | ⬜ |
| Dialog | ✅ | ✅ | ✅ | ⬜ |
| Progress | ✅ | ✅ | ✅ | ⬜ |
| Skeleton | ✅ | ✅ | ✅ | ⬜ |
| Snackbar | ✅ | ⬜ | ✅ | ⬜ |

## Surfaces

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Accordion | ✅ | ✅ | ✅ | ⬜ |
| App Bar | ⬜ | ⬜ | ⬜ | ⬜ |
| Card | ⬜ | ⬜ | ⬜ | ⬜ |
| Paper | ⬜ | ⬜ | ⬜ | ⬜ |

## Navigation

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Bottom Navigation | ⬜ | ⬜ | ⬜ | ⬜ |
| Breadcrumbs | ⬜ | ⬜ | ⬜ | ⬜ |
| Drawer | ⬜ | ⬜ | ⬜ | ⬜ |
| Link | ⬜ | ⬜ | ⬜ | ⬜ |
| Menu | ⬜ | ⬜ | ⬜ | ⬜ |
| Menubar | ⬜ | ⬜ | ⬜ | ⬜ |
| Pagination | ⬜ | ⬜ | ⬜ | ⬜ |
| Speed Dial | ⬜ | ⬜ | ⬜ | ⬜ |
| Stepper | ⬜ | ⬜ | ⬜ | ⬜ |
| Tabs | ⬜ | ⬜ | ⬜ | ⬜ |

## Layout

| Component | Guidelines | Figma Connect | Storybook | Props ✓ |
|---|---|---|---|---|
| Box | ⬜ | ⬜ | ⬜ | ⬜ |
| Container | ⬜ | ⬜ | ⬜ | ⬜ |
| Grid | ⬜ | ⬜ | ⬜ | ⬜ |
| Stack | ⬜ | ⬜ | ⬜ | ⬜ |
| Image List | ⬜ | ⬜ | ⬜ | ⬜ |

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
