import type { Meta, StoryObj } from '@storybook/react-vite'
import { LineChart } from './LineChart'

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LineChart>

export const Default: Story = {
  args: {
    title: 'Monthly Traffic',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [
      { name: 'Organic', data: [4200, 5800, 5100, 6700, 7200, 8100] },
      { name: 'Paid',    data: [1200, 1800, 2100, 1900, 2400, 2700] },
    ],
    yAxisLabel: 'Sessions',
  },
}

export const SingleSeries: Story = {
  args: {
    title: 'Keyword Rankings',
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [{ name: 'Avg Position', data: [12, 9, 7, 5] }],
    yAxisLabel: 'Position',
  },
}
