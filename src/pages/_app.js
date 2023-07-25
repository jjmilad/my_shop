import NovemberFooter from '@/components/NovemberFooter'
import '@/styles/reset.css'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseCircle } from "react-icons/io5";
import Link from 'next/link';
import { Inter, Yellowtail } from 'next/font/google'
import MobileFooter from '@/components/MobileFooter'
import Footer from '@/components/Footer'

const font = Inter({ subsets: ['latin'] })
const brandFont = Yellowtail({
    subsets: ['latin'],
    weight: '400',
})


export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(true)
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
      <Navbar openSidebar={()=>setOpen(true)}/>
      
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-14">
              <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="absolute left-0 top-0 -ml-10 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button type="button"onClick={() => setOpen(false)}>
                        <IoCloseCircle className='h-8 w-8 fill-gray-200'/>
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        <Link href='/' className={brandFont.className+' font-medium text-primary w-[20%] text-[25px] md:text-[33px]'}>Takimaster</Link>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 ">
                      <p className='font-serif mt-2 text-[20px] pl-2 '>Home</p>
                      <p className='font-serif mt-2 text-[20px] pl-2 '>Contact Us</p>
                      <p className='font-serif mt-2 text-[20px] pl-2 '>About</p>
                      <p className='font-serif mt-2 text-[20px] pl-2 '>Trendyol</p>
                      <p className='font-serif mt-2 text-[20px] pl-2 '>Hespiburada</p>
                    </div>
                  </div>
                  
                  <div className='navbar absolute bottom-0 right-0 w-full border-t'>
                    <NovemberFooter/>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
        
      </Dialog>
    </Transition.Root>

      <main className={font.className}>
        <Component {...pageProps} />
      </main>
      <Footer/>
      <MobileFooter/>
      <div className='hidden md:flex'>
        <NovemberFooter dark={true}/>
      </div>
    </>
  )
}
