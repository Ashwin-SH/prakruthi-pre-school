"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B35",
      dark: "#E55A2B",
      light: "#FF8A5C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4ECDC4",
      dark: "#3DB8B0",
      light: "#7EDDD7",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EC4899",
    },
    warning: {
      main: "#FFE66D",
    },
    info: {
      main: "#38BDF8",
    },
    success: {
      main: "#84CC16",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFF8F0",
    },
    text: {
      primary: "#1a1a2e",
      secondary: "#6B7280",
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "12px 32px",
          fontSize: "1rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        },
      },
    },
  },
});

export default theme;
