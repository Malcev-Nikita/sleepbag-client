'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import { LikeCatalog } from '../header/like'


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
                    {productsItems.data.map(product => {
                       if(favoritesItems.error) {
                            return (
                                <div className='catalog_object' key={product.id}>
                                    <div className='object_photo'>
                                        <Image className='catalog_main_photo w-[100%] h-[100%] aspect-[16/11] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={100} height={100} />
                                    </div>

                                    <div className='object_desc'>
                                        <h3>{product.attributes.name}</h3>
                                        <p>В наличии - {product.attributes.count} шт.</p>
                                        <p className='object_desc_text'>{product.attributes.description}</p>

                                        <div className='object_price'>
                                            <p>{product.attributes.price}</p>
                                            <p>₽</p>
                                        </div>

                                        <div className='object_buttons'>
                                            <Link className='object_button1' href={product.attributes.slug + '/'}>Подробнее</Link>
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
                                        <Image className='catalog_main_photo w-[100%] h-[100%] aspect-[16/11] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={100} height={100} />

                                        {favoritesItems.favorites.length == 0 ? (<LikeCatalog id={product.id} active='false' />) : ('')}

                                        {favoritesItems.favorites.map(favorite => {
                                            if(product.id == favorite.id) {
                                                return (<LikeCatalog id={product.id} key={product.id} active='true' />)
                                            }
                                            else {
                                                return (<LikeCatalog id={product.id} key={product.id} active='false' />)
                                            }
                                        })}
                                    </div>

                                    <div className='object_desc'>
                                        <h3>{product.attributes.name}</h3>
                                        <p>В наличии - {product.attributes.count} шт.</p>
                                        <p className='object_desc_text'>{product.attributes.description}</p>

                                        <div className='object_price'>
                                            <p>{product.attributes.price}</p>
                                            <p>₽</p>
                                        </div>

                                        <div className='object_buttons'>
                                            <Link className='object_button1' href={`/catalog/${product.attributes.slug}`}>Подробнее</Link>
                                            <button className='object_button2'>Добавить в корзину</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
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
                    {productsItems.data.map(product => {
                        return (
                            <div className='catalog_object' key={product.id}>
                                <div className='object_photo'>
                                    <Image className='catalog_main_photo w-[100%] h-[100%] aspect-[16/11] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} alt='Изображение товара' width={100} height={100} />
                                </div>

                                <div className='object_desc'>
                                    <h3>{product.attributes.name}</h3>
                                    <p>В наличии - {product.attributes.count} шт.</p>
                                    <p className='object_desc_text'>{product.attributes.description}</p>

                                    <div className='object_price'>
                                        <p>{product.attributes.price}</p>
                                        <p>₽</p>
                                    </div>

                                    <div className='object_buttons'>
                                        <Link className='object_button1' href={`/catalog/${product.attributes.slug}`}>Подробнее</Link>
                                        <button className='object_button2'>Добавить в корзину</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
