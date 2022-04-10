import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CountdownProvider } from '../context/AppContext';
import theme from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <CountdownProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CountdownProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
