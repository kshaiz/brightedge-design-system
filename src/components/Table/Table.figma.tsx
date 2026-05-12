import figma from '@figma/code-connect'
import { Paper } from '../Paper'
import {
  Table, TableHead, TableBody, TableFooter,
  TableRow, TableCell, TableSortLabel,
  TableContainer, TablePagination,
} from './Table'

// Table — Figma props: Small (bool), Checkbox (bool), Small Screen (bool), Rows (5|10)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Table,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6594-46634',
  {
    example: () => (
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell scope="col">Column</TableCell>
              <TableCell scope="col">Column</TableCell>
              <TableCell scope="col">Column</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    ),
  },
)

// TableCellRow — Figma props: Small (bool), Checkbox (bool), Hover (bool), Selected (bool), Columns (3-10), Divider (bool)

figma.connect(
  TableRow,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6594-46473',
  {
    example: () => (
      <TableRow hover>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    ),
  },
)

// TableHeadRow — Figma props: Small (bool), Checkbox (bool), Selected (bool), Columns (3-10)

figma.connect(
  TableRow,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6686-36863',
  {
    example: () => (
      <TableRow>
        <TableCell scope="col">
          <TableSortLabel active direction="asc">Column</TableSortLabel>
        </TableCell>
        <TableCell scope="col">Column</TableCell>
      </TableRow>
    ),
  },
)

// TableFooter — maps to TablePagination

figma.connect(
  TablePagination,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6645-61374',
  {
    example: () => (
      <TableFooter>
        <TableRow>
          <TablePagination
            count={100}
            page={0}
            rowsPerPage={10}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </TableRow>
      </TableFooter>
    ),
  },
)

// TableCell — Figma props: Small (bool), Checkbox (bool)

figma.connect(
  TableCell,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6594-46413',
  {
    example: () => <TableCell>Cell</TableCell>,
  },
)

// TableHead header cell — Figma props: Small (bool), Checkbox (bool), label (string), leftSort (bool), rightSort (bool)

figma.connect(
  TableCell,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6594-46364',
  {
    example: () => (
      <TableCell scope="col">
        <TableSortLabel active direction="asc">Head</TableSortLabel>
      </TableCell>
    ),
  },
)
