import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { TextField } from '../TextField'
import { FormLabel } from '../FormLabel'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from './Accordion'
// @ts-ignore
import instructions from './Accordion.instructions.md?raw'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
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
type Story = StoryObj<typeof Accordion>

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <>
      <Accordion>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content">
          <Typography>General settings</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1-content">
          <Typography variant="body2" color="text.secondary">
            Configure your workspace name, language, and timezone preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="panel2-header" aria-controls="panel2-content">
          <Typography>Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel2-content">
          <Typography variant="body2" color="text.secondary">
            Manage email digests, in-app alerts, and Slack notifications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary id="panel3-header" aria-controls="panel3-content">
          <Typography>Billing</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel3-content">
          <Typography variant="body2">Billing details.</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ),
}

// ─── Default expanded ─────────────────────────────────────────────────────────

export const DefaultExpanded: Story = {
  render: () => (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary id="de1-header" aria-controls="de1-content">
          <Typography>Open by default</Typography>
        </AccordionSummary>
        <AccordionDetails id="de1-content">
          <Typography variant="body2" color="text.secondary">
            This panel starts expanded. Users can collapse it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary id="de2-header" aria-controls="de2-content">
          <Typography>Collapsed by default</Typography>
        </AccordionSummary>
        <AccordionDetails id="de2-content">
          <Typography variant="body2" color="text.secondary">
            This panel starts collapsed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  ),
}

// ─── Controlled — one open at a time ─────────────────────────────────────────

export const Controlled: Story = {
  name: 'Controlled — one open at a time',
  render: () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false)

    const panels = [
      { id: 'panel1', title: 'Keyword research', content: 'Find high-impact keywords for your campaigns using search volume, difficulty, and opportunity scores.' },
      { id: 'panel2', title: 'Content recommendations', content: 'Get AI-driven suggestions for pages to create or update based on gap analysis and competitor data.' },
      { id: 'panel3', title: 'Backlink analysis', content: 'Analyse your link profile, identify toxic links, and discover new link opportunities.' },
    ]

    return (
      <>
        {panels.map(({ id, title, content }) => (
          <Accordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
            <AccordionSummary id={`${id}-header`} aria-controls={`${id}-content`}>
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`${id}-content`}>
              <Typography variant="body2" color="text.secondary">{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    )
  },
}

// ─── With actions ─────────────────────────────────────────────────────────────

export const WithActions: Story = {
  render: () => (
    <Accordion defaultExpanded>
      <AccordionSummary id="actions-header" aria-controls="actions-content">
        <Typography>Domain settings</Typography>
      </AccordionSummary>
      <AccordionDetails id="actions-content">
        <FormLabel>Primary domain</FormLabel>
        <TextField placeholder="https://example.com" />
      </AccordionDetails>
      <AccordionActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Save</Button>
      </AccordionActions>
    </Accordion>
  ),
}

// ─── Custom heading level ─────────────────────────────────────────────────────

export const HeadingLevel: Story = {
  name: 'Custom heading level',
  render: () => (
    <>
      <Typography variant="h5" gutterBottom>Page section (h5)</Typography>
      {['Sub-section A', 'Sub-section B'].map((title, i) => (
        <Accordion key={i} slotProps={{ heading: { component: 'h6' } }}>
          <AccordionSummary id={`hl${i}-header`} aria-controls={`hl${i}-content`}>
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails id={`hl${i}-content`}>
            <Typography variant="body2" color="text.secondary">
              Content for {title}. The AccordionSummary is wrapped in an h6 to maintain heading hierarchy.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  ),
}
