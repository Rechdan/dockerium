import { createGlobalStyle, css } from "styled-components";

const globalCss = css`
  * {
    & > * {
      line-height: inherit;
      color: inherit;
      font: inherit;
    }
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default GlobalStyle;
