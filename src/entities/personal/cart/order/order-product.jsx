import Image from 'next/image'

export default function OrderProduct({product, productsItems}) {
    return (
        <div className='flex gap-[35px] flex-row justify-between py-[25px]'>
            <div className='w-[50%]'>
                {productsItems.data.map(item => {
                    if(item.id == product.id) {
                        return (
                            <Image key={item.id} alt='Изображение товара' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.image.data[0].attributes.url} width='241' height='137' className='w-[100%] h-[170px] rounded-[7px]' />
                        )                   
                    }
                })}
            </div>
            <div>
                <h4 className='font-semibold w-[100%] text-[22px]'>{product.name}</h4>
                {/* <p className='text-[#8d8d8d] text-[21px]'>1 шт.</p> */}
                <p className='font-semibold text-[25px] text-[#505050]'>{product.price} ₽</p>
            </div>
        </div>
    )
}