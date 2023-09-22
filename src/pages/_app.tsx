import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import FormProvider from "../context/context"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
    </FormProvider>
  );
}
