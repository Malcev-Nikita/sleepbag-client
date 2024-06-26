import Image from 'next/image'
import Catalog from '@/widgets/catalog/catalog'
import Categories from '@/widgets/catalog/catalog-categories'
import { getCatalogPageContent, getCategoriesProducts } from '@/services/catalog/page'
import CatalogFilter from '@/widgets/catalog/catalog-filter'

export default async function CatalogPage() {
    const data = await getCatalogPageContent()
    const categoriesProducts = await getCategoriesProducts()

    const header = () => ({__html: data.data.attributes.header})
    const description = () => ({__html: data.data.attributes.description})
    const categories_header = () => ({__html: data.data.attributes.categories_header})
    const categories_button = () => ({__html: data.data.attributes.categories_button})

    return (
        <main className="font-[Manrope]">        
            <header className='catalog_header'>
                
                <Image className='catalog_header_img aspect-video w-[100%] h-[100vh] object-cover' src='/bg/catalog_bg_img.png' width={1920} height={1080} alt="bg_catalog" />
                <Image className='catalog_header_img_mobile hidden aspect-video w-[100%] h-[65vh] object-cover' src='/bg/catalog_mobile.png' width={1920} height={1080} alt="bg_catalog" />
                
                <div className='section_header_catalog container z-5 absolute translate-[-50%] translate-x-[-50%] left-[50%]'>
                    <h1 dangerouslySetInnerHTML={header()} />
                    <div className='header_line hidden my-[10px]'></div>
                    <p dangerouslySetInnerHTML={description()} />
                </div>

            </header>

            <div className='container m-auto'>
                <section className='choose_category'>
                
                <div className='section_header flex items-center'>
                    <div className='header_line'></div>
                    <h2 dangerouslySetInnerHTML={categories_header()} />
                    <div className='header_line_mobile hidden'></div>
                </div>
                
                <Categories data={categoriesProducts.data} />
                    
                {/* <div className='catalog_view_all justify-end pb-[70px]'>
                    <button>
                        <span className='text-[#f97316]' dangerouslySetInnerHTML={categories_button()} />

                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" stroke-linecap="square"/>
                        </svg>
                    </button>
                </div> */}

                    {/* <div className='section_header flex items-center mb-[40px]'>
                        <div className='header_line'></div>
                        <h2>ФИЛЬТРЫ</h2>
                        <div className='header_line_mobile hidden'></div>
                    </div>
                        
                    <CatalogFilter /> */}
                </section>
            </div>
            
            <Catalog />
        </main>
    )
}