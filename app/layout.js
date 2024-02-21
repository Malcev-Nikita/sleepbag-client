'use client'

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

import StoreProvider from '@/store/StoreProvider';

import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Unbounded:wght@200..900&display=swap" rel="stylesheet"/>
      </head>

      <body className='overflow-x-hidden'>
        <StoreProvider>
            <Header/>

            {children}

            <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
