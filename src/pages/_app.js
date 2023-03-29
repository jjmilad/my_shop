import NovemberFooter from '@/components/NovemberFooter'
import '@/styles/reset.css'
import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>November</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"  content="Order high quality websites" />
        <meta name="author" content="November" />
        <meta name="theme-color" content="#fffff" />

        <meta property="og:title" content="November" />
        <meta property="og:description" content="Order high quality websites" />
        <meta property="og:type" content="November" />
        <meta property="og:image" content="/og.webp" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="November" />
        <meta name="twitter:title" content="November" />
        <meta name="twitter:description" content="Order high quality websites" />
        <meta name="twitter:image" content="/og.webp" />
      </Head>
      <main>
        <Component {...pageProps} />
        <NovemberFooter />
      </main>
    </>
  )
}
