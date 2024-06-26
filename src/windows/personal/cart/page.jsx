import Image from 'next/image'

import CheckAuthUser from '@/features/check-auth-user';
import CartProducts from '@/widgets/person/cart/cart-products';
import { Breadcrumbs, BreadcrumbsMobile} from '@/widgets/breadcrumbs';
import CartProductsPrice from '@/shared/personal/cart/cart-products-price';
import GetUserInfo from '@/features/get-user-info';
import ButtonOrder from '@/shared/personal/cart/button-order';

export default function CartPage() {
    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Личный кабинет', href: '/person' },
        { label: 'Корзина'},
    ]

    return (
        <main className="container m-auto font-[Manrope]">
            <CheckAuthUser />

            <GetUserInfo />
        
            <Breadcrumbs breadcrumbs={ breadcrumbs } />
        
            <section className='m-0 pt-[33px] w-[100%] flex flex-col'>
            
                <header className='cart_header flex flex-row'>
                    <h2 className='text-2xl font-[Unbounded] font-bold'>КОРЗИНА</h2>
                    <p>(Количество товаров в корзине)</p>
                </header>

                <form className='cart_main_part bg-[#f4f4f4] mt-[32px] mb-[130px] rounded-[32px] p-[53px] flex flex-col'>
                    
                    <div className='flex flex-row font-semibold justify-between'>
                    {/* <label className='flex col_all flex-row'>
                        <label for='all' className='absolute'>
                        <input id='all' type="checkbox" className='option-input checkbox top-[-17px] right-[37px] absolute hidden translate-y-[20px] translate-x-[10px]'/>
                        </label> 
                        Выбрать всё
                    </label> */}

                        <h3 className='col2'>Товар</h3>

                        <div className='cols flex flex-row justify-between w-[20%]'>
                            <h3>Цена за шт.</h3>
                            {/* <h3>Количество</h3> */}
                            <h3>Стоимость</h3>
                        </div>
                    </div>
                    
                    <hr className='mt-[20px] h-[2px] opacity-30 bg-[#8d8d8d] mb-[25px]'/>

                    <CartProducts/>
                    
                    <hr className='mt-[20px] h-[2px] opacity-30 bg-[#8d8d8d] mb-[20px]'/>
                
                    <div className='text-[20px] text-[#8d8d8d] font-[200] flex flex-col text-right'>
                        {/* <p>Стоимость доставки: <a className='underline' href='#'>Выбрать способ доставки</a></p> */}
                        {/* <p>Доставка: Бесплатно</p> */}

                        <div>
                            Сумма: 
                            <CartProductsPrice />
                        </div>
                    </div>
                    
                    <div className='text-[30px] mt-[16px] text-right text-[#f97316] font-semibold'>
                        Итого: 
                        <CartProductsPrice />
                    </div>
                   
                    <ButtonOrder />
                </form>

            
            <form className='mobile_form bg-[#f4f4f4] rounded-[32px] ml-[2%] mt-[20px] p-[15px] flex flex-col'>
                
                {/* <div className='flex flex-row justify-end'>
                    <label className='flex col_all text-[22px] flex-row'>
                        <label for='all' className='absolute'>
                            <input id='all' type="checkbox" className='option-input checkbox top-[-17px] right-[37px] absolute hidden translate-y-[20px] translate-x-[10px]'/>
                        </label> 
                        Выбрать всё
                    </label>
                </div> */}
                
                <hr className='mt-[20px] h-[2px] opacity-30 bg-[#8d8d8d] mb-[25px]'/>
                
                <div className='flex flex-row'>
                
                <label for='product1'>
                    <label for='product1' className='absolute'>
                    <input id='product1' type="checkbox" className='option-input checkbox absolute hidden translate-y-[20px] translate-x-[10px]'/>
                    </label>
                    <Image alt='Изображение товара' src='/images/catalog_photo.png' width='241' height='137' className='w-[100%] h-[100%]'></Image>
                </label>

                <div className='ml-[7%] flex flex-col justify-between w-[70%]'>
    
                    <h4 className='product_name font-semibold w-[100%] text-[23px]'>Органайзер SleepBag01</h4>

                    <p className='font-semibold text-[28px] text-[#f97316]'>30 000 ₽</p>

                    <div className='mp_buttons flex flex-row gap-[10px]'>
                    <button className='rounded-[10px] text-[#8d8d8d] justify-center bg-[#e6e9ec] w-[52px] h-[52px] text-[35px] flex items-center'>-</button>
                    <p className='text-[35px]'>1</p>
                    <button className='rounded-[10px] text-[#8d8d8d] justify-center bg-[#e6e9ec] w-[52px] h-[52px] text-[35px] flex items-center mr-[40px]'>+</button>
                    
                    <div className='flex flex-row gap-[20px] items-center justify-end'>
                        <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="#8d8d8d" stroke-width="1.5"/>
                        </svg>

                        <svg className='cursor-pointer' width="27" height="30" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5101 15.62L13.7635 15.5485L14.5101 15.62ZM3.48995 15.62L2.74336 15.6914L3.48995 15.62ZM5.29916 19.7087L4.96716 20.3812H4.96716L5.29916 19.7087ZM4.04814 18.5256L3.39794 18.8994H3.39794L4.04814 18.5256ZM13.9519 18.5256L14.6021 18.8994L14.6021 18.8994L13.9519 18.5256ZM12.7008 19.7087L13.0328 20.3812H13.0328L12.7008 19.7087ZM1 4.43C0.585786 4.43 0.25 4.76579 0.25 5.18C0.25 5.59421 0.585786 5.93 1 5.93V4.43ZM17 5.93C17.4142 5.93 17.75 5.59421 17.75 5.18C17.75 4.76579 17.4142 4.43 17 4.43V5.93ZM10.292 1.07769L10.4942 0.355467L10.292 1.07769ZM11.8347 2.68989L12.5612 2.50361V2.50361L11.8347 2.68989ZM7.70803 1.07769L7.91026 1.79991L7.70803 1.07769ZM6.16525 2.68989L6.89175 2.87617L6.16525 2.68989ZM12.292 8.67144C12.3315 8.25911 12.0292 7.89287 11.6169 7.85341C11.2046 7.81395 10.8383 8.11623 10.7989 8.52856L12.292 8.67144ZM10.0716 16.1286C10.0321 16.5409 10.3344 16.9071 10.7467 16.9466C11.1591 16.986 11.5253 16.6838 11.5648 16.2714L10.0716 16.1286ZM7.20114 8.52856C7.16168 8.11623 6.79543 7.81395 6.3831 7.85341C5.97077 7.89287 5.6685 8.25911 5.70796 8.67144L7.20114 8.52856ZM6.43523 16.2714C6.47469 16.6838 6.84093 16.986 7.25326 16.9466C7.66559 16.9071 7.96786 16.5409 7.92841 16.1286L6.43523 16.2714ZM9.8786 19.25H8.1214V20.75H9.8786V19.25ZM8.1214 19.25C7.36509 19.25 6.84276 19.2494 6.43456 19.2161C6.03652 19.1836 5.80777 19.1234 5.63117 19.0362L4.96716 20.3812C5.38061 20.5853 5.8189 20.6708 6.31244 20.7111C6.79582 20.7506 7.38958 20.75 8.1214 20.75V19.25ZM2.74336 15.6914C2.81633 16.4539 2.87449 17.0669 2.95938 17.5609C3.04567 18.0631 3.168 18.4995 3.39794 18.8994L4.69834 18.1518C4.59219 17.9672 4.50947 17.7244 4.43771 17.3068C4.36454 16.881 4.31165 16.3334 4.23654 15.5485L2.74336 15.6914ZM5.63117 19.0362C5.24825 18.8472 4.92218 18.5411 4.69834 18.1518L3.39794 18.8994C3.76611 19.5398 4.31068 20.0571 4.96716 20.3812L5.63117 19.0362ZM13.7635 15.5485C13.6884 16.3334 13.6355 16.881 13.5623 17.3068C13.4905 17.7244 13.4078 17.9672 13.3017 18.1518L14.6021 18.8994C14.832 18.4995 14.9543 18.0631 15.0406 17.5609C15.1255 17.0669 15.1837 16.4539 15.2566 15.6914L13.7635 15.5485ZM9.8786 20.75C10.6104 20.75 11.2042 20.7506 11.6876 20.7111C12.1811 20.6708 12.6194 20.5853 13.0328 20.3812L12.3688 19.0362C12.1922 19.1234 11.9635 19.1836 11.5654 19.2161C11.1572 19.2494 10.6349 19.25 9.8786 19.25V20.75ZM13.3017 18.1518C13.0778 18.5411 12.7517 18.8472 12.3688 19.0362L13.0328 20.3812C13.6893 20.0571 14.2339 19.5398 14.6021 18.8994L13.3017 18.1518ZM11.1591 4.04V4.8H12.6591V4.04H11.1591ZM6.84091 4.8V4.04H5.34091V4.8H6.84091ZM9 1.75C9.72659 1.75 9.93646 1.75699 10.0897 1.79991L10.4942 0.355467C10.0926 0.243008 9.62609 0.25 9 0.25V1.75ZM12.6591 4.04C12.6591 3.3796 12.665 2.90834 12.5612 2.50361L11.1082 2.87617C11.1532 3.05132 11.1591 3.28684 11.1591 4.04H12.6591ZM10.0897 1.79991C10.5726 1.93513 10.9698 2.33639 11.1082 2.87617L12.5612 2.50361C12.2962 1.46977 11.5171 0.641901 10.4942 0.355467L10.0897 1.79991ZM9 0.25C8.37391 0.25 7.90744 0.243008 7.5058 0.355467L7.91026 1.79991C8.06354 1.75699 8.27341 1.75 9 1.75V0.25ZM6.84091 4.04C6.84091 3.28684 6.84684 3.05132 6.89175 2.87617L5.43876 2.50361C5.33498 2.90834 5.34091 3.3796 5.34091 4.04H6.84091ZM7.5058 0.355467C6.48285 0.641901 5.70384 1.46977 5.43876 2.50361L6.89175 2.87617C7.03016 2.33639 7.42735 1.93513 7.91026 1.79991L7.5058 0.355467ZM10.7989 8.52856L10.0716 16.1286L11.5648 16.2714L12.292 8.67144L10.7989 8.52856ZM5.70796 8.67144L6.43523 16.2714L7.92841 16.1286L7.20114 8.52856L5.70796 8.67144ZM15.5091 5.93H17V4.43H15.5091V5.93ZM14.7625 5.10856L13.7635 15.5485L15.2566 15.6914L16.2557 5.25144L14.7625 5.10856ZM11.9091 5.93H15.5091V4.43H11.9091V5.93ZM11.1591 4.8V5.18H12.6591V4.8H11.1591ZM6.09091 5.93H11.9091V4.43H6.09091V5.93ZM5.34091 4.8V5.18H6.84091V4.8H5.34091ZM1 5.93H2.49091V4.43H1V5.93ZM2.49091 5.93H6.09091V4.43H2.49091V5.93ZM4.23654 15.5485L3.2375 5.10856L1.74432 5.25144L2.74336 15.6914L4.23654 15.5485Z" fill="#8D8D8D"/>
                        </svg>
                    </div>
                    
                    </div>
                </div>
                </div>
                
                <hr className='mt-[20px] h-[2px] opacity-30 bg-[#8d8d8d] mb-[20px]'/>
            
                <div className='text-[20px] text-[#8d8d8d] font-[300] flex flex-col text-right gap-[10px]'>
                <p>Доставка: Бесплатно</p>
                <p>Сумма: 30 000 ₽</p>
                </div>
                
                <p className='text-[25px] mt-[16px] text-right text-[#f97316] font-semibold'>Итого: 30 000 ₽</p>
                <div className='flex justify-end mb-[80px]'>
                <a href='/personal/cart/order' className='mt-[16px] rounded bg-[#f97316] w-[100%] h-[55px] text-[18px] text-[#fff] gap-[15px] flex flex-row items-center justify-center'>
                    Перейти к оформлению заказа
                    <svg width="18" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#fff" stroke-linecap="square"/>
                    </svg>
                </a>
                </div>

            </form>
            
            </section>
    </main>
    )
}