import Image from 'next/image'
import { markdown } from 'markdown'

export default function ProductionItem({ production, index }) {
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
}