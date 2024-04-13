import TeaserItem from '@/entities/index-page/teser-item'

export default function Reasons({data, teasers}) {
    const teasers_header = () => ({__html: data.teasers_header})

    return (
        <section className='container m-auto relative' role="region" aria-label="Reasons Section">
            <header className='flex section_header items-center gap-[25px]' role="banner">
                <div className='header_line w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' dangerouslySetInnerHTML={teasers_header()} />
                <div className='header_line_mobile hidden'/>
            </header>

            <div className='flex main_reasons flex-wrap justify-between gap-y-[60px] mt-[100px]' role="list">
                {teasers.map((teaser, index) => <TeaserItem teaser={ teaser } index={ index } /> )}
            </div>
        </section>
    )
}
