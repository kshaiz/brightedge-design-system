import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Divider, Stack } from '@mui/material'
import { Typography } from './Typography'
// @ts-ignore
import instructions from './Typography.instructions.md?raw'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
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
type Story = StoryObj<typeof Typography>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'body1',
    color: 'text.primary',
    children: 'The quick brown fox jumps over the lazy dog.',
    gutterBottom: false,
    noWrap: false,
  },
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={1}>
      {(
        [
          ['h1', 'h1 — Hero / marketing only'],
          ['h2', 'h2 — Major section title'],
          ['h3', 'h3 — Section heading'],
          ['h4', 'h4 — Page heading'],
          ['h5', 'h5 — Card / section heading'],
          ['h6', 'h6 — Sub-section label'],
          ['subtitle1', 'subtitle1 — Supporting text'],
          ['subtitle2', 'subtitle2 — Secondary label'],
          ['body1', 'body1 — Default body copy'],
          ['body2', 'body2 — Dense body text'],
          ['caption', 'caption — Metadata and fine print'],
          ['overline', 'overline — Category label'],
        ] as const
      ).map(([variant, label]) => (
        <Typography key={variant} variant={variant}>
          {label}
        </Typography>
      ))}
    </Stack>
  ),
}

// ─── Heading hierarchy ────────────────────────────────────────────────────────

export const HeadingHierarchy: Story = {
  name: 'Heading hierarchy — do not skip levels',
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <Typography variant="h4" gutterBottom>Page Title (h4)</Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Introductory paragraph using body1. The page heading is h4 for typical app UI — h1/h2 are
        reserved for marketing contexts.
      </Typography>
      <Typography variant="h5" gutterBottom>Section (h5)</Typography>
      <Typography variant="body1" gutterBottom>
        Section body content using body1. The next level down is h6, never skipping to h6 directly
        from h4.
      </Typography>
      <Typography variant="h6" gutterBottom>Sub-section (h6)</Typography>
      <Typography variant="body2" color="text.secondary">
        Sub-section content using body2 for a slightly smaller, secondary feel.
      </Typography>
    </Box>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack spacing={0.5}>
      <Typography color="text.primary">text.primary — default body text</Typography>
      <Typography color="text.secondary">text.secondary — subdued / helper text</Typography>
      <Typography color="text.disabled">text.disabled — disabled state</Typography>
      <Typography color="primary">primary — brand-colored label</Typography>
      <Typography color="error">error — error message</Typography>
      <Typography color="warning.main">warning.main — warning message</Typography>
      <Typography color="success.main">success.main — success message</Typography>
    </Stack>
  ),
}

// ─── Page header pattern ──────────────────────────────────────────────────────

export const PageHeader: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <Typography variant="h4">Reports</Typography>
      <Typography variant="body2" color="text.secondary">
        Showing organic traffic data for the last 30 days across all tracked domains.
      </Typography>
    </Box>
  ),
}

// ─── Card header pattern ──────────────────────────────────────────────────────

export const CardHeader: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Typography variant="h5">Keyword Rankings</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Tracked across all your domains
      </Typography>
      <Divider sx={{ my: 1.5 }} />
      <Typography variant="body1">
        Your top 10 keywords improved by an average of 3.2 positions this week.
      </Typography>
    </Box>
  ),
}

// ─── Overline + heading ───────────────────────────────────────────────────────

export const OverlineWithHeading: Story = {
  render: () => (
    <Box>
      <Typography variant="overline" color="text.secondary">
        Performance
      </Typography>
      <Typography variant="h5">Organic Search</Typography>
    </Box>
  ),
}

// ─── No-wrap ──────────────────────────────────────────────────────────────────

export const NoWrap: Story = {
  render: () => (
    <Box sx={{ width: 200, border: '1px dashed', borderColor: 'divider', p: 1 }}>
      <Typography noWrap>
        This text is very long and will be truncated with an ellipsis instead of wrapping.
      </Typography>
    </Box>
  ),
}

// ─── Semantic override (component prop) ───────────────────────────────────────

export const SemanticOverride: Story = {
  name: 'Semantic override — component prop',
  render: () => (
    <Stack spacing={1}>
      <Typography variant="caption" color="text.secondary">
        Visual h5 style rendered as a {'<p>'} — decouples appearance from HTML semantics
      </Typography>
      <Typography variant="h5" component="p">
        Looks like h5, outputs a paragraph
      </Typography>
    </Stack>
  ),
}
