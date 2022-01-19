import React from "react";

import { ThemeProvider } from "styled-components";

import { useThemeColor } from "../../hooks/ThemeColor";

const Theme: React.FC = ({ children }) => {
  const { themeColor } = useThemeColor();

  return <ThemeProvider theme={themeColor}>{children}</ThemeProvider>;
};

export default Theme;
