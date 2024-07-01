import { App } from "./App.jsx";
import { ThemeContextProvider, THEME_DARK } from "./context/index.js";
import { useState } from "react";

export function AppWrapper() {
  const [theme, setTheme] = useState(THEME_DARK);
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <App />
    </ThemeContextProvider>
  );
}
