# ToggleButton — AI Instructions

## When to use
- Use `ToggleButton` (standalone) for a single on/off control where the visual state matters more than a Checkbox — e.g. mute, pin, bold, favorite
- Use `ToggleButtonGroup` for a set of mutually exclusive choices (exclusive) or independently selectable options (multi)
- Prefer ToggleButtonGroup over a row of Checkboxes when the options are tightly coupled and visually grouped (e.g. text alignment, view mode, filter facets)

## Standalone ToggleButton
```tsx
const [selected, setSelected] = useState(false)
<ToggleButton value="mute" selected={selected} onChange={() => setSelected(!selected)} aria-label="Mute">
  <VolumeOffIcon />
</ToggleButton>
```

Always provide `aria-label` for icon-only buttons. The `value` prop is required by MUI but only meaningful in a group — use a descriptive string regardless.

## ToggleButtonGroup — exclusive (one selection at a time)
```tsx
const [view, setView] = useState('list')
<ToggleButtonGroup
  exclusive
  value={view}
  onChange={(_, v) => { if (v !== null) setView(v) }}
  buttons={[
    { value: 'list', icon: <ListIcon />, 'aria-label': 'List view' },
    { value: 'grid', icon: <GridViewIcon />, 'aria-label': 'Grid view' },
    { value: 'chart', icon: <BarChartIcon />, 'aria-label': 'Chart view' },
  ]}
/>
```

Guard against `null` in `onChange` — MUI fires `null` when the user clicks the already-selected button. Prevent deselection by ignoring `null` if a value must always be selected.

## ToggleButtonGroup — multiple selection
```tsx
const [formats, setFormats] = useState<string[]>(['bold'])
<ToggleButtonGroup
  value={formats}
  onChange={(_, v) => setFormats(v)}
  buttons={[
    { value: 'bold', icon: <FormatBoldIcon />, 'aria-label': 'Bold' },
    { value: 'italic', icon: <FormatItalicIcon />, 'aria-label': 'Italic' },
    { value: 'underline', icon: <FormatUnderlinedIcon />, 'aria-label': 'Underline' },
  ]}
/>
```

## Overflow — more than 4 buttons
When more than 4 buttons are needed, the group automatically collapses items 4+ into a MoreVert (⋮) overflow menu. The overflow button highlights when any hidden item is selected. This matches the ButtonGroup overflow behaviour.

```tsx
<ToggleButtonGroup
  exclusive
  value={alignment}
  onChange={(_, v) => { if (v) setAlignment(v) }}
  buttons={[
    { value: 'left',    icon: <FormatAlignLeftIcon />,    'aria-label': 'Left' },
    { value: 'center',  icon: <FormatAlignCenterIcon />,  'aria-label': 'Center' },
    { value: 'right',   icon: <FormatAlignRightIcon />,   'aria-label': 'Right' },
    { value: 'justify', icon: <FormatAlignJustifyIcon />, 'aria-label': 'Justify' },
    { value: 'indent',  icon: <FormatIndentIncreaseIcon />, 'aria-label': 'Indent' },
  ]}
/>
```

## Size
- `size="medium"` (default) — standard touch target
- `size="small"` — dense layouts (toolbars, compact panels)
- `size="large"` — prominent controls, touch-first interfaces

## Color
Default is `primary`. Use `secondary` for secondary controls. Avoid `standard` (no colour on selection) — it makes the selected state hard to distinguish at a glance.

## Orientation
Use `orientation="vertical"` for sidebar or panel controls where horizontal space is limited.

## Do not
- Do not use more than 4 buttons without relying on the built-in overflow
- Do not use text-only buttons without icons when space is a concern — icon + label is fine, icon-only with `aria-label` is preferred in toolbars
- Do not omit `aria-label` on icon-only buttons
- Do not use `ToggleButtonGroup` for navigation — use Tabs instead
