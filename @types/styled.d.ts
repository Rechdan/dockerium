import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      page: {
        background: string;
      };

      primary: string;
      primary50: string;
      primary0: string;
      primaryLight: string;

      black50: string;
      black60: string;

      white: string;
      white0: string;
      white05: string;
      white10: string;
      white20: string;
    };
  }
}
