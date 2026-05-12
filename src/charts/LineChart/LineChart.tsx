import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useMemo } from 'react'
import { useTheme } from '@mui/material'

export interface LineChartSeries {
  name: string
  data: number[]
}

export interface LineChartProps {
  title?: string
  categories: string[]
  series: LineChartSeries[]
  height?: number
  yAxisLabel?: string
}

export function LineChart({ title, categories, series, height = 400, yAxisLabel }: LineChartProps) {
  const theme = useTheme()

  const options: Highcharts.Options = useMemo(() => ({
    chart: {
      type: 'line',
      height,
      style: { fontFamily: theme.typography.fontFamily ?? 'inherit' },
    },
    title: { text: title ?? '' },
    xAxis: { categories },
    yAxis: { title: { text: yAxisLabel ?? '' } },
    series: series.map((s) => ({ ...s, type: 'line' })),
    credits: { enabled: false },
    colors: [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.success.main,
    ],
  }), [title, categories, series, height, yAxisLabel, theme])

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
