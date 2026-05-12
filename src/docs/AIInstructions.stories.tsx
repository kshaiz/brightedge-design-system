import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
// @ts-ignore
import overviewMd from '../../CLAUDE.md?raw'
// @ts-ignore
import componentsMd from '../../docs/components.md?raw'
// @ts-ignore
import layoutMd from '../../docs/layouts-and-interactions.md?raw'
// @ts-ignore
import toneMd from '../../docs/language-and-tone.md?raw'
// @ts-ignore
import a11yMd from '../../docs/accessibility.md?raw'

function MarkdownBlock({ content }: { content: string }) {
  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', py: 3 }}>
      {content.split('\n').map((line, i) => {
        if (line.startsWith('# '))
          return <Typography key={i} variant="h4" gutterBottom sx={{ fontWeight: 700, mt: 2 }}>{line.slice(2)}</Typography>
        if (line.startsWith('## '))
          return <Typography key={i} variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>{line.slice(3)}</Typography>
        if (line.startsWith('### '))
          return <Typography key={i} variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>{line.slice(4)}</Typography>
        if (line.startsWith('---'))
          return <Divider key={i} sx={{ my: 3 }} />
        if (line === '')
          return <Box key={i} sx={{ mb: 1 }} />
        if (line.startsWith('```'))
          return null
        if (line.startsWith('- '))
          return <Typography key={i} component="li" variant="body2" sx={{ ml: 2, mb: 0.5 }}>{line.slice(2)}</Typography>
        return <Typography key={i} variant="body2" sx={{ mb: 0.5, lineHeight: 1.8 }}>{line}</Typography>
      })}
    </Box>
  )
}

const tabs = [
  { label: 'Overview',            content: overviewMd },
  { label: 'Component Guidelines', content: componentsMd },
  { label: 'Layout & Interaction', content: layoutMd },
  { label: 'Language & Tone',     content: toneMd },
  { label: 'Accessibility',       content: a11yMd },
]

function AIInstructionsPage() {
  const [active, setActive] = useState(0)

  return (
    <Box sx={{ px: 3, pb: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, pt: 4, pb: 1 }}>
        BrightEdge Design System
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        AI codegen instructions — read by Claude when generating UI from product requirements
      </Typography>
      <Tabs value={active} onChange={(_, v) => setActive(v)} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {tabs.map((t, i) => <Tab key={i} label={t.label} />)}
      </Tabs>
      <MarkdownBlock content={tabs[active].content} />
    </Box>
  )
}

const meta: Meta = {
  title: 'Design System/AI Instructions',
  component: AIInstructionsPage,
  parameters: {
    layout: 'fullscreen',
    docs: { canvas: { sourceState: 'hidden' } },
  },
}

export default meta
type Story = StoryObj

export const Instructions: Story = {
  render: () => <AIInstructionsPage />,
}
