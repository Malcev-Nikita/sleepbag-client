import HeaderBanners from '@/widgets/index-page/header-banners'
import AboutUs from '@/widgets/index-page/about-us'
import Catalog from '@/widgets/index-page/catalog'
import Reasons from '@/widgets/index-page/reasons'
import Works from '@/widgets/index-page/works'
import AboutProduction from '@/widgets/index-page/about-production'


export default function MainPage({ data, stats, teasers, banners, works, productions }) {
    return (
        <main className="relative font-[Manrope] bg-[#fff]">
            <HeaderBanners banners={banners.data}/>
            
            <AboutUs data={data.data.attributes} stats={stats.data} />

            <Catalog data={data.data.attributes} />

            <Reasons data={data.data.attributes} teasers={teasers.data} />

            <Works data={data.data.attributes} works={works.data}/>

            <AboutProduction data={data.data.attributes} productions={productions.data} />
        </main>
    )
}