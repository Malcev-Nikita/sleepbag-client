import Header from '@/components/header';
import Footer from '@/components/footer';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

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
        <Provider store={store}>
          <Header/>

          {children}

          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
