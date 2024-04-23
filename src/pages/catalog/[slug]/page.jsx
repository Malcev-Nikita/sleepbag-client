import Link from 'next/link'
import CatalogSwiper from '@/widgets/catalog/catalog-swiper'
import CatalogSlugLike from '@/widgets/catalog/catalog-slug-like'
import CatalogSlugCategories from '@/widgets/catalog/catalog-slug-categories'
import CatalogSlugTabs from '@/widgets/catalog/catalog-slug-tabs'
import { getProductSlug } from '@/services/catalog/page'
import { markdown } from 'markdown'
import { Breadcrumbs, BreadcrumbsMobile} from '@/widgets/breadcrumbs';

export default async function CatalogPageSlug({ params }) {
    const productData = await getProductSlug(params.slug)

    const breadcrumbs = [
        { label: 'Главная', href: '/' },
        { label: 'Каталог', href: '/catalog' },
        { label: productData.data[0].attributes.name},
    ]

    let detailDescription = null
    let otherInfo = null

    if(productData.data[0].attributes.detail_description != null)
        detailDescription = {__html: markdown.toHTML(productData.data[0].attributes.detail_description)}
    
    if(productData.data[0].attributes.other_info != null)
        otherInfo = {__html: markdown.toHTML(productData.data[0].attributes.other_info)}

    return (
        <main className="container m-auto font-[Manrope]">
            <Breadcrumbs breadcrumbs={ breadcrumbs } />
            
            <section className='productData.data_card mobile_none flex gap-[35px] flex-row'>
                <div className='w-[50%]'>
                    <CatalogSwiper images={productData.data[0].attributes.image.data} />           
                </div>

                <div className='w-[50%]'>
                    <div className='flex flex-col gap-[20px] pb-[20px]'>
                        <h2 className='font-bold text-[30px]'>{productData.data[0].attributes.name}</h2>
                        <p className='text-[32px] font-[600] text-[#f97316]'>{productData.data[0].attributes.price}₽</p>
                        <p className='text-[20px] text-[#8d8d8d]'>{productData.data[0].attributes.description}</p>
                    </div>
                    {/* <div className='flex flex-col gap-[12px] pb-[20px]'>
                        <h3 className='text-[#000] text-[20px] font-[600] underline'>ЦВЕТ</h3>
                        <div className='catalog_object_buttons flex gap-[20px]'>
                            <button className='text-[20px] text-[#8d8d8d]'>Оранжевый</button>
                            <button className='text-[20px] text-[#8d8d8d]'>Зелёный</button>
                            <button className='text-[20px] text-[#8d8d8d]'>Синий</button>
                            <button className='text-[20px] text-[#8d8d8d]'>Чёрный</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] text-[20px] font-[600] pb-[20px]'>
                        <h3 className='text-[#000] underline'>РАЗМЕР</h3>
                        <div className='catalog_object_buttons flex gap-[20px]'>
                            <button className='text-[#8d8d8d] font-[400]'>XL</button>
                            <button className='text-[#8d8d8d] font-[400]'>L</button>
                            <button className='text-[#8d8d8d] font-[400]'>M</button>
                            <button className='text-[#8d8d8d] font-[400]'>S</button>
                        </div>
                    </div> */}
                    <div className='flex flex-col pb-[20px] gap-[12px]'>
                        <p>{productData.data[0].attributes.count} шт. в наличии</p>
                        <div className='flex flex-row gap-[6px]'>
                            <button className='bg-[#e6e9ec] items-center justify-center aspect-square w-[7%]'>-</button>
                            <input className='border-solid border-[1px] border-[#e6e9ec] w-[13%] text-center' value={1}></input>
                            <button className='bg-[#e6e9ec] items-center justify-center aspect-square w-[7%]'>+</button>
                        </div>
                    </div>
                    <div className='productData.data_buttons flex flex-row items-center pb-[20px] gap-[15px]'>
                        <button className='rounded-[10px] bg-[#f97316] w-[35%] h-[56px] text-[#fff] text-[18px] items-center justify-center tracking-widest'>Добавить в корзину</button>
                        <button className='rounded-[10px] border-solid border-[#000] border-[1px] tracking-widest w-[35%] h-[56px] text-[18px] items-center justify-center'>Купить сейчас</button>

                        <CatalogSlugLike productId={ productData.data[0].id } />
                    </div>
                    
                    <p className='category_text text-[#8d8d8d]'>Категория: 
                        {productData.data[0].attributes.categories.data.map(category => 
                            " " + category.attributes.name + "."
                        )}
                    </p>
                </div>
            </section>

            <CatalogSlugTabs detailDescription={ detailDescription } otherInfo={ otherInfo } />

            <section className='mobile_none'>
                <h3 className='text-[20px] pb-[40px] font-[600]'>СМОТРИТЕ ТАКЖЕ</h3>
                
                <CatalogSlugCategories categories={productData.data[0].attributes.categories.data} productIndex={productData.data[0]} />
            </section>
            
            {/* Мобилка */}
            <section className='productData.data_card mobile_block flex flex-col'>
                <div>
                    <productSwiper />           
                </div>

                <div className=''>
                    <div className='flex flex-col gap-[20px] pb-[20px]'>
                        <h2 className='font-bold text-[30px]'>{productData.data[0].attributes.name}</h2>
                        <p className='text-[32px] font-[600] text-[#f97316]'>{productData.data[0].attributes.price}₽</p>
                        <p className='text-[20px] text-[#8d8d8d]'>{productData.data[0].attributes.description}</p>
                    </div>
                    <div className='flex flex-col pb-[20px] gap-[12px]'>
                        <p className='text-[20px]'>{productData.data[0].attributes.count} шт. в наличии</p>
                        
                        <div className='flex flex-row gap-[6px]'>
                            <button className='bg-[#e6e9ec] text-[35px] items-center justify-center aspect-square w-[12%]'>-</button>
                            <input className='border-solid border-[1px] text-[25px] border-[#e6e9ec] w-[23%] text-center' value={1}></input>
                            <button className='bg-[#e6e9ec] text-[35px] items-center justify-center aspect-square w-[12%]'>+</button>
                        </div>
                    </div>
                    <div className='productData.data_buttons flex flex-col items-center pb-[20px] gap-[15px]'>
                        <button className='rounded-[10px] bg-[#f97316] w-[100%] h-[66px] text-[#fff] text-[20px] font-[500] items-center justify-center tracking-widest'>Добавить в корзину</button>
                        <button className='rounded-[10px] border-solid border-[#000] border-[1px] tracking-widest w-[100%] h-[66px] font-[500] text-[20px] items-center justify-center'>Купить сейчас</button>

                        <CatalogSlugLike productId={ productData.data[0].id } />
                    </div>
                </div>
            </section>
            
            <section className='mobile_block hidden'>
                <hr className='bg-[#8d8d8d] my-[30px] opacity-30 h-[2px]'/>
                <h3 className='font-[500] text-[27px] my-[20px]'>Описание</h3>
                <p className='text-[20px]'>Текст</p>
                <hr className='bg-[#8d8d8d] my-[30px] opacity-30 h-[2px]'/>
                <h3 className='font-[500] text-[27px] my-[20px]'>Дополнительная информация</h3>
                <p className='text-[20px]'>Текст</p>
                <hr className='bg-[#8d8d8d] my-[30px] opacity-30 h-[2px]'/>
            </section>
            
            <section className='similar mobile_block'>
                <h3 className='text-[20px] pb-[40px] font-[600]'>СМОТРИТЕ ТАКЖЕ</h3>

                <CatalogSlugCategories categories={productData.data[0].attributes.categories.data} productIndex={productData.data[0]} />
            </section>

        </main>
    )
}