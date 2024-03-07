import { PaletteMode } from '@mui/material'
import { blue, blueGrey } from '@mui/material/colors'

const processPalette = (palette: PaletteMode) => {
  if (palette === 'light') {
    return {
      primary: blueGrey,
      secondary: blue,
    }
  } else {
    return {
      primary: blueGrey,
      secondary: blue,
    }
  }
}

const processTypography = (palette: PaletteMode) => {
  const typographyProperties: { [key: string]: any } = {
    fontFamily: 'Verdana',
    useNextVariants: true,
    h1: {},
  }
  return typographyProperties
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: processPalette(mode),
  typography: processTypography(mode),
  components: {},
  overrides: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
