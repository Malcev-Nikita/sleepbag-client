'use client'

import Header from '@/widgets/header';
import Footer from '@/widgets/footer';

import StoreProvider from '@/store/store-provider';

import { usePathname } from 'next/navigation'

import "./globals.css";
import Script from 'next/script';
import Preloader from '@/widgets/preloader';


export default function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Unbounded:wght@200..900&display=swap" rel="stylesheet"/>
      </head>

      <body className='overflow-x-hidden'>
        <Preloader />

        <StoreProvider>
            <Header/>

            {children}

            {pathname == '/' || pathname.includes('/catalog') ? (
              <Footer footer='long' />
            ) : (
              <Footer footer='short' />
            )}
        </StoreProvider>

        <Script id="my-script">
          {`
            const preloader = document.querySelector('.preloader')

            setTimeout(() => {
              preloader.style.opacity = 0
            }, 300)

            setTimeout(() => {
              preloader.style.display = 'none'
            }, 800)
          `}
        </Script>
      </body>
    </html>
  );
}
