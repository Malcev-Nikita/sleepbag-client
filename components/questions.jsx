import Image from "next/image"
export default function Questions() {
    return (
        <section id='contacts' className='section_contact relative'>
          
          <Image className='question_img aspect-video translate-y-[2px] w-[100%] h-[100vh] object-cover' src='/bg/question_img.png' width={1920} height={1080}/>
            
            <div className='container m-auto'>
                
                <div className="contacts_main_part absolute left-[28vw] top-[30vh]">
                    
                    <div className='section_header'>
                        <div className='header_line'></div>
                        <h2>ОСТАЛИСЬ <span>ВОПРОСЫ</span>?</h2>
                    </div>
                    
                    <p>Оставьте заявку и мы свяжемся с вами в ближайшее время, чтобы ответить на все ваши вопросы!</p>
                    
                    <div className="contacts_inputs">
                        <textarea placeholder="Ваше имя"></textarea>
                        <textarea placeholder="Ваш телефон"></textarea>
                        <textarea placeholder="Ваш e-mail"></textarea>
                        <textarea placeholder="Распишите ваш вопрос"></textarea>
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