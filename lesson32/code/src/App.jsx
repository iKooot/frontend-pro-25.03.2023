import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  CssBaseline,
  Box,
} from "@mui/material";
import {
  Footer,
  Header,
  PageLayout,
  Title,
  LogIn,
} from "./components/index.js";
import { getDesignTokens } from "./services/matherial-theme.js";
import { selectTheme } from "./store/app";

export function App() {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline>
        <PageLayout renderHeader={<Header />} renderFooter={<Footer />}>
          <Title />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LogIn />
          </Box>
        </PageLayout>
      </CssBaseline>
    </ThemeProvider>
  );
}
