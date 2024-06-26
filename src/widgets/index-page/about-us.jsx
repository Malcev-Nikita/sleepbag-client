import Image from 'next/image'
import { markdown } from 'markdown'
import StatItem from '@/entities/index-page/stat-item'


export default function AboutUs({data, stats}) {
    const about_header = () => ({__html: data.about_header})
    const about_first_description = () => ({__html: markdown.toHTML(data.about_first_description)})
    const about_second_description = () => ({__html: markdown.toHTML(data.about_second_description)})

    return (
        <section className="container m-auto relative font-[Manrope]" id='aboutus' itemscope itemtype="http://schema.org/Organization">
            <header className='section_header flex items-center gap-[25px] pb-[100px]' role="banner">
                <div className='header_line w-[5vw] h-[1px] bg-[#F97316]' />
                    <h2 className='font-bold font-[unbounded] text-[42px]' itemprop="name" dangerouslySetInnerHTML={about_header()} />
                <div className='header_line_mobile hidden'/>
            </header>

            <div className='flex flex-col gap-[34px]' role="main">
                <div className='aboutus_desc flex gap-[25px] items-center' role="article" itemscope itemtype="http://schema.org/Article">
                    <div className='w-[50%] aboutus_for_mobile hidden'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.about_first_media.data.attributes.url} alt={data.about_first_media.data.attributes.alt} width={1650} height={700} itemprop="image" />
                    </div>
                    
                    <div className='w-[50%] text-[20px]' itemprop="articleBody" dangerouslySetInnerHTML={about_first_description()} />

                    <div className='w-[50%] aboutus_default_img'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.about_first_media.data.attributes.url} alt={data.about_first_media.data.attributes.alt} width={1650} height={700} itemprop="image" />
                    </div>
                </div>

                <div className='aboutus_desc flex gap-[65px] items-center' role="article" itemscope itemtype="http://schema.org/Article">
                    <div className='w-[50%]'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.about_second_media.data.attributes.url} alt={data.about_second_media.data.attributes.alt} width={1150} height={500} itemprop="image" />
                    </div>

                    <div className='w-[50%]' itemprop="articleBody">
                        <div className='text-[20px]' dangerouslySetInnerHTML={about_second_description()} />

                        <div className='flex gap-[60px] mt-[30px]' role="contentinfo">
                            {stats.map((stat, index) => <StatItem key={ index } stat={ stat } index={ index } />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
