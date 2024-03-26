import Image from "next/image";
import Link from "next/link";

export default function page() {
    return(
        <main className="container m-auto">
            <article className='link_path pt-[17vh]'>
                <Link href='/' className='text-[#000] opacity-70'>Главная / </Link><Link href='/personal' className='text-[#000] opacity-70'>Личный кабинет / </Link><Link href='/personal/orders' className='text-[#000] opacity-70'>Заказы / </Link><span className='text-orange-500'>Информация о заказе ...</span>
            </article>
            <section className="pt-[40px] w-[70%]">
                <header className='cart_header flex flex-row'>
                    <h2 className='text-[30px] font-[Unbounded] font-bold'>ИНФОРМАЦИЯ О ЗАКАЗЕ №247654</h2>
                </header>
                
                <div className="my-[60px]">
                
                    <div className="mb-[20px] flex flex-row">
                
                        <div className="flex flex-row w-[25%] items-center justify-center">
                            <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>
                            <div className="w-[80%] h-[5px] bg-[#fb9d5c]"></div>
                        </div>
                
                        <div className="flex flex-row w-[25%] relative right-[5px] items-center justify-center">
                            <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>
                            <div className="w-[80%] h-[5px] bg-[#fb9d5c]"></div>
                        </div>

                        <div className="flex flex-row w-[25%] relative right-[10px] items-center justify-center">
                            <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>
                            <div className="w-[80%] h-[5px] bg-[#fb9d5c]"></div>
                        </div>
                        
                        <div className="flex flex-row w-[25%] relative right-[15px] items-center justify-center">
                            <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>
                            <div className="w-[80%] h-[5px] bg-[#fb9d5c]"></div>
                        </div>

                        <div className="flex flex-row relative right-[25px] items-center justify-center">
                            <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[22px]">Обработка</p>
                            <p className="text-[#8d8d8d]">Дата события</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[22px]">Сборка заказа</p>
                            <p className="text-[#8d8d8d]">Дата события</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[22px]">Заказ отправлен</p>
                            <p className="text-[#8d8d8d]">Дата события</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[22px]">Готов к выдаче</p>
                            <p className="text-[#8d8d8d]">Дата события</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[22px]">Получен</p>
                            <p className="text-[#8d8d8d]">Дата события</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <hr className="my-[25px] h-[2px] bg-[#000] opacity-20"/>
                        <div className="flex text-[22px] flex-row justify-between">
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='141' height='107' className='w-[200px] h-[115px] rounded-[5px]'></Image>                
                            <h3 className="font-[600]">Органайзер "Слайдер"</h3>
                            <p>1 шт.</p>
                            <p className="font-[600] text-[#f97316]">30 000 ₽</p>
                        </div>
                    <hr className="my-[25px] h-[2px] bg-[#000] opacity-20"/>
                </div>                

                <div className="pb-[150px]">

                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Дата заказа:</p>
                        <p>14.04.2024</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Получатель:</p>
                        <p>Иванов Иван Иванович</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Номер телефона:</p>
                        <p>+7 999 999 99 99</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Служба доставки:</p>
                        <p>Почта России (Отделение)</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Адрес доставки:</p>
                        <p>Москва, улица Передвижная, д. 12, стр. 2, 101000</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Стоимость доставки:</p>
                        <p>540 ₽</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">Стоимость заказа:</p>
                        <p>60 000 ₽</p>
                    </div>
                    <div className="flex flex-row gap-[5px] text-[20px]">
                        <p className="font-[600]">К оплате:</p>
                        <p>60 540</p>
                    </div>

                </div>
            </section>
        </main>
)}