import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export const themeFontFamily =
  "SUIT,apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";

const theme: ChakraTheme = {
  colors: {
    sm: {
      "50": "#e3f1fa",
      "100": "#bbdbf4",
      "200": "#92c6ed",
      "300": "#6bafe5",
      "400": "#4f9fe0",
      "500": "#3790db",
      "600": "#3182ce",
      "700": "#2971bc",
      "800": "#2360aa",
      "900": "#18438a",
    },
    smgray: "#f3f3f3",
  },
  styles: {},
  fonts: {
    heading: themeFontFamily,
    body: themeFontFamily,
  },
  config: {},
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "92em",
    "3xl": "112em",
    "4xl": "128em",
  },
};

const themes = extendTheme(theme);

export default themes;
