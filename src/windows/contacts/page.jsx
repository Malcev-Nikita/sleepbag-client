import Image from 'next/image'

import Ymap from "@/shared/map";

export default function ContactsPage() {
    return (
        <main className="font-[Manrope]">
            <div className='container m-auto'>
                <article className='link_path pt-[17vh]'>
                    <a href='/' className='text-[#000] opacity-70'>Главная / </a><span className='text-orange-500'>Контакты</span>
                </article>
                
                <section className='pt-[50px]'>
                    <header className='cart_header gap-[50px] flex flex-col'>
                        <h2 className='text-[32px] font-[Unbounded] font-bold'>КОНТАКТЫ</h2>
                        <p className='text-[26px] font-[600]'>Специалисты компании “SleepBag” готовы ответить на все ваши вопросы и помочь определиться с выбором наиболее подходящего для вас предложения!</p>
                    </header>
                </section>
                
                <section className='contact_desc p-[0]'>
                    <hr className='hidden_hr my-[75px] h-[2px] bg-[#8d8d8d]'/>
                    <div className='two_parts flex flex-row justify-between'>
                    
                        <div className='w-[100%]'>
                            
                            <div className='flex items-center gap-[20px] pb-[30px] flex-row'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 13.8333H17.5M6.5 10.1667H12.9167M12 23H19.8571C21.0823 23 21.6948 23 22.1421 22.719C22.3753 22.5725 22.5725 22.3753 22.719 22.1421C23 21.6948 23 21.0823 23 19.8571V12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#F97316" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <h2 className='font-[600] text-[24px]'>Связаться с нами:</h2>
                            </div>
                        
                            <div className='contact_mails flex flex-col text-[18px] pb-[30px]'>
                                <p className='text-[#8d8d8d] font-[400]'>Поставка продукции: <a className='text-[#f97316]'>sleepbagmanager@mail.ru</a></p>
                                <p className='text-[#8d8d8d] font-[400]'>Технические вопросы: <a className='text-[#f97316]'>sleepbaginfo@mail.ru</a></p>
                            </div>

                            <p className='text-[#8d8d8d] text-[18px] font-[400]'>Номера телефонов: +7 (991) 111-34-56, +7 (991) 245-35-12 </p>

                        
                        </div>

                        <hr className='hidden_hr hidden my-[75px] h-[2px] bg-[#8d8d8d]'/>

                        <div className='w-[100%]'>
                        
                            <div className='flex items-center gap-[20px] pb-[30px] flex-row'>     
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 10.4641C19 14.8983 12.5226 21.0266 10.5581 22.7832C10.2349 23.0723 9.76511 23.0723 9.44189 22.7832C7.47739 21.0266 1 14.8983 1 10.4641C1 5.2372 5.02944 1 10 1C14.9706 1 19 5.2372 19 10.4641Z" stroke="#F97316" stroke-width="1.5"/>
                                    <path d="M13 8.95413C13 10.7113 11.6569 12.1358 10 12.1358C8.34315 12.1358 7 10.7113 7 8.95413C7 7.19695 8.34315 5.77248 10 5.77248C11.6569 5.77248 13 7.19695 13 8.95413Z" stroke="#F97316" stroke-width="1.5"/>
                                </svg>
                                <h2 className='font-[600] text-[24px]'>Как нас найти:</h2>
                            </div>
                            
                            <p className='contact_address text-[#8d8d8d] text-[18px] pb-[30px] font-[400]'>214000, г. Смоленск, ул. Пушкина, д. 6, 2-й этаж, оф. 12</p>

                            <p className='text-[#8d8d8d] text-[18px] font-[400]'>Пожалуйста, согласуйте с нами время вашего визитка заранее по любому из указанных контактных телефонов.</p>
                
                        </div>
                
                    </div>

                </section>

                <Ymap x_position={ 55.75 } y_position={ 37.57 } zoom={ 9 } />
            </div>
            
            <section className='section_contact mobile_none relative flex flex-col items-center'>
               <Image alt='Фоновое изображение' className='question_img aspect-video w-[100%] h-[50vh] object-cover' src='/bg/question_img.png' width={1920} height={1080}/>
                
                <div className='container m-auto flex flex-col items-center'>
                    <div className="z-5 absolute translate-y-[-150%] flex flex-col gap-[30px]">
                        <div className='section_header container m-auto'>
                            <h2 className="font-[Unbounded] font-[600] w-[70%] text-[#fff] text-[28px]">Оставьте заявку и мы свяжемся с вами в ближайшее время, чтобы ответить на все ваши вопросы!</h2>
                        </div>

                        <div className="flex flex-row gap-[16px]">
                                <input placeholder='Ваше имя' className="w-[25%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="NAME"/>

                                <input placeholder='Ваш телефон' className="w-[25%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="PHONE" />

                                <input placeholder='Ваш e-mail' className="w-[25%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="EMAIL" />

                                <button className="w-[30%] rounded-[5px] text-[20px] text-[#fff] bg-[#f97316]">Отправить</button>
                        </div>

                        <div className="flex text-[#fff] justify-end"> <p className='w-[26%] text-center font-[500]'>Нажмите на кнопку Отправить, я соглашаюсь с <a href='#' className='underline font-[300]'>офертой на обработку персональных данных.</a></p> </div>

                    </div>
                </div> 
            </section>
        </main>
    )
}