import Image from 'next/image'

export default function TeaserItem({ teaser, index }) {
    return (
        <article key={index} className='w-[48%] flex gap-[40px] items-center' role="listitem">
            <div className='flex justify-center items-center bg-[#e6e9ec] p-[20px] rounded-[20px] w-[110px] h-[110px]'>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + teaser.attributes.image.data.attributes.url} alt='Иконка причины' width={70} height={70} />
            </div>

            <div className='w-[75%]'>
                <p className='text-[20px] font-[Manrope] font-semibold text-[#F97316]'>{teaser.attributes.header}</p>
                <p className='text-[18px] font-[Manrope] font-normal'>{teaser.attributes.description}</p>
            </div>
        </article>
    )
}