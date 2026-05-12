import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LinkIcon from '@mui/icons-material/Link'
import { Box } from '@mui/material'
import { Badge } from '../Badge'
import { Typography } from '../Typography'
import { Tabs, Tab, TabPanel, a11yTabProps } from './Tabs'
// @ts-ignore
import instructions from './Tabs.instructions.md?raw'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
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
type Story = StoryObj<typeof Tabs>

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)} aria-label="basic tabs">
            <Tab label="Overview" {...a11yTabProps(0)} />
            <Tab label="Keywords" {...a11yTabProps(1)} />
            <Tab label="Backlinks" {...a11yTabProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="body2" color="text.secondary">Overview content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body2" color="text.secondary">Keywords content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body2" color="text.secondary">Backlinks content</Typography>
        </TabPanel>
      </Box>
    )
  },
}

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)} aria-label="tabs with icons">
            <Tab label="Dashboard" icon={<DashboardIcon />} {...a11yTabProps(0)} />
            <Tab label="Reports" icon={<AssessmentIcon />} {...a11yTabProps(1)} />
            <Tab label="Backlinks" icon={<LinkIcon />} {...a11yTabProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="body2" color="text.secondary">Dashboard content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body2" color="text.secondary">Reports content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body2" color="text.secondary">Backlinks content</Typography>
        </TabPanel>
      </Box>
    )
  },
}

// ─── With badge count ─────────────────────────────────────────────────────────

export const WithBadge: Story = {
  name: 'With badge count',
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)} aria-label="tabs with badges">
            <Tab label="All pages" {...a11yTabProps(0)} />
            <Tab
              label={
                <Badge badgeContent={7} color="error" sx={{ pr: 1.5 }}>
                  Issues
                </Badge>
              }
              {...a11yTabProps(1)}
            />
            <Tab
              label={
                <Badge badgeContent={24} color="primary" sx={{ pr: 2 }}>
                  Opportunities
                </Badge>
              }
              {...a11yTabProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="body2" color="text.secondary">All pages content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body2" color="text.secondary">7 issues found</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body2" color="text.secondary">24 opportunities</Typography>
        </TabPanel>
      </Box>
    )
  },
}

// ─── Scrollable ───────────────────────────────────────────────────────────────

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    const tabs = ['Overview', 'Keywords', 'Backlinks', 'Content', 'Technical', 'Local', 'Mobile', 'Core Web Vitals']
    return (
      <Box sx={{ maxWidth: 480 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={(_, v) => setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable tabs"
          >
            {tabs.map((tab, i) => (
              <Tab key={tab} label={tab} {...a11yTabProps(i)} />
            ))}
          </Tabs>
        </Box>
        {tabs.map((tab, i) => (
          <TabPanel key={tab} value={value} index={i}>
            <Typography variant="body2" color="text.secondary">{tab} content</Typography>
          </TabPanel>
        ))}
      </Box>
    )
  },
}

// ─── Full width ───────────────────────────────────────────────────────────────

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ maxWidth: 480 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)} variant="fullWidth" aria-label="full width tabs">
            <Tab label="Tab 1" {...a11yTabProps(0)} />
            <Tab label="Tab 2" {...a11yTabProps(1)} />
            <Tab label="Tab 3" {...a11yTabProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="body2" color="text.secondary">Tab 1 content</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="body2" color="text.secondary">Tab 2 content</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="body2" color="text.secondary">Tab 3 content</Typography>
        </TabPanel>
      </Box>
    )
  },
}

// ─── Disabled tab ─────────────────────────────────────────────────────────────

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} aria-label="tabs with disabled">
          <Tab label="Active" {...a11yTabProps(0)} />
          <Tab label="Available" {...a11yTabProps(1)} />
          <Tab label="Unavailable" disabled {...a11yTabProps(2)} />
        </Tabs>
      </Box>
    )
  },
}
