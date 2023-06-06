import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  GlobalStyles,
  createTheme,
  useMediaQuery,
  PaletteColorOptions,
} from '@mui/material';
import '@fontsource/inter';
import '@fontsource/noto-serif-display';

import { deepmerge } from '@mui/utils';
import { getThemeOptions } from './themeOptions';
import { colors } from './palette';

export const mode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const ColorModeContext = createContext({
  setColorMode: (colorMode: 'light' | 'dark') => {
    console.log(colorMode);
  },
  getColor: (color: string) => {
    return color;
  },
});

export function useColorModeContext() {
  const context = useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error(
      'useColorModeContext must be within ThemeProvider which provided by @eten-lab/ui-kit package!',
    );
  }

  return context;
}

type ThemeProviderProps = {
  autoDetectPrefersDarkMode?: boolean;
  children?: React.ReactNode;
};

export function ThemeProvider({
  children,
  autoDetectPrefersDarkMode = true,
}: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (!autoDetectPrefersDarkMode) {
      return;
    }

    if (prefersDarkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [prefersDarkMode, autoDetectPrefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      setColorMode: (colorMode: 'light' | 'dark') => {
        setMode(colorMode);
      },
      getColor: (colorName: string) => {
        return colors[colorName as keyof typeof colors][mode];
      },
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme(
        deepmerge(getThemeOptions(mode), {
          palette: {
            mode,
          },
        }),
      ),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles
          styles={() => ({
            '*, *::before, *::after, html': {
              boxSizing: 'border-box',
            },
            body: {
              fontFamily: 'Inter',
            },
          })}
        />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    disable: true;
    gray: true;
    dark: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    disable: true;
    gray: true;
    dark: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    disable: true;
    gray: true;
    'middle-gray': true;
    red: true;
    'light-red': true;
    green: true;
    'blue-primary': true;
    'light-blue': true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    red: true;
  }
}

declare module '@mui/material/FormLabel' {
  interface FormLabelPropsColorOverrides {
    gray: true;
  }
}

declare module '@mui/material/FormControlLabel' {
  interface FormControlLabelPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/ListItemText' {
  interface ListItemTextPropsColorOverrides {
    dark: true;
  }
}

declare module '@mui/material/Link' {
  interface LinkPropsColorOverrides {
    gray: true;
  }
}

declare module '@mui/material/styles' {
  interface CustomPalette {
    'blue-primary': PaletteColorOptions;
    'light-blue': PaletteColorOptions;
    disable: PaletteColorOptions;
    dark: PaletteColorOptions;
    gray: PaletteColorOptions;
    'middle-gray': PaletteColorOptions;
    white: PaletteColorOptions;
    red: PaletteColorOptions;
    'light-red': PaletteColorOptions;
    green: PaletteColorOptions;
    'light-green': PaletteColorOptions;
    yellow: PaletteColorOptions;
    'middle-yellow': PaletteColorOptions;
    'light-yellow': PaletteColorOptions;
    'turquoise-light': PaletteColorOptions;
    'turquoise-dark': PaletteColorOptions;
    'darker-gray': PaletteColorOptions;
    'lighter-gray': PaletteColorOptions;
    'divider-color': PaletteColorOptions;
  }

  interface CustomTypeText {
    'blue-primary': string;
    'light-blue': string;
    disable: string;
    dark: string;
    gray: string;
    'middle-gray': string;
    white: string;
    red: string;
    'light-red': string;
    green: string;
    'light-green': string;
    yellow: string;
    'middle-yellow': string;
    'light-yellow': string;
    'turquoise-light': string;
    'turquoise-dark': string;
    'darker-gray': string;
    'lighter-gray': string;
    'light-gray2': string;
    'light-gray': string;
    'divider-color': string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypeText extends CustomTypeText {}

  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }

  interface TypeBackground {
    'darker-gray': string;
    'light-gray': string;
    'light-gray2': string;
    'turquoise-dark': string;
    'turquoise-light': string;
    white: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
