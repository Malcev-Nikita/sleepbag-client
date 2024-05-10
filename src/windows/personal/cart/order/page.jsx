import CheckAuthUser from '@/features/check-auth-user'
import GetUserInfo from '@/features/get-user-info'
import { Breadcrumbs } from '@/widgets/breadcrumbs'
import OrderForm from '@/widgets/person/cart/order/order-form'
import Image from 'next/image'

export default function OrderPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет', href: '/person' },
        { label: 'Корзина', href: '/person/cart'},
        { label: 'Оформление заказа'},
    ]

    return (
        <main className="container m-auto font-[Manrope]"> 
            <CheckAuthUser />

            <GetUserInfo />

            <Breadcrumbs breadcrumbs={ breadcrumbs } /> 
        
            <section className='mobile_none m-0 pt-[33px] w-[100%] flex flex-col'>
                <header className='cart_header flex flex-row'>
                    <h2 className='text-[37px] font-[Unbounded] font-bold'>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
                </header>
            
                <OrderForm />
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