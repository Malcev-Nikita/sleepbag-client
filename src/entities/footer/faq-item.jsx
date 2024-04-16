import Image from 'next/image'
import anime from "animejs"
import { markdown } from 'markdown'

export default function FAQItem({ item }) {
    function description() {
        return {__html: markdown.toHTML(item.attributes.description)};
    }

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
    
    return (
        <div className='question' key={item.id}>
            <button onClick={(element) => QuestionsClick(element)}>
                <h4>{item.attributes.header}</h4>
                <Image className='arrow_down' src="/icons/arrow_down.svg" alt='Иконка развёртывания вопроса' width={25} height={13}/>
            </button>

            <span/>

            <div className="content">
                <div className='markdown' dangerouslySetInnerHTML={description()}/>
            </div>
        </div>
    )
}