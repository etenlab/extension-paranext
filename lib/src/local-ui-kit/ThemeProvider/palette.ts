import { ThemeOptions } from '@mui/material';

export const designColors = {
  'blue-primary': '#1F77DF',
  'light-blue': '#E3EAF3',
  disable: '#F3F6F9',
  dark: '#1B1B1B',
  gray: '#5C6673',
  'middle-gray': '#C2CBD7',
  white: '#FFFFFF',
  red: '#E04E4E',
  'light-red': '#FFE4E4',
  green: '#4ABE95',
  'light-green': '#DAF2EA',
  yellow: '#FCBB14',
  'middle-yellow': '#FFF1CE',
  'light-yellow': '#FFF9EA',
  'light-gray': '#F0F0E7',
  'turquoise-light': '#60D0B2',
  'turquoise-dark': '#4EAA91',
  'darker-gray': '#31373A',
  'lighter-gray': '#707070',
  'light-gray2': '#e3e3d9',
  'divider-color': '#D9E1EA',
  'dark/bg': '#071322',
  'dark/bg2': '#11233A',
  'dark/stroke': '#616F82',
  'dark/red-bg': '#3F1919',
  'dark/red': '#E86161',
  'dark/green': '#0D2F29',
};

export const colors = {
  'blue-primary': {
    light: designColors['blue-primary'],
    dark: designColors['blue-primary'],
  },
  'light-blue': {
    light: designColors['light-blue'],
    dark: '#616F82', // not defined
  },
  disable: {
    light: designColors['disable'],
    dark: '#424242',
  },
  dark: {
    light: '#1B1B1B',
    dark: designColors['dark'],
  },
  gray: {
    light: designColors['gray'],
    dark: '#eee',
  },
  'middle-gray': {
    light: designColors['middle-gray'],
    dark: '#bdbdbd',
  },
  white: {
    light: designColors['white'],
    dark: '#212121',
  },
  red: {
    light: designColors['red'],
    dark: '#d32f2f',
  },
  'light-red': {
    light: designColors['light-red'],
    dark: '#880e4f',
  },
  green: {
    light: designColors['green'],
    dark: '#a5d6a7',
  },
  'light-green': {
    light: designColors['light-green'],
    dark: '#558b2f',
  },
  yellow: {
    light: designColors['yellow'],
    dark: '#e65100',
  },
  'middle-yellow': {
    light: designColors['middle-yellow'],
    dark: '#ff8f00',
  },
  'light-yellow': {
    light: designColors['light-yellow'],
    dark: '#ffa000',
  },
  'light-gray': {
    light: designColors['light-gray'],
    dark: '#F0F0E7',
  },
  'turquoise-light': {
    light: designColors['turquoise-light'],
    dark: '#60D0B2',
  },
  'turquoise-dark': {
    light: designColors['turquoise-dark'],
    dark: '#4EAA91',
  },
  'darker-gray': {
    light: designColors['darker-gray'],
    dark: '#31373A',
  },
  'lighter-gray': {
    light: designColors['lighter-gray'],
    dark: '#707070',
  },
  'light-gray2': {
    light: designColors['light-gray2'],
    dark: '#e3e3d9',
  },
  'divider-color': {
    light: designColors['divider-color'],
    dark: '#616F82',
  },
};

export function getColorPalette(mode: 'light' | 'dark'): ThemeOptions {
  return {
    palette: {
      'blue-primary': {
        main: colors['blue-primary'][mode],
        contrastText: colors['white'][mode],
      },
      'light-blue': {
        main: colors['light-blue'][mode],
        contrastText: colors['gray'][mode],
      },
      disable: {
        main: colors['disable'][mode],
      },
      dark: {
        main: colors['dark'][mode],
        contrastText: '#fafafa',
      },
      gray: {
        main: colors['gray'][mode],
        contrastText: '',
      },
      'middle-gray': {
        main: colors['middle-gray'][mode],
        contrastText: '#eee',
      },
      white: {
        main: colors['white'][mode],
        contrastText: '@212121',
      },
      red: {
        main: colors['red'][mode],
        contrastText: colors['white'][mode],
      },
      'light-red': {
        main: colors['light-red'][mode],
      },
      green: {
        main: colors['green'][mode],
        contrastText: colors['white'][mode],
      },
      'light-green': {
        main: colors['light-green'][mode],
      },
      yellow: {
        main: colors['yellow'][mode],
      },
      'middle-yellow': {
        main: colors['middle-yellow'][mode],
      },
      'light-yellow': {
        main: colors['light-yellow'][mode],
      },
      'turquoise-dark': {
        main: colors['turquoise-dark'][mode],
      },
      'turquoise-light': {
        main: colors['turquoise-light'][mode],
      },
      'darker-gray': {
        main: colors['darker-gray'][mode],
      },
      'divider-color': {
        main: colors['divider-color'][mode],
      },
      'lighter-gray': {
        main: colors['lighter-gray'][mode],
      },
      text: {
        'blue-primary': colors['blue-primary'][mode],
        'light-blue': colors['light-blue'][mode],
        disable: colors['disable'][mode],
        dark: colors['dark'][mode],
        gray: colors['gray'][mode],
        'middle-gray': colors['middle-gray'][mode],
        white: colors['white'][mode],
        red: colors['red'][mode],
        'light-red': colors['light-red'][mode],
        green: colors['green'][mode],
        'light-green': colors['light-green'][mode],
        yellow: colors['yellow'][mode],
        'middle-yellow': colors['middle-yellow'][mode],
        'light-yellow': colors['light-yellow'][mode],
        'darker-gray': colors['darker-gray'][mode],
        'turquoise-light': colors['turquoise-light'][mode],
        'turquoise-dark': colors['turquoise-dark'][mode],
        'light-gray2': colors['light-gray2'][mode],
        'light-gray': colors['light-gray'][mode],
        'divider-color': colors['divider-color'][mode],
      },
      background: {
        'darker-gray': colors['darker-gray'][mode],
        'light-gray2': colors['light-gray2'][mode],
        'light-gray': colors['light-gray'][mode],
        'turquoise-light': colors['turquoise-light'][mode],
        'turquoise-dark': colors['turquoise-dark'][mode],
        white: colors['white'][mode],
      },
    },
  };
}
