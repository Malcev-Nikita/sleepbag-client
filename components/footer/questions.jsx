import Image from "next/image"
export default function Questions() {
    return (
        <section id='contacts' className='section_contact relative'>
          <Image className='question_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/question_img.png' width={1920} height={1080}/>
            <div className='container m-auto'>
                <div className="contacts_main_part z-5 absolute translate-[-50%] translate-y-[-120%] translate-x-[-50%] left-[50%]">
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
                        <div className="inputs_text">
                            <p>Нажимая на кнопку Отправить, я соглашаюсь с <a>офертой на обработку персональных данных.</a></p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}