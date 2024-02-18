import Document, { Html, Head, NextScript, Main } from 'next/document';

class NDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NDocument;
