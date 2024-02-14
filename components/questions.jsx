export default function Questions() {
    return (
        <section id='contacts' className='section_contact pb-[150px] relative'>
            <div className='container m-auto'>
                <div className="contacts_main_part">
                    <div className='section_header container m-auto'>
                        <div className='header_line'></div>
                        <h1>ОСТАЛИСЬ <span>ВОПРОСЫ</span>?</h1>
                    </div>
                    <p>
                        Оставьте заявку и мы свяжемся с вами в ближайшее время, чтобы ответить на все ваши вопросы!
                    </p>
                    <div className="contacts_inputs">
                        <input placeholder="Ваше имя"></input>
                        <input placeholder="Ваш телефон"></input>
                        <input placeholder="Ваш e-mail"></input>
                        <input placeholder="Распишите ваш вопрос"></input>
                        <button>Отправить</button>
                        <p>Нажимая на кнопку Отправить, я соглашаюсь с <a>офертой на обработку персональных данных.</a></p>
                    </div>
                </div>
            </div> 
        </section>
    )
}