import {
  ThemeContextConsumer,
  THEME_LIGHT,
  THEME_DARK,
} from "../../../context/index.js";

export function ThemeButtonConsumer({ className = "", onClick, ...rest }) {
  return (
    <ThemeContextConsumer>
      {({ theme, setTheme }) => {
        const content = theme === "dark" ? "light" : "dark";
        const clickHandler = (e) => {
          if (onClick) onClick(e);
          setTheme((prevTheme) =>
            prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
          );
        };
        return (
          <button
            className={`${className} ${theme}`}
            onClick={clickHandler}
            {...rest}
          >
            Consumer {content}
          </button>
        );
      }}
    </ThemeContextConsumer>
  );
}
