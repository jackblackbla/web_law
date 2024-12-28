import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
