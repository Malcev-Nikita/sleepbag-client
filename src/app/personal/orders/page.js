import Image from "next/image";
import Link from "next/link";

export default function page() {
    return(
        <main className="container m-auto">
            <article className='link_path pt-[17vh]'>
                <Link href='/' className='text-[#000] opacity-70'>Главная / </Link><Link href='/personal' className='text-[#000] opacity-70'>Личный кабинет / </Link><span className='text-orange-500'>Заказы</span>
            </article>
            <section className="pt-[40px]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-2xl font-[Unbounded] font-bold'>МОИ ЗАКАЗЫ</h2>
                    <p>(Количество товаров)</p>
                </header>
                
                <div className="order rounded-[10px] border-solid border-[1px] my-[30px] w-[80%] border-[#adadad] p-[26px] flex flex-col">
                    <div className="flex justify-between mb-[20px] order_name">
                        <h3 className="font-[600] text-[20px]">Заказ №247654</h3>
                        <div className="flex flex-row text-[20px] gap-[40px]">
                            <p className="font-[600] mobile_none">60 540 ₽</p>
                            <p>Заказ в пути</p>
                        </div>
                    </div>
                    <p className="font-[400] text-[#8d8d8d] text-[18px] mobile_price">60 540 ₽</p>
                    <div className="flex flex-row items-end justify-between">
                        <div className="flex gap-[10px]">
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='141' height='107' className='w-[200px] h-[115px] rounded-[5px] order_image'></Image>
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='141' height='107' className='w-[200px] h-[115px] rounded-[5px] order_image'></Image>                
                            <div className="mobile_arrow justify-center items-center w-[50%]">
                                <svg width="15" height="20" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 14L8 7.5L1 1" stroke="#8D8D8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <Link href="/personal/orders/orderinfo" className="info_button flex items-center justify-center text-[20px] h-[5vh] rounded-[5px] w-[17%] bg-[#f3f3f3]"><div className="flex items-center justify-center text-[20px] h-[5vh] rounded-[5px] w-[100%] bg-[#f3f3f3]"><p>Подробнее</p></div></Link>
                    </div>
                    <div className="mobile_block mobile_hr bg-[#cacaca] mt-[30px] w-[100%] h-[2px] "/>
                </div>
            </section>
        </main>
)}