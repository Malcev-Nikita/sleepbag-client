'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import { LikeCatalog } from '@/components/header/like'


export default function Catalog({categoryes, productIndex}) {
    const productsItems = useSelector(state => state.products.items)
    const favoritesItems = useSelector(state => state.favorites.items)

    if(productsItems != null && favoritesItems != null) {
        return (
            <section id='catalog' className='section_catalog relative pt-0'>            
                <div className='catalog_main container m-auto'>
                    {productsItems.data.map(product => {
                        let count = 0;

                        return (
                            categoryes.map(category => {
                                if(product.attributes.categories.data.find(element => element.attributes.slug == category.attributes.slug) && count <= 0 && productIndex.id != product.id) {
                                    count++;
                                    
                                    if(favoritesItems.error) {
                                        return (
                                            <div className='catalog_object rounded-[10px]' key={product.id}>
                                                <div className='object_photo'>
                                                    <Image className='rounded-[10px]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={364} height={320}/>
                                                </div>
                
                                                <div className='object_desc'>
                                                    <h1 className='font-[700] text-[16px] mb-[10px]'>{product.attributes.name}</h1>
                                                    <p className='text-[20px]'>В наличии - {product.attributes.count} шт.</p>
                                                    <p className='object_desc_text text-[20px]'>{product.attributes.description}</p>
                
                                                    <div className='object_price'>
                                                        <p>{product.attributes.price}</p>
                                                        <p>₽</p>
                                                    </div>
                
                                                    <div className='object_buttons'>
                                                        <Link className='object_button1' href={'/catalog/' + product.attributes.slug}>Подробнее</Link>
                                                        <button className='object_button2'>Добавить в корзину</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className='catalog_object' key={product.id}>
                                                <div className='object_photo'>
                                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={364} height={320}/>
                
                                                    {favoritesItems.favorites.length == 0 ? (<LikeCatalog id={product.id} active='false' />) : ('')}
                                                    {
                                                        favoritesItems.favorites.map(favorite => {
                                                            if(product.id == favorite.id) {
                                                                return (<LikeCatalog id={product.id} key={product.id} active='true' />)
                                                            }
                                                            else {
                                                                return (<LikeCatalog id={product.id} key={product.id} active='false' />)
                                                            }
                                                        })
                                                    }
                                                </div>
                
                                                <div className='object_desc'>
                                                    <h1>{product.attributes.name}</h1>
                                                    <p>В наличии - {product.attributes.count} шт.</p>
                                                    <p className='object_desc_text'>{product.attributes.description}</p>
                
                                                    <div className='object_price'>
                                                        <p>{product.attributes.price}</p>
                                                        <p>₽</p>
                                                    </div>
                
                                                    <div className='object_buttons'>
                                                        <Link className='object_button1' href={'/catalog/' + product.attributes.slug}>Подробнее</Link>
                                                        <button className='object_button2'>Добавить в корзину</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            })
                        )
                    })}
                </div>
          </section>
        )
    } 
}
