import { useContext } from "react";
import { capitalize } from "../../utils/utils";
import "./Button.css";
import { ThemeContext } from "../../contextExample/ThemeContext";

export type ThemeButtonProps = {
  theme: string;
  callback: () => void;
};

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <button
      className={`btn ${themeContext.theme}`}
      onClick={() => {
        themeContext.theme === "dark"
          ? themeContext.setTheme("light")
          : themeContext.setTheme("dark");
      }}
    >
      {capitalize(themeContext.theme)}
    </button>
  );
};

export const ThemeButtonBad = ({ theme, callback }: ThemeButtonProps) => {
  return (
    <button className={`btn ${theme}`} onClick={callback}>
      {capitalize(theme)}
    </button>
  );
};

export default ThemeButton;
