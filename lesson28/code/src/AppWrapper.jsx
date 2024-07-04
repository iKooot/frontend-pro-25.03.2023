import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { App } from "./App.jsx";
import { ThemeContextProvider, THEME_DARK } from "./context/index.js";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  return (
    <CssBaseline>
      <ThemeContextProvider value={{ theme, setTheme }}>
        <App />
      </ThemeContextProvider>
    </CssBaseline>
  );
}
