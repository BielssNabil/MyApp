import { Html, Head, Main, NextScript } from "next/document";
import icon from "public/images/img2.ico";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Biels App</title>
      <link rel="icon" href="/img2.ico" sizes="any" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
