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

          {/* seo */}
          <meta name="author" content="Alex Teixeira da Fonseca" />
          <meta
            name="description"
            content="Meu nome Alex. Especialista em desenvolvimento front-end e web. Desenvolvo sua marca no mundo on-line com qualidade, velocidade e tecnologia"
          />
          <meta
            name="keywords"
            content="sites, site,  web, desenvolvimento web, desenvolvedor front end, front end, ui, ux, ui/ux, criar site, portfolio web, programador, alex, como criar site, seo, react, next, freela"
          />

          <meta
            property="og:title"
            content="Alex Teixeira da Fonseca - Front-end developer and web developer"
          />
          <meta
            property="og:description"
            content="Front-end developer and web developer"
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
