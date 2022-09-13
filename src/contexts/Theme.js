import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ThemeContext = React.createContext("theme");

// https://mui.com/material-ui/customization/palette/
const DefaultTheme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#0E0E0F",
    },
  },
});
const DarkTheme = createTheme({});

export const MyThemeProvider = (props) => {
  const [theme, setTheme] = useState("default");

  let theTheme;
  switch (theme) {
    case "dark":
      theTheme = DarkTheme;
      break;

    default:
      theTheme = DefaultTheme;
      break;
  }
  console.log("current theme", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
