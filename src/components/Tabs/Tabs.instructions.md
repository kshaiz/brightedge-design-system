# Tabs — AI Instructions

## When to use
- Use `Tabs` to switch between different views of the same content (e.g. Overview / Keywords / Backlinks)
- Prefer tabs over accordion when only one panel should be visible at a time and sections are at the same level
- Use Popover or Drawer for filters, not tabs

## Basic usage
```tsx
const [value, setValue] = useState(0)

<Tabs value={value} onChange={(_, v) => setValue(v)}>
  <Tab label="Overview" {...a11yTabProps(0)} />
  <Tab label="Keywords" {...a11yTabProps(1)} />
  <Tab label="Backlinks" {...a11yTabProps(2)} />
</Tabs>

<TabPanel value={value} index={0}>Overview content</TabPanel>
<TabPanel value={value} index={1}>Keywords content</TabPanel>
<TabPanel value={value} index={2}>Backlinks content</TabPanel>
```

Always use `a11yTabProps(index)` on each `Tab` and the matching `index` on each `TabPanel`. This wires up the `id` / `aria-controls` accessibility pair.

## With icons (always left)
```tsx
<Tabs value={value} onChange={(_, v) => setValue(v)}>
  <Tab label="Dashboard" icon={<DashboardIcon />} {...a11yTabProps(0)} />
  <Tab label="Reports" icon={<AssessmentIcon />} {...a11yTabProps(1)} />
</Tabs>
```

Icons always render on the **left** (`iconPosition="start"` is the default — do not override to "top" or "right").

## With a count — use Badge
```tsx
<Tab
  label={
    <Badge badgeContent={12} color="primary">
      <span>Issues</span>
    </Badge>
  }
  {...a11yTabProps(2)}
/>
```

Do **not** put the number in plain text. Wrap the label in `Badge`.

## Scrollable (many tabs)
```tsx
<Tabs value={value} onChange={(_, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
  {tabs.map((tab, i) => (
    <Tab key={tab} label={tab} {...a11yTabProps(i)} />
  ))}
</Tabs>
```

## Full width (fill container)
```tsx
<Tabs value={value} onChange={(_, v) => setValue(v)} variant="fullWidth">
  <Tab label="Tab 1" {...a11yTabProps(0)} />
  <Tab label="Tab 2" {...a11yTabProps(1)} />
</Tabs>
```

## Disabled tab
```tsx
<Tab label="Unavailable" disabled {...a11yTabProps(2)} />
```

## Do not
- Do not use `orientation="vertical"` unless explicitly asked
- Do not place `iconPosition="top"` or `iconPosition="end"` — icons must always be on the left
- Do not omit `a11yTabProps` — screen readers require the `aria-controls` / `id` linkage
- Do not use plain text for counts — use `Badge`
