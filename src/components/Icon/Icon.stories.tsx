import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'
import FilterListIcon from '@mui/icons-material/FilterList'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import InfoIcon from '@mui/icons-material/Info'
import { SvgIcon } from './Icon'
// @ts-ignore
import instructions from './Icon.instructions.md?raw'

const meta: Meta = {
  title: 'Components/Icon',
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
type Story = StoryObj

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Stack alignItems="center" spacing={0.5}>
        <SearchIcon fontSize="small" />
        <Typography variant="caption">small</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <SearchIcon fontSize="medium" />
        <Typography variant="caption">medium</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <SearchIcon fontSize="large" />
        <Typography variant="caption">large</Typography>
      </Stack>
      <Stack alignItems="center" spacing={0.5}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon fontSize="inherit" /> Text
        </Typography>
        <Typography variant="caption">inherit</Typography>
      </Stack>
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <SearchIcon color="action" />
      <SearchIcon color="primary" />
      <SearchIcon color="secondary" />
      <SearchIcon color="error" />
      <SearchIcon color="warning" />
      <SearchIcon color="info" />
      <SearchIcon color="success" />
      <SearchIcon color="disabled" />
    </Stack>
  ),
}

// ─── Common icons ─────────────────────────────────────────────────────────────

export const CommonIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <SearchIcon />
      <AddIcon />
      <EditIcon />
      <DeleteIcon />
      <DownloadIcon />
      <FilterListIcon />
      <MoreVertIcon />
    </Stack>
  ),
}

// ─── Status icons ─────────────────────────────────────────────────────────────

export const StatusIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <CheckCircleIcon color="success" />
      <ErrorIcon color="error" />
      <WarningIcon color="warning" />
      <InfoIcon color="info" />
    </Stack>
  ),
}

// ─── Custom SVG (SvgIcon wrapper) ─────────────────────────────────────────────

export const CustomSvgIcon: Story = {
  name: 'Custom SVG (SvgIcon wrapper)',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {(['small', 'medium', 'large'] as const).map((size) => (
        <SvgIcon key={size} fontSize={size} color="primary">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      ))}
    </Stack>
  ),
}
