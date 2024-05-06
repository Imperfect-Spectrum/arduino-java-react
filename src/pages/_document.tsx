import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className=""
        style={{
          backgroundImage: 'url("/bg_image.png")',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
