import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class extends Document {
  static override getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      };

      const initialProps = await Document.getInitialProps(ctx);

      return { ...initialProps, styles: [initialProps.styles, sheet.getStyleElement()] };
    } finally {
      sheet.seal();
    }
  };

  override render = () => (
    <Html lang={this.props.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
