import "@styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store/index";
import themes from "@theme/index";
import CommonLayout from "@layout/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={themes}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ChakraProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async () => ({ pageProps: {} });

export default MyApp;
