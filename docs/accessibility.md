# Accessibility

## Interactive Elements
- All icon-only buttons must have `aria-label`
- All form fields must have an associated `<label>` or `aria-label`
- Avoid `onClick` on non-interactive elements (`div`, `span`) — use `<Button>` or `<IconButton>`

## Keyboard Navigation
- All interactive elements must be reachable via Tab
- Modals and dialogs must trap focus while open and return focus on close
- Use MUI `Dialog` — it handles focus trapping automatically

## Color & Contrast
- Never use color alone to convey meaning (e.g. red = error) — pair with an icon or text label
- Do not rely on `color="text.disabled"` for meaningful content

## Screen Readers
- Use `aria-live="polite"` for dynamically updated content (e.g. search results count)
- Data tables must have `aria-label` or `<caption>`
- Images that convey meaning need `alt` text; decorative images use `alt=""`

## Motion
- Respect `prefers-reduced-motion` — avoid auto-playing animations in custom components
