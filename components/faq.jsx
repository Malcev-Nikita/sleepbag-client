'use client'

import Image from 'next/image'
import anime from "animejs"
import { markdown } from 'markdown'


function QuestionsClick(element) {
    if(element.target.closest('.question').classList.contains('active')) {
        element.target.closest('.question').classList.remove('active')

        anime({
            targets: element.target.closest('.question').querySelector('button img'),
            rotate: 0
        })
    }
    else {
        element.target.closest('.question').classList.add('active')

        anime({
            targets: element.target.closest('.question').querySelector('button img'),
            rotate: 180
        })
    }
}

export default function FAQ({data}) {
    return (
        <section className='section_faq relative pb-[50px]'>
            <div className='section_header container m-auto'>
                <div className='section_header_inside'>
                    <div className='header_line'></div>
                    <h2>РАЗДЕЛ <span>FAQ</span></h2>
                </div>

                <p className='under_header_text'>Ответы на самые часто задаваемые вопросы наших клиентов.</p>
            </div>

            <div className='questions container m-auto'>
                {data.data.map(item => {
                    function description() {
                        return {__html: markdown.toHTML(item.attributes.description)};
                    }
                    
                    return (
                        <div className='question'>
                            <button onClick={(element) => QuestionsClick(element)}>
                                <h4>{item.attributes.header}</h4>
                                <Image className='arrow_down' src="/icons/arrow_down.svg" width={25} height={13}/>
                            </button>

                            <span/>

                            <div className="content">
                                <div className='markdown' dangerouslySetInnerHTML={description()}/>
                            </div>
                        </div>
                    )
                })}
            </div>
      </section>
    )
}