import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="hu">
      <Head>
        <link rel="icon" href="/favicon.ico" />
         <meta charSet="UTF-8" />
        <meta
          name="description"
          content="OralDent - Fogászat Pomáz - Szájsebészet, fogászat, szájhigiénia, fogpótlás, fogszabályozás"
        />
      </Head>
      <body className="antialiased h-screen">
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
