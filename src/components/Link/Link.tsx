import React from 'react'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@mui/material'

export interface LinkProps extends MuiLinkProps {
  external?: boolean
}

export function Link({
  external = false,
  underline = 'always',
  target,
  rel,
  children,
  sx,
  ...props
}: LinkProps) {
  const isExternal = external || target === '_blank'

  return (
    <MuiLink
      underline={underline}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? (rel ?? 'noopener noreferrer') : rel}
      sx={[
        {
          textDecorationStyle: 'dashed',
          '&:hover': {
            textDecorationStyle: 'solid',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
      {isExternal && (
        <OpenInNewOutlinedIcon
          fontSize="inherit"
          sx={{ ml: 0.25, verticalAlign: 'middle', fontSize: '1em' }}
        />
      )}
    </MuiLink>
  )
}
