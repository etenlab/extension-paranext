import { ThemeOptions } from '@mui/material';
import { colors } from './palette';

export function getTypographyPalette(mode: 'light' | 'dark'): ThemeOptions {
  return {
    typography: {
      fontFamily: ['Inter'].join(','),
      fontSize: 12,
      h1: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '36px',
        letterSpacing: '-0.02em',
        textTransform: 'capitalize',
        color: colors['gray'][mode],
      },
      h2: {
        fontWeight: 600,
        fontSize: 20,
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        textTransform: 'capitalize',
        color: colors['gray'][mode],
      },
      h3: {
        fontWeight: 600,
        fontSize: 18,
        lineHeight: '28px',
        letterSpacing: '-0.02em',
        textTransform: 'capitalize',
        color: colors['gray'][mode],
      },
      body1: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '26px',
        display: 'flex',
        alignItems: 'center',
        color: colors['gray'][mode],
      },
      body2: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        color: colors['gray'][mode],
      },
      body3: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        color: colors['gray'][mode],
      },
      overline: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        color: colors['gray'][mode],
        letterSpacing: '0.05em',
      },
      caption: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '30px',
        display: 'flex',
        alignItems: 'center',
        color: colors['gray'][mode],
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        color: colors['gray'][mode],
      },
      subtitle2: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '18px',
        color: colors['gray'][mode],
      },
    },
  };
}
