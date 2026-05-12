import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
  AvatarGroup as MuiAvatarGroup,
  AvatarGroupProps as MuiAvatarGroupProps,
} from '@mui/material'

// ─── Avatar ──────────────────────────────────────────────────────────────────

export type AvatarSize = 18 | 24 | 32 | 40

const fontSizeMap: Record<AvatarSize, string> = {
  18: '0.625rem',
  24: '0.75rem',
  32: '0.875rem',
  40: '1rem',
}

export interface AvatarProps extends MuiAvatarProps {
  size?: AvatarSize
}

export function Avatar({ size = 40, sx, ...props }: AvatarProps) {
  return (
    <MuiAvatar
      sx={{ width: size, height: size, fontSize: fontSizeMap[size], ...sx }}
      {...props}
    />
  )
}

// ─── AvatarGroup ─────────────────────────────────────────────────────────────

export interface AvatarGroupProps extends MuiAvatarGroupProps {
  size?: AvatarSize
}

export function AvatarGroup({ size = 40, sx, ...props }: AvatarGroupProps) {
  return (
    <MuiAvatarGroup
      sx={{
        '& .MuiAvatar-root': {
          width: size,
          height: size,
          fontSize: fontSizeMap[size],
        },
        ...sx,
      }}
      {...props}
    />
  )
}
