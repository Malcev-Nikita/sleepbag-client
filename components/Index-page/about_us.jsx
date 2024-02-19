import Image from 'next/image'
import { markdown } from 'markdown'


export default function AboutUs({data, stats}) {
    const about_header = () => ({__html: data.about_header})
    const about_first_description = () => ({__html: markdown.toHTML(data.about_first_description)})
    const about_second_description = () => ({__html: markdown.toHTML(data.about_second_description)})

    return (
        <section id='aboutus' className='section_aboutus relative'>
            <div className='section_header container m-auto pb-[100px]'>
                <div className='header_line'></div>
                <h1 dangerouslySetInnerHTML={about_header()} />
            </div>

            <div className='aboutus_parts container m-auto'>
                <div className='aboutus_part1'>
                    <div className='part1_left w-[50%]' dangerouslySetInnerHTML={about_first_description()} />

                    <div className='part1_right w-[50%]'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.about_first_media.data.attributes.url} alt='' width={1650} height={700}/>
                    </div>
                </div>

                <div className='aboutus_part2'>
                    <div className='part2_left w-[50%]'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data.about_second_media.data.attributes.url} alt='' width={1150} height={500}/>
                    </div>

                    <div className='part2_right w-[50%]'>
                        <div className='part2_right_text' dangerouslySetInnerHTML={about_second_description()} />

                        <div className='ratings'>
                            {stats.map(stat => (
                                <div className='rating'>
                                    <p><span>{stat.attributes.Count}{stat.attributes.Postfix_Name}</span></p>
                                    <p>{stat.attributes.Name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}
