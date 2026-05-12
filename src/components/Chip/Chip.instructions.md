# Chip — AI Instructions

## When to use
- Use `Chip` for tags, filters, selections, and input tokens
- Use `variant="outlined"` for filter chips that toggle on/off
- Use `variant="filled"` (default) for static tags and categorization labels
- Use deletable chips (`onDelete`) for multi-select input tokens (e.g. selected tags, email recipients)

## Basic usage
```tsx
<Chip label="React" />
<Chip label="TypeScript" variant="outlined" />
```

## With icon
```tsx
<Chip icon={<FaceIcon />} label="With Icon" />
```

## Deletable
```tsx
<Chip label="Deletable" onDelete={() => handleDelete()} />
```
Adding `onDelete` automatically renders the delete icon.

## Clickable
```tsx
<Chip label="Clickable" onClick={() => handleClick()} />
```

## With avatar
```tsx
<Chip avatar={<Avatar>M</Avatar>} label="Michael" />
<Chip avatar={<Avatar src="/photo.jpg" alt="Jane" />} label="Jane" />
```

## Colors
`default` | `primary` | `secondary` | `error` | `warning` | `info` | `success`

## Sizes
- `size="medium"` (default)
- `size="small"` — for dense layouts, inline badges, and compact tables

## Do not
- Do not use Chip for navigation — use Tabs or Breadcrumbs
- Do not use Chip as a standalone action button — use Button instead
- Do not put more than one line of text in a Chip
