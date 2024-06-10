import Image from 'next/image'

import AuthForm from '@/widgets/person/auth/auth-form';
import AuthFormMobile from '@/widgets/person/auth/auth-form-mobile';

export default function AuthPage() {
    return (
        <main className='font-[Manrope]'>
            <Image className='catalog_header_img aspect-video w-[100%] h-[110vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080} alt="bg_catalog" />

            <Image alt='Фоновое изображение' className='forgot_pass_mobile hidden aspect-video w-[100%] h-[100vh] object-cover' src='/bg/forgot_pass_mobile.png' width={1920} height={1080}/>
            
            <section className='mobile_block absolute translate-y-[-140%] container m-auto flex justify-center'>
                <header className='text-[28px] font-[Unbounded] font-[700] text-[#F97316]'>
                    АВТОРИЗАЦИЯ
                </header>
                
                <hr className='my-[30px] opacity-60 h-[2px] bg-[#cacaca]'/>
                
                <AuthFormMobile />
            </section>

            <div className='mobile_none container m-auto flex justify-center'>
                <div className='absolute w-[637px] h-[919px] bg-[#fff] translate-y-[-105%] z-0 opacity-50 rounded-3xl'></div>
                
                <div className='w-[591px] h-[873px] bg-[#fff] p-[48px] translate-y-[-108%] absolute z-1 rounded-3xl shadow-2xl'>
                    <div className='auth_header items-end flex flex-row'>
                        <h1 className='items-end font-bold m-[0px] font-[Unbounded] text-4xl'>Авторизация</h1>
                        
                        <div className='h-[80px] text-right text-base'>
                            <p className='m-[0px] text-gray-600'>У вас ещё нет аккаунта?</p>
                            <a className='m-[0px] text-[#f97316] font-semibold' href='/personal/reg'>Зарегистрироваться</a>
                        </div>
                    </div>
                    
                    <hr className='mt-[35px] mb-[35px] bg-[#000]'/>
                    
                    <div className='main_auth'>
                        <AuthForm />
                    </div>
                </div>
            </div>
        </main>
    )
}