import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import InfoIcon from '@mui/icons-material/Info'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Tooltip } from './Tooltip'
// @ts-ignore
import instructions from './Tooltip.instructions.md?raw'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
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
type Story = StoryObj<typeof Tooltip>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    title: 'Tooltip text',
    placement: 'top',
    arrow: false,
  },
  render: (args) => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="Delete item">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  ),
}

// ─── With arrow ───────────────────────────────────────────────────────────────

export const WithArrow: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="Tooltip with arrow" arrow>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
}

// ─── Placements ───────────────────────────────────────────────────────────────

export const Placements: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 120px)',
        gap: 1,
        p: 6,
        justifyContent: 'center',
      }}
    >
      {(
        [
          'top-start', 'top', 'top-end',
          'left-start', null, 'right-start',
          'left', null, 'right',
          'left-end', null, 'right-end',
          'bottom-start', 'bottom', 'bottom-end',
        ] as const
      ).map((placement, i) =>
        placement ? (
          <Tooltip key={placement} title={placement} placement={placement} arrow>
            <Button size="small" variant="outlined" sx={{ fontSize: '0.7rem' }}>
              {placement}
            </Button>
          </Tooltip>
        ) : (
          <Box key={i} />
        ),
      )}
    </Box>
  ),
}

// ─── Rich content ─────────────────────────────────────────────────────────────

export const RichContent: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        title={
          <>
            <Typography variant="caption" fontWeight="bold" display="block">
              Keyword difficulty
            </Typography>
            <Typography variant="caption">
              A score from 0–100 estimating how hard it is to rank on the first page for this
              keyword. Higher scores mean more competition.
            </Typography>
          </>
        }
        arrow
      >
        <IconButton aria-label="Learn more about keyword difficulty">
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </Box>
  ),
}

// ─── Long text (max 360px) ────────────────────────────────────────────────────

export const LongText: Story = {
  name: 'Long text — max 360px',
  render: () => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip
        title="This is a longer tooltip that explains something in more detail. The tooltip will wrap at 360px maximum width so it stays readable without becoming a massive wall of text."
        arrow
      >
        <Button>Hover for long tooltip</Button>
      </Tooltip>
    </Box>
  ),
}

// ─── On disabled element ──────────────────────────────────────────────────────

export const DisabledElement: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Tooltip title="Cannot delete — insufficient permissions">
        <span>
          <Button disabled>Delete</Button>
        </span>
      </Tooltip>
    </Box>
  ),
}

// ─── Delay ────────────────────────────────────────────────────────────────────

export const Delay: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ p: 4, justifyContent: 'center' }}>
      <Tooltip title="No delay" enterDelay={0}>
        <Button variant="outlined">Instant</Button>
      </Tooltip>
      <Tooltip title="500ms delay" enterDelay={500}>
        <Button variant="outlined">500ms delay</Button>
      </Tooltip>
    </Stack>
  ),
}
