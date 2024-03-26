import Image from "next/image";
import Link from "next/link";

export default function page() {
    return(
        <main className="container m-auto">
            <article className='link_path pt-[17vh]'>
                <Link href='/' className='text-[#000] opacity-70'>Главная / </Link><Link href='/personal' className='text-[#000] opacity-70'>Личный кабинет / </Link><span className='text-orange-500'>Покупки</span>
            </article>
            <section className="pt-[40px] pb-[150px]">
                <header className='cart_header flex flex-row pb-[50px]'>
                    <h2 className='text-[35px] font-[Unbounded] font-bold'>МОИ ПОКУПКИ</h2>
                </header>
                
                <div>
                    <div className='catalog_object rounded-[10px]'>
                        <div className='object_photo'>
                            <Image src='/images/catalog_photo.png' alt='Изображение товара' width={364} height={320}/>                        
                        </div>

                        <div className='object_desc'>
                            <h3>Органайзер "SleepBag01"</h3>
                            <p>В наличии - 2 шт.</p>
                            <p className='object_desc_text'>lksgjnsldnsdnsdnlsfs</p>

                            <div className='object_price pb-[20px]'>
                                <p>30 000</p>
                                <p>₽</p>
                            </div>

                        </div>
                    </div>
                </div>
                    
            </section>
        </main>
)}