import { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

import { useEffect } from "react";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { setDefaultOptions } from "date-fns";
import { enUS } from "date-fns/locale";

import GlobalStyle from "_/styles/global";

export const primaryFont = Roboto({
  weight: ["300", "400", "700", "900"],
  adjustFontFallback: true,
  display: "swap",
  fallback: [],
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const theme = createTheme({
  typography: {
    fontFamily: primaryFont.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});

export default ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setDefaultOptions({
      locale: enUS,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dockerium</title>
      </Head>

      <CssBaseline />
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};
