# Progress — AI Instructions

## Components
- `LinearProgress` — horizontal bar; use for page-level loading, file uploads, multi-step processes
- `CircularProgress` — spinner; use for inline loading states within buttons, cards, or small containers

## LinearProgress

### Indeterminate (default) — unknown duration
```tsx
<LinearProgress />
<LinearProgress color="secondary" />
```

### Determinate — known percentage
```tsx
<LinearProgress variant="determinate" value={75} />
```
Always show the label for determinate progress:
```tsx
<LinearProgress variant="determinate" value={75} showLabel />
```

### Buffer — streaming / buffered download
```tsx
<LinearProgress variant="buffer" value={60} valueBuffer={80} />
```

### showLabel
When `variant="determinate"`, pass `showLabel` to render the percentage to the right:
```tsx
<LinearProgress variant="determinate" value={40} showLabel />
// Renders: ████░░░░░░ 40%
```

## CircularProgress

### Indeterminate spinner
```tsx
<CircularProgress />
<CircularProgress size={24} />  // inline in button
```

### Determinate with label
```tsx
<CircularProgress variant="determinate" value={66} showLabel />
// Renders the arc filled to 66% with "66%" text centered
```

### Sizes
```tsx
<CircularProgress size={16} />   // small — inline in dense UI
<CircularProgress size={32} />   // default compact size
<CircularProgress size={40} />   // default
```

## Loading button pattern
```tsx
<Button disabled={loading} startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}>
  {loading ? 'Saving…' : 'Save'}
</Button>
```

## Page-level loading
```tsx
// Top of the page — full width indeterminate bar
{loading && <LinearProgress sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 'appBar' }} />}
```

## Accessibility
Always provide an accessible label:
```tsx
<LinearProgress aria-label="Loading report data" />
<CircularProgress aria-label="Saving changes" />

// Or reference a visible label:
<Typography id="upload-label">Uploading file</Typography>
<LinearProgress aria-labelledby="upload-label" variant="determinate" value={progress} />
```

## Do not
- Do not use `LinearProgress` and `CircularProgress` simultaneously for the same operation
- Do not use `CircularProgress` for page-level loading — use `LinearProgress` instead
- Do not omit `aria-label` or `aria-labelledby`
