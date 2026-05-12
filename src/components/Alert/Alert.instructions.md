# Alert — AI Instructions

## When to use
- Use `Alert` inline within the page to communicate status, warnings, or contextual information
- For page-level transient notifications after a user action, use `PageAlert` (top-right toast)

## Severity
`"error"` | `"warning"` | `"info"` | `"success"`

Use the severity that matches the message:
- `error` — something failed, user action may be required
- `warning` — degraded state or approaching a limit
- `info` — neutral information, no action required
- `success` — operation completed successfully

## Basic usage
```tsx
<Alert severity="info">Your report will be ready in a few minutes.</Alert>
<Alert severity="error">Failed to save changes. Please try again.</Alert>
<Alert severity="success">Report published successfully.</Alert>
```

## With title
Use `AlertTitle` when the message needs a heading:
```tsx
<Alert severity="warning">
  <AlertTitle>Approaching limit</AlertTitle>
  You have 12 keywords remaining in your plan.
</Alert>
```

## Closeable
```tsx
<Alert severity="info" onClose={() => setVisible(false)}>
  This alert can be dismissed.
</Alert>
```

## With action
```tsx
<Alert severity="info" action={<Button size="small" color="inherit">Upgrade</Button>}>
  Upgrade your plan to track unlimited keywords.
</Alert>
```

## PageAlert (top-right toast)

Use `PageAlert` for transient page-level notifications triggered by user actions (save, publish, delete):

```tsx
<PageAlert
  open={open}
  onClose={() => setOpen(false)}
  severity="success"
  title="Report published"
  message="Your report is now visible to all workspace members."
/>
```

Props: `open`, `onClose`, `severity` (error|warning|info|success), `message` (required), `title` (optional), `autoHideDuration` (default 6000ms).

## Do not
- Do not use `filled` variant for inline alerts — that is reserved for `PageAlert`
- Do not use `outlined` variant
- Do not use raw `Snackbar + Alert` for toasts — use `PageAlert` instead
