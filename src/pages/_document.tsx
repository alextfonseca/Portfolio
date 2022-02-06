import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@600&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Meu nome Alex. Especialista em desenvolvimento front-end e web. Desenvolvo sua marca no mundo on-line com qualidade, velocidade e tecnologia"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
