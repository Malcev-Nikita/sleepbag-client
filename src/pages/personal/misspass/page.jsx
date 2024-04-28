import Image from 'next/image'
import Link from 'next/link';

export default function MisspassPage() {
    return (
        <main className='font-[Manrope]'>
            <Image alt='Фоновое изображение' className='catalog_header_img aspect-video w-[100%] h-[110vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
            
            <Image alt='Фоновое изображение' className='forgot_pass_mobile hidden aspect-video w-[100%] h-[100vh] object-cover' src='/bg/forgot_pass_mobile.png' width={1920} height={1080}/>
            
            <section className='mobile_block absolute translate-y-[-155%] container m-auto flex justify-center'>
                <header className='text-[28px] font-[Unbounded] font-[700] text-[#F97316]'>ВОССТАНОВЛЕНИЕ ПАРОЛЯ</header>
                
                <p className='text-[#fff] text-[22px] mt-[15px]'>Чтобы сбросить пароль, введите свой адрес электронной почты, который вы использовали при регистрации</p>
                
                <div className='mobile_block_code flex flex-col'>
                    <hr className='my-[30px] opacity-80 h-[2px] bg-[#cacaca]'/>

                    <div className='flex flex-col justify-between'>
                        <p className='text-[#fff] text-[23px] mb-[15px]'>Адрес электронной почты</p>
                        
                        <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                        
                        <button type='submit' className='mt-[25px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-[23px] rounded-xl'>Продолжить</button>
                    </div>

                    <div className='flex flex-row justify-end gap-[60px] text-[#F97316] font-[500] text-[21px]'>
                        <Link href='/personal/auth' className='text-right font-semibold text-[#f97316] pt-[15px]'>Вернуться ко входу</Link>
                    </div>
                </div>
            </section>
            
            <div className='mobile_none container m-auto flex justify-center'>
                <div className='absolute w-[637px] h-[919px] bg-[#fff] translate-y-[-105%] z-0 opacity-50 rounded-3xl'></div>
                
                <div className='w-[591px] h-[873px] bg-[#fff] p-[48px] translate-y-[-108%] absolute z-1 rounded-3xl shadow-2xl'>
                    <div className='auth_header items-start flex flex-col'>
                        <h1 className='items-start font-bold m-[0px] font-[Unbounded] text-4xl'>Восстановление пароля</h1>
                        
                        <div className='mt-[34px] text-left text-base'>
                            <p className='m-[0px] text-gray-600'>Чтобы сбросить пароль, введите свой адрес электронной почты, который вы использовали при регистрации</p>
                        </div>
                    </div>
                    
                    <hr className='mt-[35px] mb-[35px] bg-[#000]'/>
                    
                    <div className='main_auth'>
                        <form className='flex flex-col' action='/forg_pass' method='post'>
                            <label for='email' className='text-xl pb-[15px]'>Адрес электронной почты</label>
                            <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                            <button type='submit' className='mt-[25px] flex justify-center items-center text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Продолжить</button>
                            <Link href='/personal/auth' className='text-right font-semibold text-[#f97316] pt-[15px]'>Вернуться ко входу</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}