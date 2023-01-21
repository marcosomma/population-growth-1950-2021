import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: 96,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 60,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
    overline: {
      fontSize: 10,
      fontWeight: 600,
    },
  },
  palette: {
    mode: 'dark',
    action: {
      disabled: "#E5E5E5",
    },
    common: {
      black: "#000000",
      white: "#FFFF",
    },
    primary: {
      main: "#289BB4",
      light: "#D0E9EF",
      dark: "#00333E",
      900: "#00333E",
      800: "#004554",
      700: "#016277",
      600: "#05819C",
      500: "#289BB4",
      400: "#44ADC4",
      300: "#70C4D7",
      200: "#9BD8E6",
      100: "#D0E9EF",
      50: "#ECF5F7",
    },
    secondary: {
      main: "#F26344",
      light: "#FFC8BB",
      dark: "#581405",
      900: "#581405",
      800: "#921E04",
      700: "#BE2C0C",
      600: "#E34725",
      500: "#F26344",
      400: "#FF7B5F",
      300: "#FF967E",
      200: "#FFAE9C",
      100: "#FFC8BB",
      50: "#FFEAE6",
    },
    error: {
      main: "#B56C00",
    },
    grey: {
      900: "#1B1B1B",
      800: "#3A3A3A",
      700: "#4F4F4F",
      600: "#686868",
      500: "#7D7D7D",
      400: "#999999",
      300: "#B4B4B4",
      200: "#C6C6C6",
      100: "#DDDDDD",
      50: "#F1F1F1",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          textTransform: "none",
          fontWeight: "bold",
        }),
        outlined: () => ({
          "&.Mui-disabled": {
            background: theme.palette.common.white,
            color: theme.palette.grey[100],
            borderColor: theme.palette.grey[100],
          },
        }),
        text: () => ({
          "&.Mui-focused": {
            borderRadius: 10,
          },
          "&.Mui-disabled": {
            color: theme.palette.grey[100],
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => ({
          "& :-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary,
          },
          "&:hover:not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary,
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {},
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
