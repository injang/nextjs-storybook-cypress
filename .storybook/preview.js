import theme from "../theme/index";
import { store } from "../store/index";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    </Provider>
  ),
];
