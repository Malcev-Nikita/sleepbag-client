import Image from 'next/image'
import Link from 'next/link';
import RegForm from '@/widgets/person/reg/reg-form';

export default function RegPage() {
    return (
        <main className='font-[Manrope]'>
            <Image alt='Фоновое изображение' className='catalog_header_img aspect-video w-[100%] h-[110vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
            
            <Image alt='Фоновое изображение' className='forgot_pass_mobile hidden aspect-video w-[100%] h-[120vh] object-cover' src='/bg/forgot_pass_mobile.png' width={1920} height={1080}/>

            <section className='mobile_block font-[Manrope] absolute translate-y-[-110%] container m-auto flex justify-center'>
                <header className='text-[28px] font-[Unbounded] font-[700] text-[#F97316]'>РЕГИСТРАЦИЯ</header>
                
                <hr className='my-[30px] opacity-60 h-[2px] bg-[#cacaca]'/>
                    
                <div className='mobile_block_code flex flex-col'>
                    <div className='flex flex-col gap-[30px]'>
                        <div>
                            <p className='text-[#fff] text-[23px] mb-[15px]'>Введите ваш адрес эл.почты</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                        </div>

                        <div>
                            <p className='text-[#fff] text-[23px] mb-[15px]'>Введите имя</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иван' id='email' name='email' required/>
                        </div>

                        <div>
                            <p className='text-[#fff] text-[23px] mb-[15px]'>Введите фамилию</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов' id='email' name='email' required/>
                        </div>

                        <div>
                            <p className='text-[#fff] text-[23px] mb-[15px]'>Введите ваш номер телефона</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='+7 999 999 99 99' id='email' name='email' required/>
                        </div>

                        <div>
                            <p className='text-[#fff] text-[23px] mb-[15px]'>Придумайте пароль</p>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Пароль' id='pass' name='pass' required/>
                        </div>
                    </div>

                    <div className='flex flex-col text-[#fff] mt-[35px] text-[21px]'>
                        <button type='submit' className='flex justify-center items-center text-white bg-[#f97316] h-[62px] text-[23px] rounded-xl'>Зарегистрироваться</button>
                        <p className='text-center mt-[15px]'>Уже есть аккаунт? <a href='/personal/auth' className='text-right font-semibold text-[#f97316] pt-[15px]'>Войти</a></p>
                    </div>
                </div>
            </section>

            <div className='mobile_none container m-auto flex justify-center'>
                <div className='absolute w-[637px] h-[919px] bg-[#fff] translate-y-[-105%] z-0 opacity-50 rounded-3xl'/>

                <div className='w-[591px] h-[873px] bg-[#fff] p-[48px] translate-y-[-108%] absolute z-1 rounded-3xl shadow-2xl'>
                    <div className='auth_header w-[100%] items-end flex flex-row'>
                        <h1 className='items-end font-bold m-[0px] font-[Unbounded] text-4xl'>Регистрация</h1>
                        
                        <div className='h-[80px] w-[100%] text-right text-base'>
                            <p className='m-[0px] text-gray-600'>Уже есть аккаунт?</p>
                            <a className='m-[0px] text-[#f97316] font-semibold' href='/personal/auth'>Войти</a>
                        </div>
                    </div>

                    <hr className='mt-[35px] mb-[35px] bg-[#000]'/>
                    
                    <div className='main_auth'>
                        <RegForm />
                    </div>
                </div>
            </div>
        </main>
    )
}