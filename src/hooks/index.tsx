import { ReactNode } from "react";

import { ThemeColorProvider } from "./ThemeColor";
import { MessagesProvider } from "./Messages";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <MessagesProvider>
      <ThemeColorProvider>{children}</ThemeColorProvider>
    </MessagesProvider>
  );
}
