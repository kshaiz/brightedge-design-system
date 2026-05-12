# Backdrop — AI Instructions

## When to use
- Use `Backdrop` to block interaction with the entire page during a loading or processing state
- Pair with `showSpinner` (renders a `CircularProgress`) for loading operations
- Use sparingly — for operations expected to take more than ~1 second

## Basic usage (loading state)
```tsx
const [loading, setLoading] = useState(false)

<Backdrop open={loading} onClick={() => setLoading(false)} showSpinner />
```

## With custom content
```tsx
<Backdrop open={open}>
  <Stack alignItems="center" spacing={2}>
    <CircularProgress color="inherit" />
    <Typography color="white">Processing your report…</Typography>
  </Stack>
</Backdrop>
```

## z-index
The backdrop renders above drawers and navigation (`theme.zIndex.drawer + 1`) by default. This is baked into the component — do not override unless specifically required.

## Do not
- Do not use Backdrop for section-level loading — use a skeleton or inline spinner instead
- Do not use Backdrop for non-blocking operations — it completely prevents user interaction
