import React, { useRef } from 'react'
import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  Zoom,
} from '@mui/material'
import { Instance } from '@popperjs/core'

export interface TooltipProps extends Omit<MuiTooltipProps, 'slots' | 'slotProps'> {}

export function Tooltip({ children, placement = 'top', ...props }: TooltipProps) {
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const popperRef = useRef<Instance>(null)

  const child = children as React.ReactElement

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY }
    popperRef.current?.update()
    child.props.onMouseMove?.(event)
  }

  return (
    <MuiTooltip
      placement={placement}
      {...props}
      slots={{ transition: Zoom }}
      slotProps={{
        tooltip: { sx: { maxWidth: 360 } },
        popper: {
          popperRef,
          anchorEl: {
            getBoundingClientRect: () =>
              new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0),
          },
        },
      }}
    >
      {React.cloneElement(child, { onMouseMove: handleMouseMove })}
    </MuiTooltip>
  )
}
