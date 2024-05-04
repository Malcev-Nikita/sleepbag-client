import Image from "next/image";
import Link from "next/link";

export default function OrderItem({product, productsItems}) {
    return productsItems.data.map(productsItem => {
        if(productsItem.id == product.id) {
            return (
                <div className="flex text-[22px] flex-row justify-between my-[25px]">
                    <a href={'/catalog/' + productsItem.attributes.slug}>
                        <Image alt='Изображение товара' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + productsItem.attributes.image.data[0].attributes.url} width='141' height='107' className='w-[200px] h-[115px] object-cover rounded-[5px]' />
                    </a>    

                    <a href={'/catalog/' + productsItem.attributes.slug}>
                        <h3 className="font-[600]">{productsItem.attributes.name}</h3>
                    </a>           
                    <p className="font-[600] text-[#f97316]">{productsItem.attributes.price} ₽</p>
                </div>
            )
        }
    })

}