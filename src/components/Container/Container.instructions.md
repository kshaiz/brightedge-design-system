# Container — AI Instructions

## What Container is

`Container` centers its content horizontally and constrains it to a `maxWidth`. It is the correct wrapper for full-page layout sections.

## Box vs Container — which to use

| Need | Use |
|---|---|
| Constrain page content to a readable width with horizontal centering | **Container** |
| Apply ad-hoc `sx` styles to a plain wrapper | **Box** (last resort) |
| Arrange children with spacing | **Stack** |

**Default to `Container` for page-level sections.** Only reach for `Box` when `Container`, `Stack`, `Paper`, or `Card` don't fit the need.

## Basic usage

```tsx
<Container maxWidth="lg">
  {/* page content */}
</Container>
```

## maxWidth options

| Prop value | Max width |
|---|---|
| `'xs'` | 444px |
| `'sm'` | 600px |
| `'md'` | 900px |
| `'lg'` | 1200px (default) |
| `'xl'` | 1536px |

Default to `maxWidth="lg"` unless the design specifies otherwise.

## Gutters

Container adds horizontal padding (gutters) by default. Remove them only when the content needs to span edge-to-edge (e.g. a full-bleed image or table):

```tsx
<Container disableGutters>
  {/* full-bleed content */}
</Container>
```

## Nesting with Stack

Always pair with `Stack` to space the sections inside:

```tsx
<Container maxWidth="lg">
  <Stack spacing={4}>
    <PageHeader />
    <ContentSection />
    <FooterSection />
  </Stack>
</Container>
```

## Spacing scale

Use MUI spacing units (1 unit = 8px). Stick to the approved scale:

| Value | px |
|---|---|
| 0.5 | 4px |
| 1 | 8px |
| 2 | 16px |
| 4 | 32px |
| 8 | 64px |

## Do not
- Do not use `Box` for page-level centering — use `Container`
- Do not hardcode pixel widths on wrappers — use `maxWidth` prop
- Do not nest `Container` inside `Container`
