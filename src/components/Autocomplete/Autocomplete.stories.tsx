import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react'
import { Autocomplete } from './Autocomplete'
// @ts-ignore
import instructions from './Autocomplete.instructions.md?raw'

const films = [
  'The Shawshank Redemption', 'The Godfather', 'The Dark Knight',
  "Schindler's List", 'Pulp Fiction', 'The Lord of the Rings',
  'Forrest Gump', 'Inception', 'The Matrix', 'Goodfellas',
  'Interstellar', 'The Silence of the Lambs',
]

const groupedFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings', year: 2003 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'Interstellar', year: 2014 },
  { title: 'The Silence of the Lambs', year: 1991 },
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: instructions,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    freeSolo: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium'] },
    fullWidth: { control: 'boolean' },
    limitTags: { control: 'number' },
    noOptionsText: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

// ─── Playground (controls-driven) ────────────────────────────────────────────

export const Playground: Story = {
  args: {
    label: 'Movie',
    options: films,
    size: 'medium',
    fullWidth: false,
    sx: { width: 400 },
  },
}

// ─── Single value ────────────────────────────────────────────────────────────

export const ComboBox: Story = {
  render: () => (
    <Autocomplete label="Movie" options={films} sx={{ width: 400 }} fullWidth={false} />
  ),
}

// ─── Multiple values ─────────────────────────────────────────────────────────

export const MultipleValues: Story = {
  render: () => (
    <Autocomplete
      multiple
      label="Movies"
      options={films}
      filterSelectedOptions
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

export const LimitTags: Story = {
  render: () => (
    <Autocomplete
      multiple
      limitTags={2}
      label="Movies"
      options={films}
      filterSelectedOptions
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

// ─── Free solo / Creatable ───────────────────────────────────────────────────

export const FreeSolo: Story = {
  render: () => (
    <Autocomplete
      freeSolo
      label="Search or enter value"
      options={films}
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

export const Creatable: Story = {
  render: () => (
    <Autocomplete
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      label="Movie or new entry"
      options={films}
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

// ─── Grouped ─────────────────────────────────────────────────────────────────

export const Grouped: Story = {
  render: () => (
    <Autocomplete
      label="Movie"
      options={[...groupedFilms].sort((a, b) => a.year - b.year)}
      groupBy={(option) => String((option as typeof groupedFilms[0]).year)}
      getOptionLabel={(option) => (option as typeof groupedFilms[0]).title}
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

// ─── Disabled options ────────────────────────────────────────────────────────

export const DisabledOptions: Story = {
  render: () => (
    <Autocomplete
      label="Movie"
      options={films}
      getOptionDisabled={(option) => option === 'Inception' || option === 'The Matrix'}
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const SizeMedium: Story = {
  render: () => (
    <Autocomplete size="medium" label="Medium" options={films} sx={{ width: 400 }} fullWidth={false} />
  ),
}

export const SizeSmall: Story = {
  render: () => (
    <Autocomplete size="small" label="Small" options={films} sx={{ width: 400 }} fullWidth={false} />
  ),
}

// ─── States ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <Autocomplete disabled label="Disabled" options={films} sx={{ width: 400 }} fullWidth={false} />
  ),
}

export const WithError: Story = {
  render: () => (
    <Autocomplete
      label="Movie"
      options={films}
      error
      helperText="Please select a valid option."
      sx={{ width: 400 }}
      fullWidth={false}
    />
  ),
}

// ─── Async / Load on open ────────────────────────────────────────────────────

export const LoadOnOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if (!open) { setOptions([]); return }
      setLoading(true)
      const timer = setTimeout(() => { setOptions(films); setLoading(false) }, 1500)
      return () => clearTimeout(timer)
    }, [open])

    return (
      <Autocomplete
        label="Movie (async)"
        options={options}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        loading={loading}
        loadingText="Loading…"
        noOptionsText="No results"
        slotProps={{
          input: { endAdornment: loading ? <CircularProgress size={16} /> : null },
        }}
        sx={{ width: 400 }}
        fullWidth={false}
      />
    )
  },
}
