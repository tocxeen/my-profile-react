import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: {
    light: "#66b2ff",
    main: "#132f4c",
    dark: "#0a1929",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ffb647",
    main: "#ff9900",
    dark: "#b86e00",
    contrastText: "#000",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      light: "#66b2ff",
      main: "#132f4c",
      dark: "#0a1929",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffb647",
      main: "#ff9900",
      dark: "#b86e00",
      contrastText: "#000",
    },
  },

  typography: {
    // fontFamily: ["Gotham-Book"].join(","),
  },
});

export default theme;
