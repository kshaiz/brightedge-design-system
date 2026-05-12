import { Slider as MuiSlider, SliderProps as MuiSliderProps, Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface SliderProps extends MuiSliderProps {
  /** Show min/max labels below the track. Default: true for horizontal sliders. */
  showEndLabels?: boolean
}

export function Slider({
  min = 0,
  max = 100,
  value: valueProp,
  defaultValue,
  onChange,
  marks,
  orientation = 'horizontal',
  showEndLabels = true,
  size = 'medium',
  color = 'primary',
  ...props
}: SliderProps) {
  const isDiscrete = marks !== undefined && marks !== false
  const isHorizontal = orientation === 'horizontal'
  const isControlled = valueProp !== undefined

  const [uncontrolledValue, setUncontrolledValue] = useState<number | number[]>(
    defaultValue !== undefined ? (defaultValue as number | number[]) : min
  )
  const currentValue = isControlled ? valueProp! : uncontrolledValue

  const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
    if (!isControlled) setUncontrolledValue(value)
    onChange?.(event, value, activeThumb)
  }

  const displayValue = Array.isArray(currentValue)
    ? `${currentValue[0]}–${currentValue[1]}`
    : String(currentValue)

  const sliderEl = (
    <MuiSlider
      min={min}
      max={max}
      value={isControlled ? valueProp : uncontrolledValue}
      onChange={handleChange}
      marks={marks}
      orientation={orientation}
      size={size}
      color={color}
      valueLabelDisplay={isDiscrete ? 'auto' : 'off'}
      {...props}
    />
  )

  if (!isHorizontal) {
    return sliderEl
  }

  return (
    <Box>
      {isDiscrete ? (
        sliderEl
      ) : (
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Box sx={{ flexGrow: 1 }}>{sliderEl}</Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ flexShrink: 0, minWidth: 28, textAlign: 'right' }}
          >
            {displayValue}
          </Typography>
        </Stack>
      )}
      {showEndLabels && (
        <Stack direction="row" sx={{ justifyContent: 'space-between', mt: -0.5 }}>
          <Typography variant="caption" color="text.secondary">{min}</Typography>
          <Typography variant="caption" color="text.secondary">{max}</Typography>
        </Stack>
      )}
    </Box>
  )
}
