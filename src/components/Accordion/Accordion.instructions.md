# Accordion — AI Instructions

## When to use
- Use `Accordion` for **optional settings or supplementary information** that most users won't always need — collapsing it keeps the primary UI clean
- Good use cases: advanced filter options, optional configuration panels, help/FAQ sections, secondary metadata
- Prefer accordion over tabs when sections can meaningfully coexist (user may need to compare two open panels)
- Do not use accordion for primary navigation or content that most users need to see immediately

## Basic usage
```tsx
<Accordion>
  <AccordionSummary id="panel1-header" aria-controls="panel1-content">
    Section title
  </AccordionSummary>
  <AccordionDetails id="panel1-content">
    Content revealed on expand.
  </AccordionDetails>
</Accordion>
```

Always pair `id` on `AccordionSummary` with `aria-controls` on the same element pointing to the `AccordionDetails` id. This is required for accessibility.

## Default expanded
```tsx
<Accordion defaultExpanded>
  <AccordionSummary id="panel1-header" aria-controls="panel1-content">
    Open by default
  </AccordionSummary>
  <AccordionDetails id="panel1-content">Content</AccordionDetails>
</Accordion>
```

## Controlled — only one panel open at a time
```tsx
const [expanded, setExpanded] = useState<string | false>(false)

const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
  setExpanded(isExpanded ? panel : false)

{['panel1', 'panel2', 'panel3'].map((panel, i) => (
  <Accordion key={panel} expanded={expanded === panel} onChange={handleChange(panel)}>
    <AccordionSummary id={`${panel}-header`} aria-controls={`${panel}-content`}>
      Section {i + 1}
    </AccordionSummary>
    <AccordionDetails id={`${panel}-content`}>
      Content for section {i + 1}.
    </AccordionDetails>
  </Accordion>
))}
```

## With actions
```tsx
<Accordion>
  <AccordionSummary id="panel1-header" aria-controls="panel1-content">
    Settings
  </AccordionSummary>
  <AccordionDetails id="panel1-content">
    <TextField placeholder="Domain" />
  </AccordionDetails>
  <AccordionActions>
    <Button variant="text">Cancel</Button>
    <Button variant="contained">Save</Button>
  </AccordionActions>
</Accordion>
```

## Disabled
```tsx
<Accordion disabled>
  <AccordionSummary id="panel1-header" aria-controls="panel1-content">
    Unavailable section
  </AccordionSummary>
  <AccordionDetails id="panel1-content">Content</AccordionDetails>
</Accordion>
```

## Performance — unmount on collapse
For heavy content panels (charts, data grids), unmount the content when collapsed to free resources:
```tsx
<Accordion slotProps={{ transition: { unmountOnExit: true } }}>
```

## Heading level
By default, `AccordionSummary` renders inside an `<h3>`. Override to maintain heading hierarchy:
```tsx
<Accordion slotProps={{ heading: { component: 'h4' } }}>
```

## Do not
- Do not omit `id` and `aria-controls` — screen readers depend on them
- Do not use accordion for navigation — use Tabs or a sidebar instead
- Do not nest accordions inside accordions
