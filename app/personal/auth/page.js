import Image from 'next/image'
import AuthForm from './form'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function Page() {
    return (
        <main>
            <Image className='catalog_header_img aspect-video w-[100%] h-[110vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080} alt="bg_catalog" />

            <div className='container m-auto flex justify-center'>
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
