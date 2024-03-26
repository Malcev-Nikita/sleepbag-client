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
                
                <div className="rounded-[10px] border-solid border-[1px] my-[30px] w-[80%] border-[#adadad] p-[26px] flex flex-col">
                    <div className="flex justify-between mb-[20px]">
                        <h3 className="font-[600] text-[20px]">Заказ №247654</h3>
                        <div className="flex flex-row text-[20px] gap-[40px]">
                            <p className="font-[600]">60 540 ₽</p>
                            <p>Заказ в пути</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-end justify-between">
                        <div className="flex gap-[10px]">
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='141' height='107' className='w-[200px] h-[115px] rounded-[5px]'></Image>
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='141' height='107' className='w-[200px] h-[115px] rounded-[5px]'></Image>                
                        </div>
                        <Link href="/personal/orders/orderinfo" className="flex items-center justify-center text-[20px] h-[5vh] rounded-[5px] w-[17%] bg-[#f3f3f3]"><div className="flex items-center justify-center text-[20px] h-[5vh] rounded-[5px] w-[100%] bg-[#f3f3f3]"><p>Подробнее</p></div></Link>
                    </div>
                </div>
            </section>
        </main>
)}