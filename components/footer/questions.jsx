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
        <section id='contacts' className='section_contact relative'>
          <Image className='question_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/question_img.png' width={1920} height={1080}/>
            <div className='container m-auto'>
                <div className="contacts_main_part z-5 absolute translate-[-50%] translate-y-[-120%] translate-x-[-50%] left-[50%]">
                    <div className='section_header container m-auto'>
                        <div className='header_line'></div>
                        <h1 className="font-[Unbounded] font-bold" dangerouslySetInnerHTML={questions_header()} />
                    </div>

                    <p dangerouslySetInnerHTML={questions_description()} />

                    <div className="contacts_inputs">
                        {questions_input_name != null ? (
                            <input className="w-[100%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="NAME" placeholder={questions_input_name} />
                        ) : ('')}

                        {questions_input_phone != null ? (
                            <input className="w-[100%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="PHONE" placeholder={questions_input_phone} />
                        ) : ('')}

                        {questions_input_email != null ? (
                            <input className="w-[100%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="EMAIL" placeholder={questions_input_email} />
                        ) : ('')}

                        {questions_input_quesion != null ? (
                            <textarea className="w-[100%] h-[20%] focus:outline-none text-black font-semibold rounded pl-[24px] pt-[18px] pb-[18px]" name="QUESTION" placeholder={questions_input_quesion} />
                        ) : ('')}

                        <button dangerouslySetInnerHTML={questions_button()} />
                        <div className="inputs_text"> <p dangerouslySetInnerHTML={questons_offert()} /> </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}