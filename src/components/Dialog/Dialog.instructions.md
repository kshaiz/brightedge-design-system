# Dialog — AI Instructions

## When to use
- Use `Dialog` for confirmation of destructive or irreversible actions
- Use `Dialog` to interrupt user flow and require an explicit decision before proceeding
- Use `Dialog` to collect a small amount of input (a field or two) before an action
- Do **not** use for complex multi-step flows — those belong in a full page or drawer

## Basic confirmation dialog
```tsx
<Dialog open={open} onClose={handleClose} aria-labelledby="confirm-title" aria-describedby="confirm-desc">
  <DialogTitle id="confirm-title">Delete report?</DialogTitle>
  <DialogContent>
    <DialogContentText id="confirm-desc">
      This will permanently delete the report and cannot be undone.
    </DialogContentText>
  </DialogContent>
  <DialogActions cancelAction={<Button variant="text" onClick={handleClose}>Cancel</Button>}>
    <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
  </DialogActions>
</Dialog>
```

## DialogActions — button placement

**Always** use the `cancelAction` prop for Cancel / Back buttons. These appear on the **left**. Primary CTA and any secondary right-side actions go in `children` (right side).

```tsx
// Two right-side actions + one left cancel
<DialogActions
  cancelAction={<Button variant="text" onClick={handleClose}>Cancel</Button>}
>
  <Button variant="outlined" onClick={handleBack}>Back</Button>
  <Button variant="contained" onClick={handleSubmit}>Submit</Button>
</DialogActions>

// Single primary CTA only (no cancel — right-aligned)
<DialogActions>
  <Button variant="contained" onClick={handleClose}>Got it</Button>
</DialogActions>
```

## Sizes
Default is `maxWidth="sm"` with `fullWidth`. Override when content requires more space:

```tsx
<Dialog maxWidth="md" fullWidth open={open}>…</Dialog>
```

## Alert dialog (urgent)
Add `role="alertdialog"` when the dialog interrupts for a critical decision. Button labels must be self-explanatory without reading the body.

```tsx
<Dialog
  open={open}
  onClose={handleClose}
  role="alertdialog"
  aria-labelledby="alert-title"
  aria-describedby="alert-desc"
>
  <DialogTitle id="alert-title">Unsaved changes</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-desc">
      You have unsaved changes. Do you want to leave without saving?
    </DialogContentText>
  </DialogContent>
  <DialogActions cancelAction={<Button variant="text" onClick={handleClose}>Stay</Button>}>
    <Button variant="contained" color="error" onClick={handleLeave}>Leave without saving</Button>
  </DialogActions>
</Dialog>
```

## Form dialog
```tsx
<Dialog open={open} onClose={handleClose} aria-labelledby="form-title">
  <DialogTitle id="form-title">Add domain</DialogTitle>
  <DialogContent>
    <FormLabel>Domain URL</FormLabel>
    <TextField placeholder="https://example.com" autoFocus />
  </DialogContent>
  <DialogActions cancelAction={<Button variant="text" onClick={handleClose}>Cancel</Button>}>
    <Button variant="contained" onClick={handleSubmit}>Add</Button>
  </DialogActions>
</Dialog>
```

## Scrolling content
Use `scroll="paper"` (default) to keep the title and actions fixed while content scrolls:
```tsx
<Dialog open={open} scroll="paper" maxWidth="md" fullWidth>
  <DialogTitle>Long content</DialogTitle>
  <DialogContent dividers>
    {/* Long content here */}
  </DialogContent>
  <DialogActions cancelAction={…}>…</DialogActions>
</Dialog>
```

## Responsive full-screen
```tsx
const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
<Dialog open={open} fullScreen={fullScreen}>…</Dialog>
```

## Do not
- Do not put Cancel/Back in `children` of `DialogActions` — use the `cancelAction` prop
- Do not skip `aria-labelledby` pointing to `DialogTitle`
- Do not use for non-blocking notifications — use `PageAlert` (Snackbar) instead
- Do not use for complex multi-step wizards
