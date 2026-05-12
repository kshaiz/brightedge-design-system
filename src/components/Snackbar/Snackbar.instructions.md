# Snackbar — AI Instructions

## When to use
- Use `Snackbar` + `Alert` for page-level transient feedback after a user action (save, publish, delete, error)
- The snackbar appears at the **top-right corner** by default and dismisses automatically after 6 seconds
- Use `Alert` inside the `Snackbar` — do not put raw text directly in `Snackbar`

## Standard pattern
```tsx
const [open, setOpen] = useState(false)

const handleClose = (_: unknown, reason?: string) => {
  if (reason === 'clickaway') return
  setOpen(false)
}

<Snackbar open={open} onClose={handleClose}>
  <Alert severity="success" onClose={handleClose}>
    Report published successfully.
  </Alert>
</Snackbar>
```

## Severity
Match the severity to the outcome:
```tsx
// Success — operation completed
<Alert severity="success" onClose={handleClose}>Settings saved.</Alert>

// Error — operation failed
<Alert severity="error" onClose={handleClose}>Failed to save. Please try again.</Alert>

// Warning — partial success or user should be aware
<Alert severity="warning" onClose={handleClose}>Exported with 3 warnings.</Alert>

// Info — neutral information
<Alert severity="info" onClose={handleClose}>Your session will expire in 5 minutes.</Alert>
```

## With title
```tsx
<Snackbar open={open} onClose={handleClose}>
  <Alert severity="error" onClose={handleClose}>
    <AlertTitle>Connection failed</AlertTitle>
    Could not reach the server. Check your connection and try again.
  </Alert>
</Snackbar>
```

## Custom duration
```tsx
<Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
  <Alert severity="success" onClose={handleClose}>Copied to clipboard.</Alert>
</Snackbar>
```
Default is 6000ms. Use 3000ms for very brief confirmations (copy, like). Use `null` to disable auto-hide for errors that require user acknowledgement.

## Persistent (no auto-hide)
```tsx
<Snackbar open={open} onClose={handleClose} autoHideDuration={null}>
  <Alert severity="error" onClose={handleClose}>
    <AlertTitle>Payment failed</AlertTitle>
    Your card was declined. Please update your payment method.
  </Alert>
</Snackbar>
```

## Do not
- Do not use `Snackbar` for inline page errors — use `Alert` directly in the page instead
- Do not put multiple snackbars open at the same time — queue them
- Do not omit `onClose` — users must be able to dismiss the snackbar
- Do not use raw text as `Snackbar` children — always wrap with `Alert`
