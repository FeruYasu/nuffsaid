import { ReactNode } from "react";

import { ThemeColorProvider } from "./ThemeColor";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ThemeColorProvider>{children}</ThemeColorProvider>;
}
