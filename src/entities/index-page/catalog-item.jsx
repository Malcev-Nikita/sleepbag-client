import Link from 'next/link';
import Image from 'next/image'
import { LikeCatalog } from '@/features/like';

export default function CatalogItem({ product, favoritesItems }) {
    if(favoritesItems != null) {
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
    }
    else {
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
}