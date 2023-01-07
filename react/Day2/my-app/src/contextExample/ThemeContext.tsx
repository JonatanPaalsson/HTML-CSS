import React, { createContext, useState } from "react";

type theme = "dark" | "light";

type contextType = {
  theme: theme;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};

type props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<contextType | null>(null);

export const ThemeContextProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = useState<theme>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
