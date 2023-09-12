import { AppProps } from "next/app";
import Head from "next/head";

import { createTheme, ThemeProvider } from "@mui/material";

import GlobalStyle, { primaryFont } from "_/styles/global";

const theme = createTheme({
  typography: {
    fontFamily: primaryFont.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});

export default ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Dockerium</title>
    </Head>

    <GlobalStyle />

    <Component {...pageProps} />
  </ThemeProvider>
);
