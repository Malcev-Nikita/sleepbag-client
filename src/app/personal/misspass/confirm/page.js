import Image from 'next/image'


export const metadata = {
  title: 'SleepBag Спальники-Органайзеры: Забыл пароль',
  description: 'Generated by create next app',
}

export default function Page() {
  return (
    <main className='font-[Manrope]'>
        <Image alt='Фоновое изображение' className='catalog_header_img aspect-video w-[100%] h-[110vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080}/>
        <Image alt='Фоновое изображение' className='forgot_pass_mobile hidden aspect-video w-[100%] h-[100vh] object-cover' src='/bg/forgot_pass_mobile.png' width={1920} height={1080}/>
        <section className='mobile_block absolute translate-y-[-185%] container m-auto flex justify-center'>
          <header className='text-[27px] font-[Unbounded] font-[700] text-[#F97316]'>ПОДТВЕРЖДЕНИЕ ЛИЧНОСТИ</header>
          <p className='text-[#fff] text-[22px] mt-[15px]'>Введите код который мы вам отправили на адрес <span className='font-[500] text-[#fff] text-[22px]'>E-MAIL ПОЛЬЗОВАТЕЛЯ</span></p>
          <div className='mobile_block_code flex flex-col'>
            <hr className='my-[30px] opacity-80 h-[2px] bg-[#cacaca]'/>
            <div className='flex flex-row justify-between'>
              <label className='absolute w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input1'/>
              <input id='input1' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[19%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input2'/>
              <input id='input2' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[33%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input3'/>
              <input id='input3' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[47%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input4'/>
              <input id='input4' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[61%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input5'/>
              <input id='input5' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[75%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input6'/>
              <input id='input6' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
              <label className='absolute left-[89%] w-[11%] h-[100px] bg-[#fff] opacity-30 rounded-[10px]' for='input7'/>
              <input id='input7' className='focus:outline-orange-500 border-[1px] border-[#fff] bg-transparent w-[12%] h-[100px] rounded-[10px] text-[#fff] font-[600] font-[Unbounded] text-[40px] text-center'/>
            </div>
            <div className='flex flex-row justify-end gap-[60px] text-[#F97316] font-[500] text-[21px] mt-[30px]'>
              <a href='/personal/misspass'>Назад</a>
              <button>Отправить повторно</button>
            </div>
          </div>
        </section>
        <section className='mobile_none container m-auto flex justify-center p-[0]'>
            <div className='absolute w-[637px] h-[919px] bg-[#fff] translate-y-[-105%] z-0 opacity-50 rounded-3xl'></div>
            
            <div className='w-[591px] h-[873px] bg-[#fff] p-[48px] translate-y-[-108%] absolute z-1 rounded-3xl shadow-2xl'>
                
                <div className='auth_header items-start flex flex-col'>
                    
                    <h1 className='items-start font-bold m-[0px] font-[Unbounded] text-4xl'>Подтверждение личности</h1>
                    
                    <div className='mt-[34px] text-left text-base'>
                        <p className='m-[0px] text-gray-600'>Введите код, который мы отправили на адрес <span className='text-black'>ПОЧТА ПОЛЬЗОВАТЕЛЯ</span></p>
                    </div>
                
                </div>
                
                <hr className='mt-[35px] mb-[35px] bg-[#000]'/>
                
                <div className='main_auth'>
                    
                    <form className='flex flex-col' action='/proof_code' method='post'>
                        
                        <div className='flex flex-row gap-[15px]'>
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                          <input className='w-[15%] h-[89px] pl-[17px] rounded-xl focus:outline-orange-500 border-[1px] border-gray-500 text-5xl'></input>  
                        </div>

                        <div className='flex flex-row justify-end gap-[50px]'>
                            <a href='/forgot_password' className='text-right font-semibold text-[#f97316] pt-[15px]'>Назад</a>
                            <a href='#' className='text-right font-semibold text-[#f97316] pt-[15px]'>Отправить код повторно</a>
                        </div>
                    
                    </form>
  
                </div>
  
            </div>
        </section>
    </main>
  )
}
