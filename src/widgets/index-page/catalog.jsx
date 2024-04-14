'use client'

import Link from 'next/link';
import { useSelector } from 'react-redux'
import CatalogItem from '@/entities/index-page/catalog-item';


export default function Catalog({data}) {
    const productsItems = useSelector(state => state.products.items)
    const favoritesItems = useSelector(state => state.favorites.items)
    
    const catalog_header = () => ({__html: data.catalog_header})
    const catalog_button = () => ({__html: data.catalog_button})


    if(productsItems != null && favoritesItems != null) {
        return (
            <section id='catalog' className='section_catalog container m-auto relative'>
                <div className='section_header flex items-center'>
                    <div className='header_line'></div>
                    <h2 dangerouslySetInnerHTML={catalog_header()} />
                    <div className='header_line_mobile hidden'/>
                </div>
            
                <div className='catalog_main'>
                    {productsItems.data.map(product => <CatalogItem key={ product.id } product={ product } favoritesItems={ favoritesItems } /> )}
                </div>
                <div className='flex justify-center'>
                    <Link href='/catalog' className='down_button'>
                        <button>
                            <span className='text-[#f97316]' dangerouslySetInnerHTML={catalog_button()} />

                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </Link>
                </div>
          </section>
        )
    }
    else if(productsItems != null) {
        return (
            <section id='catalog' className='section_catalog container m-auto relative'>
                <div className='section_header flex items-center'>
                    <div className='header_line'></div>
                    <h2 dangerouslySetInnerHTML={catalog_header()} />
                    <div className='header_line_mobile hidden'/>
                </div>
            
                <div className='catalog_main'>
                    {productsItems.data.map(product => <CatalogItem key={ product.id } product={ product } favoritesItems={ favoritesItems } /> )}
                </div>
                <div className='flex justify-center'>
                    <Link href='/catalog' className='down_button'>
                        <button>
                            <span className='text-[#f97316]' dangerouslySetInnerHTML={catalog_button()} />

                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </Link>
                </div>
          </section>
        )
    } 
}
