export default function Questions() {
    return (
        <section id='contacts' className='section_contact pb-[150px] relative'>
            <div className='container m-auto'>
                <div className='section_header'>
                    <div className='section_header_inside'>
                        <div className='header_line'></div>
                        <h1>ОСТАЛИСЬ <span>ВОПРОСЫ</span>?</h1>
                    </div>
                    <p className='under_header_text'>Оставьте заявку и мы свяжемся с вами в ближайшее время, чтобы ответить на все ваши вопросы!</p>
                </div> 

                <div className='contact_main mt-[40px]'>
                    <div className='contact_inputs'>
                        <div className='inputs_up'>
                            <input placeholder='Ваше имя'></input>
                            <input placeholder='Ваш телефон'></input>
                            <input placeholder='Ваш e-mail'></input>
                        </div>
                        <div className='inputs_down'>
                            <input placeholder='Распишите ваши вопросы'></input>
                        </div>
                    </div>

                    <div className='contact_text'>
                        <a href=''><button className='text_button'>Отправить</button></a>

                        <div className='text_link'>
                            <p>Нажимая на кнопку Отправить, я соглашаюсь с <a>офертой на обработку персональных данных.</a></p>
                        </div>
                    </div>
                </div>      
            </div> 
        </section>
    )
}