import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className='h-[100vh]'>
        <Header/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
