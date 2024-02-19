import Image from 'next/image'
import { markdown } from 'markdown'


export default function AboutProduction({data, productions}) {
    const production_header = () => ({__html: data.production_header})
    const production_media = () => ({__html: data.production_media})
    let index = 0

    return (
        <section id='section_aboutproduction'>
            <div className='section_header container m-auto'>
                <div className='header_line'></div>
                <h1 dangerouslySetInnerHTML={production_header()} />
            </div>

            <div className="content">
                {productions.map(production => {
                    let description = () => ({__html: markdown.toHTML(production.attributes.description)})
                    index++

                    if(index % 2 != 0) {
                        return (
                            <div className='abprod container m-auto'>
                                <div className='abprod_left w-[50%] flex justify-center' dangerouslySetInnerHTML={description()} />
                
                                <div className='abprod_right'>
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + production.attributes.photo.data.attributes.url} alt='' width={643} height={510} />
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='abprod container m-auto'>
                                <div className='abprod_right'>
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + production.attributes.photo.data.attributes.url} alt='' width={643} height={510} />
                                </div>

                                <div className='abprod_left w-[50%] flex justify-center' dangerouslySetInnerHTML={description()} />
                            </div>
                        )
                    }
                })}
            </div>

            <div className="container m-auto h-[550px] rounded-[10px] overflow-hidden" dangerouslySetInnerHTML={production_media()} />
        </section>
    )
}
