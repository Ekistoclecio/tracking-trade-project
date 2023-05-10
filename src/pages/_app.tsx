import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Head from "next/head";

import ContextsProvider from "../providers/contexts/AllContextsProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextsProvider>
      <Head>
        <title>TT_PROJECT_CHAKRA_UI</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </ContextsProvider>
  );
}
