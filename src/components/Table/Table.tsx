import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
  TableBody as MuiTableBody,
  TableBodyProps as MuiTableBodyProps,
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
  TableRow as MuiTableRow,
  TableRowProps as MuiTableRowProps,
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableSortLabel as MuiTableSortLabel,
  TableSortLabelProps as MuiTableSortLabelProps,
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material'

// ─── TableContainer ────────────────────────────────────────────────────────────

export interface TableContainerProps extends MuiTableContainerProps {}

export function TableContainer(props: TableContainerProps) {
  return <MuiTableContainer {...props} />
}

// ─── Table ─────────────────────────────────────────────────────────────────────

export interface TableProps extends MuiTableProps {}

export function Table(props: TableProps) {
  return <MuiTable {...props} />
}

// ─── TableHead ─────────────────────────────────────────────────────────────────

export interface TableHeadProps extends MuiTableHeadProps {}

export function TableHead(props: TableHeadProps) {
  return <MuiTableHead {...props} />
}

// ─── TableBody ─────────────────────────────────────────────────────────────────

export interface TableBodyProps extends MuiTableBodyProps {}

export function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props} />
}

// ─── TableFooter ───────────────────────────────────────────────────────────────

export interface TableFooterProps extends MuiTableFooterProps {}

export function TableFooter(props: TableFooterProps) {
  return <MuiTableFooter {...props} />
}

// ─── TableRow ──────────────────────────────────────────────────────────────────

export interface TableRowProps extends MuiTableRowProps {}

export function TableRow(props: TableRowProps) {
  return <MuiTableRow {...props} />
}

// ─── TableCell ─────────────────────────────────────────────────────────────────

export interface TableCellProps extends MuiTableCellProps {}

export function TableCell(props: TableCellProps) {
  return <MuiTableCell {...props} />
}

// ─── TableSortLabel ────────────────────────────────────────────────────────────

export interface TableSortLabelProps extends MuiTableSortLabelProps {}

export function TableSortLabel(props: TableSortLabelProps) {
  return <MuiTableSortLabel {...props} />
}

// ─── TablePagination ───────────────────────────────────────────────────────────

export interface TablePaginationProps extends MuiTablePaginationProps {}

export function TablePagination(props: TablePaginationProps) {
  return <MuiTablePagination {...props} />
}
