import type { Meta, StoryObj } from '@storybook/react-vite'
import HomeIcon from '@mui/icons-material/Home'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from '@mui/material'
import { Typography } from '../Typography'
import { Breadcrumbs } from './Breadcrumbs'
// @ts-ignore
import instructions from './Breadcrumbs.instructions.md?raw'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
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
type Story = StoryObj<typeof Breadcrumbs>

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="#" underline="hover" color="inherit">Dashboard</Link>
      <Link href="#" underline="hover" color="inherit">Reports</Link>
      <Typography color="text.primary">Keyword Gap</Typography>
    </Breadcrumbs>
  ),
}

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="#" underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <HomeIcon fontSize="small" />
        Home
      </Link>
      <Link href="#" underline="hover" color="inherit">Reports</Link>
      <Typography color="text.primary">Overview</Typography>
    </Breadcrumbs>
  ),
}

// ─── Custom separator ─────────────────────────────────────────────────────────

export const ChevronSeparator: Story = {
  name: 'Custom separator — chevron',
  render: () => (
    <Breadcrumbs
      separator={<ChevronRightIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link href="#" underline="hover" color="inherit">Dashboard</Link>
      <Link href="#" underline="hover" color="inherit">Content</Link>
      <Typography color="text.primary">Page analysis</Typography>
    </Breadcrumbs>
  ),
}

// ─── Collapsed ────────────────────────────────────────────────────────────────

export const Collapsed: Story = {
  name: 'Collapsed (long path)',
  render: () => (
    <Breadcrumbs maxItems={3} aria-label="breadcrumb">
      <Link href="#" underline="hover" color="inherit">Home</Link>
      <Link href="#" underline="hover" color="inherit">Category</Link>
      <Link href="#" underline="hover" color="inherit">Sub-category</Link>
      <Link href="#" underline="hover" color="inherit">Detail</Link>
      <Typography color="text.primary">Current page</Typography>
    </Breadcrumbs>
  ),
}
