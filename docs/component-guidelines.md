# Component Guidelines

## Buttons
- Primary actions: `variant="contained"`
- Secondary/cancel: `variant="outlined"`
- Destructive: `variant="contained" color="error"`
- Never use `variant="text"` for primary actions
- Always use `disableElevation` for contained buttons

## Forms
- Use `TextField` with `variant="outlined"` — never `standard` or `filled`
- Group related fields in a `<Stack spacing={2}>`
- Required field labels end with ` *` — do not use HTML `required` attribute alone
- Validation errors go in `helperText` with `error` prop

## Data Tables
- Use MUI `DataGrid` from `@mui/x-data-grid` for tabular data
- Always define explicit column widths
- Enable `autoHeight` only for tables with fewer than 20 rows
- Default page size: 25

## Status / Feedback
- Loading states: `<CircularProgress />` centered in the container
- Empty states: `<Typography variant="body2" color="text.secondary">` with a helpful message
- Errors: `<Alert severity="error">` — never use raw red text

## Icons
- Import from `@mui/icons-material` — use the outlined variant by default
- Icon buttons must have `aria-label`
- Pair icons with text labels in primary actions; icon-only only for toolbar actions

## Charts (Highcharts)
- Import `LineChart` and other wrappers from `@brightedge/design-system` — do not use `HighchartsReact` directly
- Chart colors automatically pick up MUI theme palette — do not override `colors` array
- Always set a descriptive `title` and `yAxisLabel`
- Disable credits (`credits: { enabled: false }`) — already set in wrappers
- For time series: use `categories` as month/week strings, not Unix timestamps
