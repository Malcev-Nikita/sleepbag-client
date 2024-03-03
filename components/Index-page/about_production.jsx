import Image from 'next/image'
import { markdown } from 'markdown'


export default function AboutProduction({data, productions}) {
    const production_header = () => ({__html: data.production_header})
    const production_media = () => ({__html: data.production_media})

    return (
        <section className='container m-auto' id='section_aboutproduction' itemscope itemtype="http://schema.org/Product">
            <header className='flex section_header items-center gap-[25px]' role="banner">
                <div className='w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' itemprop="name" dangerouslySetInnerHTML={production_header()} />
            </header>

            <article className="flex flex-col gap-[50px]" role="article">
                {productions.map((production, index) => {
                    let description = () => ({ __html: markdown.toHTML(production.attributes.description) })
                    index++
                    
                    if(index % 2 == 0) {
                        return (
                            <div className='flex justify-between content-center items-center gap-[50px]' key={index} role="group" itemscope itemtype="http://schema.org/Article">
                                <div className='w-[50%] text-[20px]' itemprop="articleBody" dangerouslySetInnerHTML={description()} />
    
                                <div className='w-[50%]'>
                                    <Image className='w-[100%] h-[100%] object-cover aspect-[16/11] rounded-[10px]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + production.attributes.photo.data.attributes.url} alt={production.attributes.photo.data.attributes.alt} width={643} height={510} itemprop="image" />
                                </div>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className='flex justify-between content-center items-center gap-[50px]' key={index} role="group" itemscope itemtype="http://schema.org/Article">
                                <div className='w-[50%]'>
                                    <Image className='w-[100%] h-[100%] object-cover aspect-[16/11] rounded-[10px]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + production.attributes.photo.data.attributes.url} alt={production.attributes.photo.data.attributes.alt} width={643} height={510} itemprop="image" />
                                </div>

                                <div className='w-[50%] text-[20px]' itemprop="articleBody" dangerouslySetInnerHTML={description()} />
                            </div>
                        );
                    }
                })}
            </article>

            <footer className="h-[550px] aboutus_footer rounded-[10px] overflow-hidden p-0" role="contentinfo" itemprop="manufacturer" dangerouslySetInnerHTML={production_media()} />
        </section>
    )
}
