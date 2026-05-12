import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Box, Card, CardContent, Stack } from '@mui/material'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { List, ListItem, ListItemAvatar, ListItemText } from '../List'
import { Skeleton } from './Skeleton'
// @ts-ignore
import instructions from './Skeleton.instructions.md?raw'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
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
type Story = StoryObj<typeof Skeleton>

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 320 }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={320} height={120} />
      <Skeleton variant="rounded" width={120} height={32} />
    </Stack>
  ),
}

// ─── Animation ────────────────────────────────────────────────────────────────

export const Animations: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 320 }}>
      <Skeleton variant="rectangular" height={60} animation="pulse" />
      <Skeleton variant="rectangular" height={60} animation="wave" />
      <Skeleton variant="rectangular" height={60} animation={false} />
    </Stack>
  ),
}

// ─── Card loading ─────────────────────────────────────────────────────────────

export const CardLoading: Story = {
  render: () => {
    const [loaded, setLoaded] = useState(false)
    return (
      <Stack spacing={2}>
        <Button size="small" variant="outlined" onClick={() => setLoaded((v) => !v)}>
          {loaded ? 'Show skeleton' : 'Show content'}
        </Button>
        <Card sx={{ maxWidth: 360 }}>
          {loaded ? (
            <img
              src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="Reptile"
              style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <Skeleton variant="rectangular" height={200} />
          )}
          <CardContent>
            {loaded ? (
              <>
                <Box sx={{ fontSize: '1.25rem', fontWeight: 500 }}>Lizard</Box>
                <Box sx={{ fontSize: '0.875rem', color: 'text.secondary', mt: 0.5 }}>
                  Lizards are a widespread group of squamate reptiles.
                </Box>
              </>
            ) : (
              <>
                <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '0.875rem', width: '60%' }} />
              </>
            )}
          </CardContent>
        </Card>
      </Stack>
    )
  },
}

// ─── List loading ─────────────────────────────────────────────────────────────

export const ListLoading: Story = {
  render: () => (
    <Box sx={{ width: 320 }}>
      <List>
        {Array.from({ length: 4 }).map((_, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} />}
              secondary={<Skeleton variant="text" sx={{ fontSize: '0.875rem', width: '60%' }} />}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  ),
}

// ─── Conditional render ───────────────────────────────────────────────────────

export const ConditionalRender: Story = {
  render: () => {
    const [data, setData] = useState<string | null>(null)

    const load = () => {
      setData(null)
      setTimeout(() => setData('https://mui.com/static/images/avatar/1.jpg'), 2000)
    }

    return (
      <Stack spacing={2} alignItems="flex-start">
        <Button onClick={load}>Load avatar</Button>
        {data ? (
          <Avatar src={data} alt="User" size={40} />
        ) : (
          <Skeleton variant="circular" width={40} height={40} />
        )}
      </Stack>
    )
  },
}
