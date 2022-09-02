import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * @class CustomDocument
 * @description styled-component CSS-in-JS SSR 적용을 위한 커스텀 문서 폼
 * @typedef {CustomDocument}
 * @extends {Document}
 */
class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // styled-component 스타일과 컴포넌트 결합
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      // html에 style 추가
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };

      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;
