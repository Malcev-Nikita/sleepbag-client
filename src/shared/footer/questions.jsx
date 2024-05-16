import QuestionsForm from "@/widgets/questions-form"
import Image from "next/image"

export default function Questions({data}) {
    const questions_header = () => ({__html: data.questions_header})
    const questions_description = () => ({__html: data.questions_description})
    const questions_button = () => ({__html: data.questions_button})
    const questons_offert = () => ({__html: data.questons_offert})
    const questions_input_name = data.questions_input_name
    const questions_input_phone = data.questions_input_phone
    const questions_input_email = data.questions_input_email
    const questions_input_quesion = data.questions_input_quesion

    return (
        <section id='contacts' className='section_contact relative overflow-hidden aspect-video flex justify-center items-center'>
            <Image alt='Фоновое изображение' className='question_img w-[100%] h-[102vh] object-cover absolute' src='/bg/question_img.png' width={1920} height={1080}/>
            <Image alt='Фоновое изображение' className='question_img_mobile hidden w-[100%] h-[100vh] object-cover absolute' src='/bg/questions_mobile.png' width={1920} height={1080}/>
            
            <div className='container m-auto relative flex justify-center'>
                <div className="contacts_main_part">
                    <div className='section_header container m-auto'>
                        <h2 className="font-[Unbounded] font-bold" dangerouslySetInnerHTML={questions_header()} />
                        <div className='header_line_mobile hidden'></div>
                    </div>

                    <p dangerouslySetInnerHTML={questions_description()} />

                    <QuestionsForm questions_button={questions_button} questons_offert={questons_offert} questions_input_name={questions_input_name} questions_input_phone={questions_input_phone} questions_input_email={questions_input_email} questions_input_quesion={questions_input_quesion} />
                </div>
            </div> 
        </section>
    )
}