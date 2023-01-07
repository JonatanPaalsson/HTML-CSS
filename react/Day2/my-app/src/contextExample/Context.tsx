import { useState } from "react";

import { ThemeButton, ThemeButtonBad } from "../components";
import NestedComponent1 from "./nestedComponentes/NestedComponent4";
import { ThemeContextProvider } from "./ThemeContext";

const Context = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <ThemeContextProvider>
      <ThemeButton />
      <ThemeButtonBad
        theme={theme}
        callback={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      ></ThemeButtonBad>
      <NestedComponent1 />
    </ThemeContextProvider>
  );
};

export default Context;
