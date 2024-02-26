import Image from 'next/image'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Page() {
  return (
    <main>
        <Image className='catalog_header_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
        
        <div className='container m-auto flex justify-center'>

            <div className='absolute w-[637px] h-[919px] bg-[#fff] translate-y-[-105%] z-0 opacity-50 rounded-3xl'/>

            <div className='w-[591px] h-[873px] bg-[#fff] p-[48px] translate-y-[-108%] absolute z-1 rounded-3xl shadow-2xl'>
                
                <div className='auth_header w-[100%] items-end flex flex-row'>
                    <h1 className='items-end font-bold m-[0px] font-[Unbounded] text-4xl'>Регистрация</h1>
                    
                    <div className='h-[80px] w-[100%] text-right text-base'>
                        <p className='m-[0px] text-gray-600'>Уже есть аккаунт?</p>
                        <a className='m-[0px] text-orange-500 font-semibold' href='/authorisation'>Войти</a>
                    </div>
                
                </div>

                <hr className='mt-[35px] mb-[35px] bg-[#000]'/>
                
                <div className='main_auth'>
                    
                    <form className='flex flex-col' action='/login' method='post'>
                        <label for='email' className='text-xl pb-[15px]'>Введите ваш адрес эл. почты</label>
                        <input type='email' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='E-mail' id='email' name='email' required/>
                        
                        <div className='flex flex-row gap-[20px]'>
                            <div className='flex flex-col w-[50%]'>
                                <label for='name' className='text-xl pb-[15px] pt-[25px]'>Введите имя</label>
                                <input type='name' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иван' id='name' name='name' required/>
                            </div>
                            <div className='flex flex-col w-[50%]'>
                                <label for='firstname' className='text-xl pb-[15px] pt-[25px]'>Введите имя</label>
                                <input type='name' className='w-[100%] h-[62px] focus:outline-orange-500 border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' placeholder='Иванов' id='firstname' name='firstname' required/>
                            </div>
                        </div>
                        
                        <label for='phone' className='text-xl pb-[15px] pt-[25px]'>Введите ваш номер телефона</label>
                        <input type='phone' className='pb-[25px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' id='phone' name='phone' placeholder='+7 999 999 99-99' required/>
                        
                        <label for='password' className='text-xl pb-[15px] pt-[25px]'>Придумайте пароль</label>
                        <input type='password' className='pb-[25px] focus:outline-orange-500 flex justify-end w-[100%] h-[62px] border-[1px] border-gray-500 text-xl pl-[27px] pb-[20px] pt-[20px] rounded-xl' id='password' name='password' placeholder='********' required/>
                        
                        <button type='submit' className='mt-[35px] flex justify-center items-center font-semibold text-white bg-[#f97316] h-[62px] text-xl rounded-xl'>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
