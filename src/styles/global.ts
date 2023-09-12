import { Roboto } from "next/font/google";

import { createGlobalStyle, css } from "styled-components";

export const primaryFont = Roboto({
  weight: ["300", "400", "700", "900"],
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
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${primaryFont.style.fontFamily};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  a,
  label,
  button {
    cursor: pointer;
  }

  b,
  strong {
    font-weight: 700;
  }
`;

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default GlobalStyle;
