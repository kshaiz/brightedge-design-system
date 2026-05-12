import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  // ─── Palette ────────────────────────────────────────────────────────────────
  // palette: {
  //   primary:   { main: '#' },
  //   secondary: { main: '#' },
  //   error:     { main: '#' },
  //   warning:   { main: '#' },
  //   info:      { main: '#' },
  //   success:   { main: '#' },
  //   background: { default: '#', paper: '#' },
  //   text:       { primary: '#', secondary: '#' },
  // },

  // ─── Typography ─────────────────────────────────────────────────────────────
  // typography: {
  //   fontFamily: '"Inter", "Roboto", sans-serif',
  //   h1: { fontSize: '2.5rem', fontWeight: 700 },
  //   h2: { fontSize: '2rem',   fontWeight: 700 },
  //   h3: { fontSize: '1.5rem', fontWeight: 600 },
  //   body1: { fontSize: '1rem' },
  //   body2: { fontSize: '0.875rem' },
  // },

  // ─── Shape ──────────────────────────────────────────────────────────────────
  // shape: { borderRadius: 8 },

  // ─── Spacing ────────────────────────────────────────────────────────────────
  // spacing: 8,

  // ─── Component overrides ────────────────────────────────────────────────────
  components: {
    // FormLabel sits 0.5 spacing units above its accompanying input.
    // Never use InputLabel in product code — use FormLabel instead.
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: any }) => ({
          marginBottom: theme.spacing(0.5),
        }),
      },
    },

    // Checkbox is always to the left of its label (labelPlacement="end").
    // align-items: flex-start + -9px top margin on the control keeps the
    // checkbox icon vertically centered on the first line of multi-line labels.
    MuiFormControlLabel: {
      defaultProps: {
        labelPlacement: 'end',
      },
      styleOverrides: {
        root: {
          alignItems: 'flex-start',
          '& .MuiCheckbox-root': {
            marginTop: '-9px',
          },
          '& .MuiRadio-root': {
            marginTop: '-9px',
          },
        },
      },
    },

    // Checkbox groups default to a horizontal row; wrap to column only when
    // space is too narrow (consumers apply column orientation via the row prop).
    MuiFormGroup: {
      defaultProps: {
        row: true,
      },
    },
  },
})
