# Card — AI Instructions

## When to use
- Use `Card` as the primary container for **charts and data visualisations** — pair `CardHeader` with `CardContent` holding a Highcharts component
- Use for grouped related content that needs visual separation from the page (metrics, summaries, tiles)
- Do **not** use Card for navigation or interactive list items — use List or Drawer for those

## Basic usage
```tsx
<Card>
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      Content goes here.
    </Typography>
  </CardContent>
</Card>
```

Cards default to `variant="outlined"`.

## Chart card (primary use case)
```tsx
<Card>
  <CardHeader
    title="Organic Traffic"
    subheader="Last 30 days"
    action={<IconButton><MoreVertIcon /></IconButton>}
  />
  <CardContent>
    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
  </CardContent>
</Card>
```

Always use `CardHeader` + `CardContent` for chart cards. Do not use `CardMedia` for charts.

## With actions
```tsx
<Card>
  <CardHeader title="Keyword Set" subheader="Updated today" />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      124 keywords across 3 groups.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">View all</Button>
    <Button size="small" variant="contained">Edit</Button>
  </CardActions>
</Card>
```

## Metric tile
```tsx
<Card>
  <CardContent>
    <Typography variant="overline" color="text.secondary">Impressions</Typography>
    <Typography variant="h4">1.2M</Typography>
    <Typography variant="body2" color="success.main">+8% vs last month</Typography>
  </CardContent>
</Card>
```

## Do not
- Do not nest Cards inside Cards
- Do not use Card for navigation — use Tabs, List, or Drawer instead
- Do not use CardMedia for charts — wrap the chart directly in CardContent
- Do not use `elevation` variant — always use `outlined`
