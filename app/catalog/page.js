import Image from 'next/image'
import { getFAQ } from '@/services/IndexPage'
import Questions from '@/components/questions'
import FAQ from '@/components/faq'
import Catalog from '@/components/catalog/catalog'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
  const faq = await getFAQ();

  return (
    <main className="">        
        <header className='catalog_header'>
          <Image className='catalog_header_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
          <div className='container z-5 absolute translate-[-50%] translate-x-[-50%] left-[50%]'>
            <h1>КАТАЛОГ</h1>
            <p>Всё для вашего автомобиля - широкий выбор, надёжность и качество!</p>
          </div>
        </header>

        <section className='choose_category container m-auto'>
          
          <div className='section_header container m-auto'>
            <div className='header_line'></div>
            <h1>ВЫБОР КАТЕГОРИИ</h1>
          </div>
          
          <div className='catalog_categories'>
            
            <div className='catalog_category'>
              <Image src='/icons/catalog_png1.png' width={26} height={27}/>
              <p>Органайзеры</p>
            </div>
            
            <div className='catalog_category'>
              <Image src='/icons/catalog_png2.png' width={26} height={27}/>
              <p>Сумки</p>
            </div>
            
            <div className='catalog_category'>
              <Image src='/icons/catalog_png3.png' width={26} height={27}/>
              <p>Коврики для груза</p>
            </div>
            
            <div className='catalog_category'>
              <Image src='/icons/catalog_png4.png' width={26} height={27}/>
              <p>Матрасы</p>
            </div>
            
            <div className='catalog_category'>
              <Image src='/icons/catalog_png5.png' width={26} height={27}/>
              <p>Подстаканники</p>
            </div>

          </div>
            
          <div className='catalog_view_all'>
            <button className=''>
                Смотреть все категории
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" stroke-linecap="square"/>
                </svg>
            </button>
          </div>
          

        </section>
        
        {/* <section className='section_filters'>
          
          <div className='filter_line_first container m-auto'></div>

          <div className='section_header container m-auto'>
            <div className='header_line'></div>
            <h1>ФИЛЬТРЫ</h1>
          </div>
          
          <div className='catalog_filters container m-auto'>
            <input className='catalog_filter' placeholder='Введите длину багажного автомобиля'></input>
            <input className='catalog_filter' placeholder='Введите ширину багажного автомобиля'></input>
            <button className='filter_button'>Применить фильтры</button>
          </div>
        
        </section> */}
        
        <Catalog />

        <FAQ data={faq}/>

        <Questions/>

    </main>
  )
}
