'use client'

import Image from 'next/image'
import anime from "animejs"
import { markdown } from 'markdown'


function QuestionsClick(element) {
    console.log(element.target.closest('.question'))
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
        <section className='section_faq relative'>
            <div className='section_header container m-auto'>
                <div className='section_header_inside'>
                    <div className='header_line'></div>
                    <h1>РАЗДЕЛ <span>FAQ</span></h1>
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

                            <div className="content">
                                <span/>
                                
                                <div className='markdown' dangerouslySetInnerHTML={description()}/>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='absolute right-0 top-[400px] w-[50px] h-[300px] rounded-[513px] bg-[#95F35A] blur-[125px]'></div>

            <div className="absolute left-[300px] top-0 w-[120px] h-[120px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="622" height="622" viewBox="0 0 622 622" fill="none">
                    <g opacity="0.8" filter="url(#filter0_f_729_323)">
                        <circle cx="311" cy="311" r="61" fill="#95F35A"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_729_323" x="0" y="0" width="622" height="622" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_729_323"/>
                        </filter>
                    </defs>
                </svg>
            </div>
      </section>
    )
}