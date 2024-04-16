import Image from 'next/image'
import Link from 'next/link';
import { LikeCatalog } from '@/features/like';

export default function ProductAuth({ favoritesItems, product }) {
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