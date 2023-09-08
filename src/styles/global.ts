import { Roboto } from "next/font/google";

import { createGlobalStyle, css } from "styled-components";

const primaryFont = Roboto({
  weight: ["400", "700"],
  adjustFontFallback: true,
  display: "swap",
  fallback: [],
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const globalCss = css`
  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    & > * {
      line-height: inherit;
      color: inherit;
      font: inherit;
    }
  }

  html,
  body {
    background-color: ${(p) => p.theme.colors.page.background};
    font-family: ${primaryFont.style.fontFamily};
    color: ${(p) => p.theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  a,
  label,
  button {
    cursor: pointer;
  }
`;

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default GlobalStyle;
