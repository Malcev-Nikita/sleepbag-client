'use client'

import Image from 'next/image'
import Link from 'next/link';
import { A11y, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';

export default function OrderSwiper({order, productsItems}) {
    return (
        <Swiper className='h-[100%] w-[100%]' slidesPerView={2} spaceBetween={10} modules={[Virtual, A11y]} virtual>
            {order.attributes.products.data.map((orderProduct, index) => {
                return productsItems.data.map((product, productIndex) => {
                    if (orderProduct.id === product.id) {
                        return (
                            <SwiperSlide key={productIndex} aria-label={`Banner ${index + 1}`} virtualIndex={index}>
                                <Link href={'/catalog/' + product.attributes.slug}>
                                    <Image alt='Изображение товара' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + product.attributes.image.data[0].attributes.url} width={141} height={107} className='w-[100%] aspect-[16/9] object-cover rounded-[5px] order_image' />
                                </Link>
                            </SwiperSlide>
                        );
                    }
                    return null;
                });
            })}
        </Swiper>
    );
}