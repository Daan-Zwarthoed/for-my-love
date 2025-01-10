"use client";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../theme/custom-theme";
import { customToastOptions } from "../theme/custom-toast-options";
import Fonts from "../theme/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider toastOptions={customToastOptions} theme={customTheme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
