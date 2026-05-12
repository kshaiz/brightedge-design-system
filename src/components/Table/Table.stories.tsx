import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Paper } from '../Paper'
import { Checkbox } from '../Checkbox'
import {
  Table, TableHead, TableBody, TableFooter,
  TableRow, TableCell, TableSortLabel,
  TableContainer, TablePagination,
} from './Table'
// @ts-ignore
import instructions from './Table.instructions.md?raw'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// ─── Sample data ──────────────────────────────────────────────────────────────

interface Row {
  id: number
  name: string
  url: string
  traffic: number
  position: number
}

const rows: Row[] = [
  { id: 1, name: 'SEO Best Practices', url: '/blog/seo-best-practices', traffic: 12400, position: 1.2 },
  { id: 2, name: 'Keyword Research Guide', url: '/blog/keyword-research', traffic: 9800, position: 2.7 },
  { id: 3, name: 'Link Building 101', url: '/blog/link-building', traffic: 7600, position: 3.1 },
  { id: 4, name: 'Core Web Vitals', url: '/blog/core-web-vitals', traffic: 6200, position: 4.5 },
  { id: 5, name: 'Technical SEO Checklist', url: '/blog/technical-seo', traffic: 5400, position: 5.0 },
]

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="col">Page</TableCell>
            <TableCell scope="col">URL</TableCell>
            <TableCell scope="col" align="right">Traffic</TableCell>
            <TableCell scope="col" align="right">Avg. Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// ─── Dense ────────────────────────────────────────────────────────────────────

export const Dense: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell scope="col">Page</TableCell>
            <TableCell scope="col">URL</TableCell>
            <TableCell scope="col" align="right">Traffic</TableCell>
            <TableCell scope="col" align="right">Avg. Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

// ─── Sortable ─────────────────────────────────────────────────────────────────

type SortKey = keyof Pick<Row, 'name' | 'traffic' | 'position'>

export const Sortable: Story = {
  render: () => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const [orderBy, setOrderBy] = useState<SortKey>('name')

    const handleSort = (col: SortKey) => {
      const isAsc = orderBy === col && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(col)
    }

    const sorted = [...rows].sort((a, b) => {
      const val = a[orderBy] < b[orderBy] ? -1 : a[orderBy] > b[orderBy] ? 1 : 0
      return order === 'asc' ? val : -val
    })

    const headCells: { id: SortKey; label: string; align?: 'right' }[] = [
      { id: 'name', label: 'Page' },
      { id: 'traffic', label: 'Traffic', align: 'right' },
      { id: 'position', label: 'Avg. Position', align: 'right' },
    ]

    return (
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((col) => (
                <TableCell
                  key={col.id}
                  scope="col"
                  align={col.align}
                  sortDirection={orderBy === col.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={orderBy === col.id ? order : 'asc'}
                    onClick={() => handleSort(col.id)}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
}

// ─── With row selection ───────────────────────────────────────────────────────

export const WithSelection: Story = {
  name: 'With row selection',
  render: () => {
    const [selected, setSelected] = useState<number[]>([])

    const toggle = (id: number) =>
      setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

    const toggleAll = () =>
      setSelected(selected.length === rows.length ? [] : rows.map((r) => r.id))

    return (
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < rows.length}
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={toggleAll}
                  inputProps={{ 'aria-label': 'select all' }}
                />
              </TableCell>
              <TableCell scope="col">Page</TableCell>
              <TableCell scope="col" align="right">Traffic</TableCell>
              <TableCell scope="col" align="right">Avg. Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isSelected = selected.includes(row.id)
              return (
                <TableRow key={row.id} hover selected={isSelected} onClick={() => toggle(row.id)} sx={{ cursor: 'pointer' }}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} inputProps={{ 'aria-label': row.name }} />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
                  <TableCell align="right">{row.position}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
}

// ─── With pagination ──────────────────────────────────────────────────────────

const manyRows: Row[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Page ${i + 1}`,
  url: `/page-${i + 1}`,
  traffic: Math.floor(Math.random() * 15000) + 1000,
  position: parseFloat((Math.random() * 10 + 1).toFixed(1)),
}))

export const WithPagination: Story = {
  name: 'With pagination',
  render: () => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const paginated = manyRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell scope="col">Page</TableCell>
              <TableCell scope="col">URL</TableCell>
              <TableCell scope="col" align="right">Traffic</TableCell>
              <TableCell scope="col" align="right">Avg. Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={manyRows.length}
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
        </Table>
      </TableContainer>
    )
  },
}

// ─── Sticky header ────────────────────────────────────────────────────────────

export const StickyHeader: Story = {
  name: 'Sticky header',
  render: () => (
    <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 300 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell scope="col">Page</TableCell>
            <TableCell scope="col">URL</TableCell>
            <TableCell scope="col" align="right">Traffic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manyRows.slice(0, 15).map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell align="right">{row.traffic.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}
