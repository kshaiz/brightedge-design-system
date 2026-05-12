# Tooltip — AI Instructions

## When to use
- Use `Tooltip` to reveal a short description for an icon, button, or truncated label on hover
- Keep tooltip text brief — one short phrase or sentence (do not use tooltips for paragraphs)
- For interactive content (links, buttons inside the tooltip), use a Popover instead

## Basic usage
```tsx
<Tooltip title="Delete">
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>
```

## Behaviour
- Tooltips **always follow the mouse cursor** — this is baked into the component and cannot be disabled
- Max width is **360px** — long text wraps within this constraint
- Transition is always **Zoom** — do not attempt to override the transition

## Placement
Default is `"top"`. Use any of the 12 positions when layout requires it:

```tsx
<Tooltip title="Top start" placement="top-start"><Button>...</Button></Tooltip>
<Tooltip title="Right" placement="right"><Button>...</Button></Tooltip>
<Tooltip title="Bottom" placement="bottom"><Button>...</Button></Tooltip>
<Tooltip title="Left" placement="left"><Button>...</Button></Tooltip>
```

## Arrow
```tsx
<Tooltip title="With arrow" arrow>
  <Button>Hover me</Button>
</Tooltip>
```

## Controlled open state
```tsx
const [open, setOpen] = useState(false)

<Tooltip title="Controlled" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
  <Button>Hover me</Button>
</Tooltip>
```

## Rich content
Tooltips can contain React nodes, not just strings:
```tsx
<Tooltip
  title={
    <>
      <Typography variant="caption" fontWeight="bold">Tip title</Typography>
      <Typography variant="caption" display="block">Longer explanation here.</Typography>
    </>
  }
>
  <IconButton><InfoIcon /></IconButton>
</Tooltip>
```
Max width of 360px applies — content will wrap.

## Accessibility
- For icon-only buttons, the `Tooltip` title acts as the accessible label — always pair them
- If the wrapped element already has an `aria-label`, add `describeChild` so the tooltip acts as a description instead

```tsx
<Tooltip title="More detail about search" describeChild>
  <IconButton aria-label="Search">
    <SearchIcon />
  </IconButton>
</Tooltip>
```

## Do not
- Do not use tooltip text longer than ~360px wide — use a Popover for rich content
- Do not put interactive elements (buttons, links) inside a tooltip title
- Do not override the transition — Zoom is always used
- Do not pass `followCursor` or `slots`/`slotProps` — the wrapper handles these internally
