'use client'

import { useSelector } from 'react-redux'
import CatalogItem from '@/entities/catalog/catalog-item';


export default function Catalog() {
    const productsItems = useSelector(state => state.products.items)
    const favoritesItems = useSelector(state => state.favorites.items)
    const category = useSelector(state => state.products.category)

    if(productsItems != null && favoritesItems != null) {
        return (
            <section id='catalog' className='section_catalog relative pt-0'>            
                <div className='catalog_main container m-auto'>
                    {productsItems.data.map(product => <CatalogItem key={ product.id } product={ product } category={ category } favoritesItems={ favoritesItems } /> )}
                </div>
            </section>
        )
    } 
    else if(productsItems != null) {
        return (
            <section id='catalog' className='section_catalog relative pt-0'>            
                <div className='catalog_main container m-auto'>
                    {productsItems.data.map(product => <CatalogItem key={ product.id } product={ product } category={ category } favoritesItems={ favoritesItems } /> )}
                </div>
            </section>
        )
    } 
}
