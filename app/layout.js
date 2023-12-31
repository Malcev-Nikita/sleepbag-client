import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
