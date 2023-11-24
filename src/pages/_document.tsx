import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Kebab Factory - Her lokmada mükemmelliği yakalayın!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Kebab Factory - Her lokmada mükemmelliği yakalayın!"
        />
        <meta
          property="og:description"
          content="Kebab Factory - Her lokmada mükemmelliği yakalayın! Otantik ve lezzetli ürünlerimizi sofralara taşıyoruz!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
