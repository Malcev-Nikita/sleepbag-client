import Image from 'next/image'


export default function Reasons({data, teasers}) {
    const teasers_header = () => ({__html: data.teasers_header})

    return (
        <section className='section_reasons relative'>
            <div className='section_header container m-auto'>
                <div className='header_line'></div>
                <h1 dangerouslySetInnerHTML={teasers_header()} />
            </div>

            <div className='reasons container m-auto'>
                {teasers.map(teaser => (
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
