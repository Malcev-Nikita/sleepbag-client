import Image from 'next/image'


export default function Reasons({data, teasers}) {
    const teasers_header = () => ({__html: data.teasers_header})

    return (
        <section className='container m-auto relative' role="region" aria-label="Reasons Section">
            <header className='flex section_header items-center gap-[25px]' role="banner">
                <div className='w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' dangerouslySetInnerHTML={teasers_header()} />
            </header>

            <div className='flex main_reasons flex-wrap justify-between gap-y-[60px] mt-[100px]' role="list">
                {teasers.map((teaser, index) => (
                    <article key={index} className='w-[48%] flex gap-[40px] items-center' role="listitem">
                        <div className='flex justify-center items-center bg-[#e6e9ec] p-[20px] rounded-[20px] w-[110px] h-[110px]'>
                            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + teaser.attributes.image.data.attributes.url} alt='Иконка причины' width={70} height={70} />
                        </div>

                        <div className='w-[75%]'>
                            <p className='text-[20px] font-[Manrope] font-semibold text-[#F97316]'>{teaser.attributes.header}</p>
                            <p className='text-[18px] font-[Manrope] font-normal'>{teaser.attributes.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
