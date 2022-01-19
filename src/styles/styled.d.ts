import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    title: string;

    colors: {
      background: string;

      error: string;
      warning: string;
      info: string;
      text: string;
      border: string;
    };
  }
}
