import { useState } from "react";

import { ThemeButton, ThemeButtonBad } from "../components";
import NestedComponent1 from "./nestedComponentes/NestedComponent1";
import { ThemeContextProvider, Theme } from "./ThemeContext";

const Context = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContextProvider>
      {/*       <ThemeButton />
      <ThemeButtonBad
        theme={theme}
        callback={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      ></ThemeButtonBad> */}
      <NestedComponent1 changeTheme={setTheme} theme={theme} />
    </ThemeContextProvider>
  );
};

export default Context;
