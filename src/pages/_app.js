import NovemberFooter from '@/components/NovemberFooter'
import '@/styles/reset.css'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

import { Inter } from 'next/font/google'
import MobileFooter from '@/components/MobileFooter'
const font = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Takimaster</title>
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
      <Navbar/>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
      <MobileFooter/>
      <NovemberFooter dark={true}/>
    </>
  )
}
