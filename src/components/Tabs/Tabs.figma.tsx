import figma from '@figma/code-connect'
import { Box } from '@mui/material'
import { Tabs, Tab, TabPanel, a11yTabProps } from './Tabs'

// Tab — Figma props: active (bool), activeColor ("None"|"Primary"|"Secondary"),
// icon (bool), iconPosition ("Up"|"Left"|"Right"), orientation ("Horizontal"|"Vertical"),
// state ("Enabled"|"Disabled"|"Focused"|"Pressed"), tabContent (string), text (bool)
// TODO: Confirm exact Figma property name casing before adding figma.enum()/figma.boolean() mappings.
// Pending Props ✓ in checklist.

figma.connect(
  Tab,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6579-45104',
  {
    example: () => <Tab label="Tab" {...a11yTabProps(0)} />,
  },
)

figma.connect(
  Tabs,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=6579-45197',
  {
    example: () => (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0} onChange={() => {}}>
          <Tab label="Tab" {...a11yTabProps(0)} />
          <Tab label="Tab" {...a11yTabProps(1)} />
          <Tab label="Tab" {...a11yTabProps(2)} />
        </Tabs>
      </Box>
    ),
  },
)

figma.connect(
  TabPanel,
  'https://www.figma.com/design/pGHYdpqzj974tK9DAFv0Tn/BE-MUI-7.2.0?node-id=908-91941',
  {
    example: () => (
      <TabPanel value={0} index={0}>
        Tab panel content goes here.
      </TabPanel>
    ),
  },
)
