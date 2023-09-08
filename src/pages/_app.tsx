import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import theme from "_/theme";

import GlobalStyle from "_/styles/global";

export default ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Dockerium</title>
    </Head>

    <GlobalStyle />

    <Component {...pageProps} />
  </ThemeProvider>
);
