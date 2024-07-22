import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.js';
import {
  CircularProgress,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTheme } from './store';
import { useMemo } from 'react';
import { getDesignTokens } from './services';
import CssBaseline from '@mui/material/CssBaseline';

export function App() {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <RouterProvider
        router={router}
        fallbackElement={<CircularProgress />}
        future={{ v7_startTransition: true }}
      />
    </ThemeProvider>
  );
}
