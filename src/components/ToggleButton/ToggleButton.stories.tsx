import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import { useState } from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import BarChartIcon from '@mui/icons-material/BarChart'
import { ToggleButton, ToggleButtonGroup } from './ToggleButton'
// @ts-ignore
import instructions from './ToggleButton.instructions.md?raw'

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButton',
  component: ToggleButtonGroup,
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
type Story = StoryObj<typeof ToggleButtonGroup>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <ToggleButtonGroup
      {...args}
      defaultValue="center"
      buttons={[
        { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
        { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
        { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
        { value: 'justify', icon: <FormatAlignJustifyIcon />, 'aria-label': 'Justify' },
      ]}
    />
  ),
  args: {
    exclusive: true,
    size: 'medium',
    color: 'primary',
  },
}

// ─── Standalone ToggleButton ──────────────────────────────────────────────────

export const Standalone: Story = {
  render: () => {
    const [selected, setSelected] = useState(false)
    return (
      <Stack direction="row" spacing={1}>
        <ToggleButton
          value="bold"
          selected={selected}
          onChange={() => setSelected(!selected)}
          aria-label="Bold"
        >
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="Italic (disabled)" disabled>
          <FormatItalicIcon />
        </ToggleButton>
      </Stack>
    )
  },
}

// ─── Exclusive (one selection) ────────────────────────────────────────────────

export const Exclusive: Story = {
  name: 'Exclusive — one selection',
  render: () => {
    const [view, setView] = useState<string | null>('list')
    return (
      <ToggleButtonGroup
        exclusive
        value={view}
        onChange={(_, v) => { if (v !== null) setView(v) }}
        buttons={[
          { value: 'list', icon: <ViewListIcon />, 'aria-label': 'List view' },
          { value: 'grid', icon: <ViewModuleIcon />, 'aria-label': 'Grid view' },
          { value: 'chart', icon: <BarChartIcon />, 'aria-label': 'Chart view' },
        ]}
      />
    )
  },
}

// ─── Multiple selection ───────────────────────────────────────────────────────

export const Multiple: Story = {
  name: 'Multiple selection',
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold'])
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={(_, v) => setFormats(v)}
        buttons={[
          { value: 'bold', icon: <FormatBoldIcon />, 'aria-label': 'Bold' },
          { value: 'italic', icon: <FormatItalicIcon />, 'aria-label': 'Italic' },
          { value: 'underline', icon: <FormatUnderlinedIcon />, 'aria-label': 'Underline' },
          { value: 'strikethrough', icon: <FormatStrikethroughIcon />, 'aria-label': 'Strikethrough' },
        ]}
      />
    )
  },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <ToggleButtonGroup
          key={size}
          exclusive
          defaultValue="left"
          size={size}
          buttons={[
            { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
            { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
            { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
          ]}
        />
      ))}
    </Stack>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['primary', 'secondary', 'standard'] as const).map((color) => (
        <ToggleButtonGroup
          key={color}
          exclusive
          defaultValue="center"
          color={color}
          buttons={[
            { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
            { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
            { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
          ]}
        />
      ))}
    </Stack>
  ),
}

// ─── Vertical orientation ─────────────────────────────────────────────────────

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('left')
    return (
      <ToggleButtonGroup
        exclusive
        orientation="vertical"
        value={value}
        onChange={(_, v) => { if (v !== null) setValue(v) }}
        buttons={[
          { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
          { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
          { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
          { value: 'justify', icon: <FormatAlignJustifyIcon />, 'aria-label': 'Justify' },
        ]}
      />
    )
  },
}

// ─── Overflow (5+ buttons) ────────────────────────────────────────────────────

export const Overflow: Story = {
  name: 'Overflow — 5+ buttons collapse to menu',
  render: () => {
    const [value, setValue] = useState<string | null>('left')
    return (
      <ToggleButtonGroup
        exclusive
        value={value}
        onChange={(_, v) => { if (v !== null) setValue(v) }}
        buttons={[
          { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
          { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
          { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
          { value: 'justify', icon: <FormatAlignJustifyIcon />, 'aria-label': 'Justify' },
          { value: 'indent', icon: <FormatIndentIncreaseIcon />, 'aria-label': 'Indent' },
        ]}
      />
    )
  },
}

// ─── Overflow — multiple (5+ buttons) ────────────────────────────────────────

export const OverflowMultiple: Story = {
  name: 'Overflow — multiple selection, 5+ buttons',
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold', 'indent'])
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={(_, v) => setFormats(v)}
        buttons={[
          { value: 'bold', icon: <FormatBoldIcon />, 'aria-label': 'Bold' },
          { value: 'italic', icon: <FormatItalicIcon />, 'aria-label': 'Italic' },
          { value: 'underline', icon: <FormatUnderlinedIcon />, 'aria-label': 'Underline' },
          { value: 'strikethrough', icon: <FormatStrikethroughIcon />, 'aria-label': 'Strikethrough' },
          { value: 'indent', icon: <FormatIndentIncreaseIcon />, 'aria-label': 'Indent' },
        ]}
      />
    )
  },
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <ToggleButtonGroup
      exclusive
      disabled
      defaultValue="center"
      buttons={[
        { value: 'left', icon: <FormatAlignLeftIcon />, 'aria-label': 'Left' },
        { value: 'center', icon: <FormatAlignCenterIcon />, 'aria-label': 'Center' },
        { value: 'right', icon: <FormatAlignRightIcon />, 'aria-label': 'Right' },
      ]}
    />
  ),
}
