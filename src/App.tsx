import { AppProvider } from "./hooks";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import Theme from "./styles/themes/theme";

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Theme>
        <Home />
      </Theme>
    </AppProvider>
  );
}
