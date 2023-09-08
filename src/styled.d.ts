import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;

      black05: string;
      black10: string;

      white: string;
    };
  }
}
