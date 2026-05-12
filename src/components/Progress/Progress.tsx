import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Box,
  Typography,
} from '@mui/material'

// ─── LinearProgress ───────────────────────────────────────────────────────────

export interface LinearProgressProps extends MuiLinearProgressProps {
  showLabel?: boolean
}

export function LinearProgress({ showLabel = false, value, color = 'primary', variant = 'indeterminate', ...props }: LinearProgressProps) {
  const bar = (
    <MuiLinearProgress variant={variant} value={value} color={color} {...props} />
  )

  if (!showLabel) return bar

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ flexGrow: 1 }}>{bar}</Box>
      <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, minWidth: 35, textAlign: 'right' }}>
        {typeof value === 'number' ? `${Math.round(value)}%` : ''}
      </Typography>
    </Box>
  )
}

// ─── CircularProgress ─────────────────────────────────────────────────────────

export interface CircularProgressProps extends MuiCircularProgressProps {
  showLabel?: boolean
}

export function CircularProgress({ showLabel = false, value, size = 40, color = 'primary', variant = 'indeterminate', ...props }: CircularProgressProps) {
  if (!showLabel) {
    return <MuiCircularProgress variant={variant} value={value} size={size} color={color} {...props} />
  }

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <MuiCircularProgress variant={variant} value={value} size={size} color={color} {...props} />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" color="text.secondary" component="div">
          {typeof value === 'number' ? `${Math.round(value)}%` : ''}
        </Typography>
      </Box>
    </Box>
  )
}
