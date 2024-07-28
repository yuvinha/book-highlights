import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#403D2D",
    },
    secondary: {
      main: "#F2EDD5",
    },
    background: {
      default: "#F2E6D8",
    },
    text: {
      primary: "#0D0D0D",
    },
  },
  typography: {
    h1: {
      fontSize: "3.8rem",
      fontFamily: '"Playfair", "serif"',
    },
    h2: {
      fontSize: "3rem",
      fontFamily: '"Playfair", "serif"',
    },
    h3: {
      fontSize: "2.4rem",
      fontFamily: '"Playfair", "serif"',
    },
    h4: {
      fontSize: "2rem",
      fontFamily: '"Playfair", "serif"',
    },
    h5: {
      fontSize: "1.6rem",
      fontFamily: '"Playfair", "serif"',
    },
    h6: {
      fontSize: "1.2rem",
      fontFamily: '"Playfair", "serif"',
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
    overline: {
      fontSize: "0.625rem",
    },
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  spacing: 8,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
