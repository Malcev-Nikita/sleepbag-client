import Image from 'next/image'


export default function Reasons({data, teasers}) {
    return (
        <section className='section_reasons relative'>
            <div className='section_header container m-auto'>
                <div className='header_line'></div>
                <h1>6 ПРИЧИН СОТРУДНИЧАТЬ С НАМИ</h1>
            </div>

            <div className='reasons container m-auto'>
                {teasers.data.map(teaser => (
                    <div className='reason'>
                        <div className='reason_icon'>
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + teaser.attributes.image.data.attributes.url} alt='' width={70} height={70}/>
                        </div>

                        <div className='reason_text'>
                            <p><span>{teaser.attributes.header}</span></p>
                            <p>{teaser.attributes.description}</p>
                        </div>
                    </div>
                ))}
            </div>
      </section>
    )
}
