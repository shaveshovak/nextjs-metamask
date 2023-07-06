import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
			{/* The changes based on the research: https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" />
			</Head>
      <body style={{ backgroundColor: 'hsla(240, 2%, 9%, 1' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
