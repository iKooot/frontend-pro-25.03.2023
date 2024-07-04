import { useContext } from "react";
import style from "./ThemeButton.module.scss";
import { THEME_DARK, THEME_LIGHT, themeContext } from "../../../../context";

export function ThemeButton() {
  const { switcher, slider, container } = style;
  const { theme, setTheme } = useContext(themeContext);
  const content = theme === "dark" ? "light" : "dark";

  const clickHandler = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    );
  };

  return (
    <div className={container}>
      <label className={switcher}>
        <input type="checkbox" onChange={clickHandler} />
        <span className={slider}></span>
      </label>
      {content}
    </div>
  );
}
