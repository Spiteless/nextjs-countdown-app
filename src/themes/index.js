import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {purple, teal, green, grey, yellow, red, orange} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: "#FF8F8F",
    },
    dark: {
      main: grey[900],
      900: grey[900],
      800: grey[800],
      700: grey[700],
      600: grey[600],
      500: grey[500],
      400: grey[400],
      300: grey[300],
      200: grey[200],
      100: grey[100],
    },
    light: {
      main: grey[50]
    }
  },
  utils: {
    backgroundFocus: ({ratio, bg, box = 50}) => (
      `${((bg + (50 - box) / ratio - 50) * (ratio / (ratio - 1)) + 50) * 1}%`
    )
  }
}
);

theme = responsiveFontSizes(theme);


export default theme;