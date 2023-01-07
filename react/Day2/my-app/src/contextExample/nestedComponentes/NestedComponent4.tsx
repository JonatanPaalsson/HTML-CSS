import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const NestedComponent1 = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  return <div>{themeContext.theme}</div>;
};

export default NestedComponent1;
