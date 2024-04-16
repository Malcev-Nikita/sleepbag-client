import ProductionItem from '@/entities/index-page/production-item'

export default function AboutProduction({data, productions}) {
    const production_header = () => ({__html: data.production_header})
    const production_media = () => ({__html: data.production_media})

    return (
        <section className='container m-auto' id='section_aboutproduction' itemscope itemtype="http://schema.org/Product">
            <header className='flex section_header items-center gap-[25px]' role="banner">
                <div className='header_line w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' itemprop="name" dangerouslySetInnerHTML={production_header()} />
                <div className='header_line_mobile hidden'/>
            </header>

            <article className="flex flex-col gap-[50px]" role="article">
                {productions.map((production, index) => <ProductionItem key={ index } production={ production } index={ index } /> )}
            </article>

            <footer className="h-[550px] aboutus_footer rounded-[10px] overflow-hidden p-0" role="contentinfo" itemprop="manufacturer" dangerouslySetInnerHTML={production_media()} />
        </section>
    )
}
