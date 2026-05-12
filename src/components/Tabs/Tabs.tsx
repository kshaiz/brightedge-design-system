import React from 'react'
import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  Tab as MuiTab,
  TabProps as MuiTabProps,
} from '@mui/material'

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export interface TabsProps extends MuiTabsProps {}

export function Tabs({ orientation = 'horizontal', ...props }: TabsProps) {
  return <MuiTabs orientation={orientation} {...props} />
}

// ─── Tab ──────────────────────────────────────────────────────────────────────

export interface TabProps extends MuiTabProps {
  // iconPosition defaults to "start" (left) per BrightEdge guidelines
}

export function Tab({ iconPosition = 'start', ...props }: TabProps) {
  return <MuiTab iconPosition={iconPosition} {...props} />
}

// ─── TabPanel ─────────────────────────────────────────────────────────────────

export interface TabPanelProps {
  children?: React.ReactNode
  value: number | string
  index: number | string
  sx?: MuiTabProps['sx']
}

export function TabPanel({ children, value, index, sx, ...props }: TabPanelProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...props}
    >
      {value === index && children}
    </div>
  )
}

export function a11yTabProps(index: number | string) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}
