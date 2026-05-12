import type { Meta, StoryObj } from '@storybook/react-vite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { IconButton } from '../IconButton'
import { Button } from '../Button'
import { Typography } from '../Typography'
import { Card, CardHeader, CardContent, CardMedia, CardActions } from './Card'
// @ts-ignore
import instructions from './Card.instructions.md?raw'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
type Story = StoryObj<typeof Card>

// ─── Chart card ───────────────────────────────────────────────────────────────

export const ChartCard: Story = {
  name: 'Chart card (primary use case)',
  render: () => (
    <Card sx={{ maxWidth: 480 }}>
      <CardHeader
        title="Organic Traffic"
        subheader="Last 30 days"
        action={
          <IconButton aria-label="more options">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Chart placeholder — replace with a Highcharts component.
        </Typography>
      </CardContent>
    </Card>
  ),
}

// ─── Metric tile ──────────────────────────────────────────────────────────────

export const MetricTile: Story = {
  render: () => (
    <Card sx={{ maxWidth: 260 }}>
      <CardContent>
        <Typography variant="overline" color="text.secondary" display="block">
          Impressions
        </Typography>
        <Typography variant="h4">1.2M</Typography>
        <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <TrendingUpIcon fontSize="small" />
          +8% vs last month
        </Typography>
      </CardContent>
    </Card>
  ),
}

// ─── With actions ─────────────────────────────────────────────────────────────

export const WithActions: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        title="Keyword Set"
        subheader="Updated today"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          124 keywords across 3 groups targeting informational and commercial intent.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="text">View all</Button>
        <Button size="small" variant="contained">Edit</Button>
      </CardActions>
    </Card>
  ),
}

// ─── With media ───────────────────────────────────────────────────────────────

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height={180}
        image="https://placehold.co/360x180/e8f5e9/2e7d32?text=Media"
        alt="Card media"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>Featured Report</Typography>
        <Typography variant="body2" color="text.secondary">
          Download the latest SEO benchmarks report for your industry.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Download</Button>
      </CardActions>
    </Card>
  ),
}
