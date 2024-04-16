'use client'

import FAQItem from '@/entities/footer/faq-item'

export default function FAQ({data, faq}) {
    const faq_header = () => ({__html: data.faq_header})
    const faq_description = () => ({__html: data.faq_description})

    return (
        <section className='section_faq relative pb-[50px] container m-auto'>
            <div className='section_header items-start w-[100%]'>
                <div className='section_header_inside'>
                    <div className='header_line'></div>
                    <h2 dangerouslySetInnerHTML={faq_header()} />
                    <div className='header_line_mobile hidden'/>
                </div>

                <p className='under_header_text' dangerouslySetInnerHTML={faq_description()} />
            </div>

            <div className='questions w-[100%]'>
                {faq.map(item => <FAQItem key={ item.id } item={ item } />)}
            </div>
      </section>
    )
}