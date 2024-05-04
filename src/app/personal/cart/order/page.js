import Image from 'next/image'
import Link from 'next/link';


export const metadata = {
  title: 'SleepBag Спальники-Органайзеры: Оформление заказа',
  description: 'Generated by create next app',
}

export default function Page() {
  return (
    <main className="container m-auto font-[Manrope]">
        
        <article className='link_path pt-[17vh]'>
          <a href='/' className='text-[#000] opacity-70'>Главная / </a><a href='/personal/cart' className='text-[#000] opacity-70'>Корзина / </a><span className='text-orange-500'>Оформление заказа</span>
        </article>
        
        <section className='mobile_none m-0 pt-[33px] w-[100%] flex flex-col'>
          
          <header className='cart_header flex flex-row'>
            <h2 className='text-[37px] font-[Unbounded] font-bold'>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
          </header>
          
          <div className='flex flex-row mb-[140px] gap-[250px] mt-[77px]'>
            <div className='w-[50%]'>
                <form className='mb-[130px]'>
                
                    <div className='mb-[15px]'>
                        <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                            <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>1</div>
                            <h3 className='font-[500] text-[24px]'>Личные данные и адрес</h3>
                        </div>
                
                        <div className='mb-[15px]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>ФИО</p>
                            <input type='name' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов Иван Иванович' id='name' name='name' required/>
                        </div>
                
                        <div className='mb-[15px]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер телефона</p>
                            <input type='phone' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='+7 (999) 999-99-99' id='phone' name='phone' required/>
                        </div>
                
                        <div className='mb-[15px]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Электронная почта</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='xxxxxxxx@xxxx.xxx' id='email' name='email' required/>
                        </div>
                
                        <div className='mb-[15px]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Населённый пункт</p>
                            <input type='city' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Москва, Московская область, Россия' id='city' name='city' required/>
                        </div>
                
                        <div className='mb-[15px]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Улица и номер дома</p>
                            <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Татищева 73А' id='address' name='address' required/>
                        </div>
                
                        <div className='flex flex-row gap-[25px]'>
                            <div className='w-[50%]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер подъезда</p>
                                <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='4' id='entrance' name='entrance' required/>
                            </div>
                            <div className='w-[50%]'>
                                <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер квартиры</p>
                                <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='17' id='number' name='number' required/>
                            </div>
                        </div>
                    </div>
                
                    <div className='mb-[15px]'>
                        <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                            <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>2</div>
                            <h3 className='font-[500] text-[24px]'>Способ доставки</h3>
                        </div>
                        <div>
                            <select className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Почта России (отделение) от 7 дней - 467 рублей' id='delivery' name='address' required></select>
                        </div>
                    </div>
                
                    <div className='mb-[15px]'>
                        <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                            <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>3</div>
                            <h3 className='font-[500] text-[24px]'>Выберите пункт самовывоза</h3>
                        </div>
                        <div>
                            <select className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Михайлова, д.15, стр.3. 110110 - Отделение' id='point' name='point' required></select>
                        </div>
                    </div>
                
                    <div className='mb-[15px]'>
                        <div className='flex flex-row items-center mb-[15px] gap-[21px]'>
                            <div className='bg-[#e6e9ec] w-[24px] font-[500] h-[24px] flex justify-center items-center'>4</div>
                            <h3 className='font-[500] text-[24px]'>Способ оплаты</h3>
                        </div>
                        <label for='kassa' className='p-[10px] my-[25px] border-gray-500 border-[1px] border-solid rounded-[10px] flex items-center flex-row gap-[10px]'>
                            <div className='mx-[15px]'>
                                <Image src="/icons/kassa_logo.png" width={45} height={32}></Image>
                            </div>
                            <div className='w-[90%]'>
                                <h5 className='font-[500]'>Kassa</h5>
                                <p>Оплата картами или СБП</p>
                            </div>
                            <div>
                                <input id='kassa' className='input_radio' type='radio' checked></input>
                            </div>
                        </label>
                    </div>
                    
                    <div className='flex flex-col gap-[15px]'>
                        <div>
                            <h3 className='font-[500] text-[21px]'>Комментарий к заказу</h3>
                        </div>
                        <div>
                            <textarea className="w-[100%] h-[140px] border-[2px] border-gray-400 border-solid focus:outline-orange-500 text-black font-semibold rounded-[10px] pl-[24px] pt-[18px] pb-[18px] resize-none" name="QUESTION"/>
                        </div>
                    </div>
                
                </form>
            </div>
            <div className='w-[50%]'>
                <form className='p-[35px] bg-[#f4f4f4] mt-[32px] rounded-[32px] flex flex-col'>
                    <p className='font-[600] text-[24px] mb-[35px]'>Ваш заказ</p>
                    
                    <div className='flex flex-row justify-between py-[25px]'>
                        <div className='w-[50%]'>
                            <Image alt='Изображение товара' src='/images/catalog_photo.png' width='241' height='137' className='w-[100%] h-[170px] rounded-[7px]'></Image>
                        </div>
                        <div>
                            <h4 className='font-semibold w-[100%] text-[22px]'>Органайзер SleepBag01</h4>
                            <p className='text-[#8d8d8d] text-[21px]'>1 шт.</p>
                            <p className='font-semibold text-[25px] text-[#505050]'>30 000 ₽</p>
                        </div>
                    </div>
                    
                    <hr className='bg-[#8d8d8d] opacity-30 h-[2px]'/>
                    
                    <div className='flex flex-row justify-between text-[22px] py-[25px]'>
                        <p className='text-[#8d8d8d]'>Товаров на сумму:</p>
                        <p className='text-[#505050] font-[500]'>30 000 ₽</p>                    
                    </div>
                    
                    <div className='pb-[25px] text-[22px] flex flex-row justify-between'>
                        <p className='text-[#8d8d8d]'>Стоимость доставки:</p>
                        <p className='text-[#505050] font-[500]'>560 ₽</p>                    
                    </div>
                    
                    <hr className='bg-[#8d8d8d] opacity-30 h-[2px]'/>
                    
                    <div className='text-[#f97316] text-[30px] font-[600] flex flex-row justify-between pt-[25px]'>
                        <p>Итого:</p>
                        <p>30 560 ₽</p>                    
                    </div>
                </form>
                
                <div className='my-[20px]'>
                    <label for='accept'>
                        <label for='accept' className='absolute w-[30px] h-[30px]'>
                            <input id='accept' type="checkbox" className='option-input2 w-[30px] h-[30px] checkbox absolute hidden translate-y-[20px] translate-x-[10px]'/>
                        </label>
                        <p className='ml-[60px] text-[20px] text-[#505050]'>Я принимаю условия <a href='#' className='text-[20px] text-[#000] underline'>публичной оферты</a> и <a href='#' className='text-[20px] text-[#000] underline'>политики конфеденциальности</a>, а также даю согласие на обработку персональных данных</p>
                    </label>
                </div>
                <div className='flex flex-col gap-[17px] h-[10%]'>
                    <button className='text-center text-[#fff] text-[22px] rounded-[10px] h-[50%] bg-[#f97316]'>Оформить заказ</button>
                    <a href='/personal/cart' className='text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[50%] bg-tranparent'>Вернуться к корзине</a>
                </div>
            
            </div>
          </div>

        </section>

        <section className='mobile_block order_section m-0 pt-[33px] w-[100%] flex flex-col'>
          
          <header className='section_header flex flex-col'>
            <h2 className='text-[27px] font-[Unbounded] font-bold'>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
            <div className='header_line_mobile hidden my-[10px]'></div>
          </header>
          
            <div className='flex flex-row mb-[140px] gap-[250px] mt-[17px]'>
                <form className='mb-[130px]'>
                    <div className='flex flex-row items-center mb-[15px] justify-between w-[100%]'>
                        <div className='flex flex-row items-center w-[80%] gap-[15px]'>
                            <div className='bg-[#e6e9ec] w-[34px] text-[24px] h-[34px] flex justify-center items-center'>1</div>
                            <h3 className='font-[500] text-[24px]'>Личные данные</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8d8d8d] text-[21px]'>Шаг 1/4</p>
                        </div>
                    </div>
                    
                    <div className='mb-[15px]'>
                        <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>ФИО</p>
                        <input type='name' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов Иван Иванович' id='name' name='name' required/>
                    </div>
                    <div className='mb-[15px]'>
                        <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер телефона</p>
                        <input type='phone' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='+7 (999) 999-99-99' id='phone' name='phone' required/>
                    </div>
                    <div className='mb-[35px]'>
                        <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Электронная почта</p>
                        <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='xxxxxxxx@xxxx.xxx' id='email' name='email' required/>
                    </div>
                    
                    <button className='text-center flex flex-row items-center justify-center gap-[10px] mb-[15px] text-[#fff] text-[22px] rounded-[10px] w-[100%] h-[6vh] bg-[#f97316]'>Продолжить заполнение заказа 
                        <svg width="18" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#fff" stroke-linecap="square"/>
                        </svg>
                    </button>
                    
                    <a href='/personal/cart' className='mb-[100px] text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[6vh] bg-tranparent'>Вернуться к корзине</a>
{/* ----------------------------- */}
                    <div className='flex flex-row items-center mb-[15px] justify-between w-[100%]'>
                        <div className='flex flex-row items-center w-[80%] gap-[15px]'>
                            <div className='bg-[#e6e9ec] w-[34px] text-[24px] h-[34px] flex justify-center items-center'>2</div>
                            <h3 className='font-[500] text-[24px]'>Адрес доставки</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8d8d8d] text-[21px]'>Шаг 2/4</p>
                        </div>
                    </div>
                    
                    <div className='mb-[15px]'>
                        <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Населённый пункт</p>
                        <input type='city' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Москва, Московская область, Россия' id='city' name='city' required/>
                    </div>
                    <div className='mb-[15px]'>
                        <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Улица и номер дома</p>
                        <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Татищева 73А' id='address' name='address' required/>
                    </div>
                    <div className='flex flex-row gap-[25px]'>
                        <div className='w-[50%]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер подъезда</p>
                            <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='4' id='entrance' name='entrance' required/>
                        </div>
                        <div className='w-[50%]'>
                            <p className='text-[#000] text-[20px] font-[500] mb-[15px]'>Номер квартиры</p>
                            <input type='address' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='17' id='number' name='number' required/>
                        </div>
                    </div>
                    
                    <button className='text-center mt-[35px] flex flex-row items-center justify-center gap-[10px] mb-[15px] text-[#fff] text-[22px] rounded-[10px] w-[100%] h-[6vh] bg-[#f97316]'>Продолжить заполнение заказа 
                        <svg width="18" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#fff" stroke-linecap="square"/>
                        </svg>
                    </button>
                    
                    <a href='#' className='mb-[100px] text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[6vh] bg-tranparent'>Вернуться к личным данным</a>
{/* ------------------------- */}
                    <div className='flex flex-row items-center mb-[25px] justify-between w-[100%]'>
                        <div className='flex flex-row items-center w-[80%] gap-[15px]'>
                            <div className='bg-[#e6e9ec] w-[34px] text-[24px] h-[34px] flex justify-center items-center'>3</div>
                            <h3 className='font-[500] text-[24px]'>Способ оплаты</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8d8d8d] text-[21px]'>Шаг 3/4</p>
                        </div>
                    </div>

                    <label for='russia_mail' className='p-[20px] my-[25px] border-gray-500 border-[1px] border-solid rounded-[10px] flex flex-col gap-[10px]'>
                        <div className='flex flex-row justify-between'>
                            <h4 className='text-[20px] font-[600]'>Почта России (Отделение)</h4>
                            <input id='russia_mail' className='input_radio' type='radio'></input>
                        </div>
                        <div className='flex flex-row justify-between text-[20px]'>
                            <p>590 ₽</p>
                            <p>от 11 дней</p>
                        </div>
                        <select className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='ул.Михайлова, д.15, стр.3. 110110 - Отделение' id='point' name='point' required></select>
                    </label>

                    <button className='text-center mt-[35px] flex flex-row items-center justify-center gap-[10px] mb-[15px] text-[#fff] text-[22px] rounded-[10px] w-[100%] h-[6vh] bg-[#f97316]'>Продолжить заполнение заказа 
                        <svg width="18" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#fff" stroke-linecap="square"/>
                        </svg>
                    </button>
                    
                    <a href='#' className='mb-[100px] text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[6vh] bg-tranparent'>Вернуться к адресу доставки</a>
                    

                    <div className='flex flex-row items-center mb-[25px] justify-between w-[100%]'>
                        <div className='flex flex-row items-center w-[80%] gap-[15px]'>
                            <div className='bg-[#e6e9ec] w-[34px] text-[24px] h-[34px] flex justify-center items-center'>4</div>
                            <h3 className='font-[500] text-[24px]'>Способы оплаты</h3>
                        </div>
                        <div className=''>
                            <p className='text-[#8d8d8d] text-[21px]'>Шаг 4/4</p>
                        </div>
                    </div>
                    <label for='kassa_mobile' className='p-[10px] my-[25px] border-gray-500 border-[1px] border-solid rounded-[10px] flex items-center flex-row gap-[10px]'>
                        <div className='mx-[15px]'>
                            <Image src="/icons/kassa_logo.png" width={45} height={32}></Image>
                        </div>
                        <div className='w-[90%]'>
                            <h5 className='font-[500]'>Kassa</h5>
                            <p>Оплата картами или СБП</p>
                        </div>
                        <div>
                            <input id='kassa_mobile' className='input_radio' type='radio' checked></input>
                        </div>
                    </label>
                    <div className='flex flex-col gap-[15px]'>
                        <div>
                            <h3 className='font-[500] text-[21px]'>Комментарий к заказу</h3>
                        </div>
                        <div>
                            <textarea className="w-[100%] h-[140px] border-[2px] border-gray-400 border-solid focus:outline-orange-500 text-black font-semibold rounded-[10px] pl-[24px] pt-[18px] pb-[18px] resize-none" name="QUESTION"/>
                        </div>
                    </div>
                    <button className='text-center mt-[35px] flex flex-row items-center justify-center gap-[10px] mb-[15px] text-[#fff] text-[22px] rounded-[10px] w-[100%] h-[6vh] bg-[#f97316]'>Оплатить заказ</button>
                    
                    <a href='/personal/cart' className='mb-[100px] text-center items-center flex justify-center text-[#000] text-[22px] border-[1px] border-black border-solid rounded-[10px] h-[6vh] bg-tranparent'>Вернуться к корзине</a>
                </form>
            </div>

        </section>
    </main>
  )
}
