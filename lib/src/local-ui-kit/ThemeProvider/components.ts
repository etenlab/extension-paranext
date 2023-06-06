import { ThemeOptions, PaletteColor } from '@mui/material';

export const components: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;
          const redColor = (theme.palette['red'] as PaletteColor).main;

          return {
            '& .MuiFormHelperText-root': {
              color: redColor,
            },
            '& .MuiInputBase-root': {
              borderRadius: '10px !important',
            },
            '& label': {
              lineHeight: '1.1375em',
            },
            '& input': {
              padding: '12.5px 14px',
              color: `${mainColor} !important`,
            },
            '& .MuiInputAdornment-root': {
              color: `${mainColor} !important`,
              opacity: 0.54,
            },
            '& .MuiInputBase-multiline': {
              padding: '12.5px 14px !important',
              '& textarea': {
                minHeight: '203px',
                color: `${mainColor} !important`,
              },
            },
          };
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            paddingRight: '9px !important',
          },
          '& .MuiIconButton-sizeMedium': {
            padding: '3px !important',
          },
          '& label': {
            lineHeight: '1.1375em',
          },
          '& input': {
            paddingTop: '3.5px !important',
            paddingBottom: '3.5px !important',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;
          const grayColor = (theme.palette['middle-gray'] as PaletteColor).main;

          return {
            color: grayColor,
            '&.Mui-checked': {
              color: `${mainColor} !important`,
            },
          };
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const color = ownerState.color as keyof typeof theme.palette;
          const mainColor = (theme.palette[color] as PaletteColor).main;
          const grayColor = (theme.palette['middle-gray'] as PaletteColor).main;

          return {
            color: grayColor,
            '&.Mui-checked': {
              color: `${mainColor} !important`,
            },
          };
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          opacity: 0.5,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '26px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '12px 0',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: (theme.palette['divider-color'] as PaletteColor).main,
          marginTop: '-1px !important',
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: ({ theme }) => ({
          borderRadius: '5px',
          backgroundColor: (theme.palette['light-green'] as PaletteColor).main,
          color: (theme.palette.green as PaletteColor).main,
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '20px',
          '& .MuiAlert-icon': {
            color: (theme.palette.green as PaletteColor).main,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: (
            theme.palette[
              ownerState.color as keyof typeof theme.palette
            ] as PaletteColor
          ).main,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
};
