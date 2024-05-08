import Image from "next/image"
import ButtonsCount from "@/shared/personal/cart/buttons-count"
import ButtonLike from "@/shared/personal/cart/button-like"
import ButtonCart from "@/shared/personal/cart/button-cart"

export default function CartProduct({product, productsItems}) {
    return (
        <div id={'product-' + product.id} key={product.id} className='flex flex-row justify-end'>
            <label className='product_photo' for='product1'>
                <label for='product1' className='absolute'></label>

                <input id='product1' type="checkbox" className='option-input checkbox absolute hidden translate-y-[20px] translate-x-[10px]'/>

                {productsItems.data.map(productImage => {
                    if(productImage.id == product.id) {
                        return (
                            <Image alt='Изображение товара' key={product.id} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + productImage.attributes.image.data[0].attributes.url} width='241' height='137' className='w-[100%] h-[100%]'></Image>
                        )
                    }
                })}
            </label>

            <div className='prod_desc flex flex-col w-[41%] ml-[4%]'>
                <h4 className='font-semibold text-[20px]'>{product.name}</h4>
                <p className='text-[18px]'>В наличии - {product.count} шт.</p>
            </div>

            <div className='ml-[17%] flex flex-row justify-between w-[20%]'>
                <div className='font-semibold'>
                    <p className='text-[22px] text-[#8d8d8d]'>{product.price} ₽</p>
                </div>

                {/* <ButtonsCount product={product} /> */}

                <div className='flex flex-col'>
                    <p className='font-semibold text-[22px] pb-[28px] text-[#f97316]'>{product.price} ₽</p>
                    
                    <div className='flex flex-row gap-[22px] justify-end'>
                        <ButtonLike product={ product } />

                        <ButtonCart product={ product } />
                    </div>
                </div>
            </div>
        </div>
    )
}