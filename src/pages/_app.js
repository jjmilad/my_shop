import '@/styles/reset.css'
import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const font = Inter({ subsets: ['latin'] })

export const IsAdminContext = createContext()

export default function App({ Component, pageProps }) {
  const [isAdmin, setIsAdmin] = useState()
  const user = auth.currentUser

  const checkAdminStatus = ()=>{
    const ref = localStorage.getItem('isAdmin')
    if(ref && ref === 'true'){
      setIsAdmin(true)
    }
    else{
      setIsAdmin(false)
    }
  }

  onAuthStateChanged(auth,(user)=>{
    checkAdminStatus()
  })
  
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>My Shop</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"  content="Order high quality products" />
        <meta name="author" content="My Shop" />
        <meta name="theme-color" content="#fffff" />

        <meta property="og:title" content="My Shop" />
        <meta property="og:description" content="Order high quality products" />
        <meta property="og:type" content="My Shop" />
        <meta property="og:image" content="/og.webp" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="My Shop" />
        <meta name="twitter:title" content="My Shop" />
        <meta name="twitter:description" content="Order high quality products" />
        <meta name="twitter:image" content="/og.webp" />
      </Head>
      <main className={font.className}>
        <IsAdminContext.Provider value={{isAdmin, setIsAdmin}}>
          <Component {...pageProps}/>
        </IsAdminContext.Provider>
      </main>
    </>
  )
}
