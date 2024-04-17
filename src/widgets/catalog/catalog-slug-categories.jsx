'use client'

import { useSelector } from 'react-redux'
import CatalogSlugCategoriesItem from './catalog-slug-categories-item';

export default function CatalogSlugCategoties({ categories, productIndex }) {
    const productsItems = useSelector(state => state.products.items)
    const favoritesItems = useSelector(state => state.favorites.items)

    if(productsItems != null && favoritesItems != null) {
        return (
            <section id='catalog' className='section_catalog relative pt-0'>            
                <div className='catalog_main container m-auto'>
                    {productsItems.data.map(product => <CatalogSlugCategoriesItem key={ product.id } product={ product } productIndex={ productIndex } categories={ categories } favoritesItems={ favoritesItems } /> )}
                </div>
          </section>
        )
    } 
    else if(productsItems != null) {
        return (
            <section id='catalog' className='section_catalog relative pt-0'>            
                <div className='catalog_main container m-auto'>
                    {productsItems.data.map(product => <CatalogSlugCategoriesItem key={ productIndex } product={ product } productIndex={ productIndex } categories={ categories } favoritesItems={ favoritesItems } /> )}
                </div>
            </section>
        )
    } 
}