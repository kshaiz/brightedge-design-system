# Table — AI Instructions

## When to use

Use `Table` for structured, multi-column data with sorting, selection, and pagination. For simpler lists, prefer `List`. For read-only key/value pairs, use a `dl`/description list styled with Typography.

## Required wrapper

Always wrap `Table` in `TableContainer`. This enables horizontal scroll on narrow viewports:

```tsx
<TableContainer component={Paper} variant="outlined">
  <Table>
    ...
  </Table>
</TableContainer>
```

Pass `component={Paper}` with `variant="outlined"` to give the table a border surface.

## Basic structure

```tsx
<TableContainer component={Paper} variant="outlined">
  <Table>
    <TableHead>
      <TableRow>
        <TableCell scope="col">Name</TableCell>
        <TableCell scope="col" align="right">Score</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id} hover>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{row.score}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

Always add `scope="col"` to header `TableCell`s for accessibility.

## Size

- Default: `size="medium"` — comfortable row height for most views
- `size="small"` — dense tables with many rows (keyword lists, audit results)

```tsx
<Table size="small">...</Table>
```

## Hover rows

Always add `hover` to body `TableRow`s so users can track the row they're reading:

```tsx
<TableRow hover>...</TableRow>
```

## Sticky header (long tables)

```tsx
<TableContainer sx={{ maxHeight: 480 }}>
  <Table stickyHeader>...</Table>
</TableContainer>
```

## Sortable columns

Use `TableSortLabel` inside header cells. Track sort state externally:

```tsx
const [order, setOrder] = useState<'asc' | 'desc'>('asc')
const [orderBy, setOrderBy] = useState('name')

const handleSort = (col: string) => {
  const isAsc = orderBy === col && order === 'asc'
  setOrder(isAsc ? 'desc' : 'asc')
  setOrderBy(col)
}

<TableCell scope="col" sortDirection={orderBy === 'name' ? order : false}>
  <TableSortLabel
    active={orderBy === 'name'}
    direction={orderBy === 'name' ? order : 'asc'}
    onClick={() => handleSort('name')}
  >
    Name
  </TableSortLabel>
</TableCell>
```

## Row selection with checkboxes

Use `padding="checkbox"` on the first cell of each row, then `Checkbox` from the design system:

```tsx
<TableCell padding="checkbox">
  <Checkbox
    checked={selected.includes(row.id)}
    onChange={() => toggleSelect(row.id)}
  />
</TableCell>
```

For "select all" in the header:

```tsx
<TableCell padding="checkbox">
  <Checkbox
    indeterminate={selected.length > 0 && selected.length < rows.length}
    checked={selected.length === rows.length}
    onChange={handleSelectAll}
  />
</TableCell>
```

## Pagination

Use `TablePagination` inside a `TableFooter` row — never build custom pagination:

```tsx
<TableFooter>
  <TableRow>
    <TablePagination
      count={totalRows}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={(_, p) => setPage(p)}
      onRowsPerPageChange={(e) => {
        setRowsPerPage(parseInt(e.target.value, 10))
        setPage(0)
      }}
    />
  </TableRow>
</TableFooter>
```

## Do not
- Do not omit `TableContainer` — the table will overflow without it
- Do not omit `scope="col"` on header cells — screen readers require it
- Do not add `hover` to header rows — only body rows
- Do not build custom pagination — use `TablePagination`
- Do not use `variant="elevation"` on the wrapping Paper — use `variant="outlined"`
