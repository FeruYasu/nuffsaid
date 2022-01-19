import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { DefaultTheme } from "styled-components";

import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

interface ThemeColorProps {
  children: ReactNode;
}

interface ThemeColorContextData {
  themeColor: any;
  setThemeColor: (theme: DefaultTheme) => void;
}

export const ThemeColorContext = createContext<ThemeColorContextData>(
  {} as ThemeColorContextData
);

export function ThemeColorProvider({ children }: ThemeColorProps) {
  const [themeColor, setThemeColor] = useState<DefaultTheme>(light);

  useEffect(() => {
    if (localStorage) {
      const theme = JSON.parse(localStorage.getItem("theme") || "{}");
      theme === "dark" ? setThemeColor(dark) : setThemeColor(light);
    }
  }, []);

  useEffect(() => {
    localStorage &&
      localStorage.setItem("theme", JSON.stringify(themeColor?.title));
  }, [themeColor]);

  return (
    <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColor() {
  return useContext(ThemeColorContext);
}
