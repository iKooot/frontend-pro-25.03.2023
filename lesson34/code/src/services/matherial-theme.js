import { DARK_THEME } from './constants.js';
import { orange, pink, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === DARK_THEME
      ? {
          primary: {
            main: orange[800],
          },
          secondary: {
            main: pink[500],
          },
          background: {
            default: grey[900],
            paper: grey[800],
          },
          text: {
            primary: grey[50],
            secondary: grey[300],
          },
          common: {
            white: '#fff',
            black: '#000',
          },
          divider: grey[600],
        }
      : {
          primary: {
            main: orange[800],
          },
          secondary: {
            main: pink[500],
          },
          background: {
            default: grey[50],
            paper: grey[100],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          common: {
            white: '#fff',
            black: '#000',
          },
          divider: grey[400],
        }),
  },
  spacing: 4,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'bold',
    },
  },
});
