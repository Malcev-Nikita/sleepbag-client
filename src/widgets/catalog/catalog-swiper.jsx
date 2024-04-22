'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


export default function CatalogSwiper({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <article className="w-[100%] flex justify-between gap-[12px]" role="listitem">
            <div className='w-[13%]'>
                <Swiper className='productions__thumbswiper' modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper} slidesPerView={5}>
                    {images.map(image => (
                        <SwiperSlide key={image.id} className='w-[100%] rounded-[7px] overflow-hidden'>
                            <Image className='aspect-[16/13] object-cover w-[100%]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080} alt='1' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            <div className="w-[100%]">
                <Swiper className='w-[100%]' modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    {images.map(image => (
                        <SwiperSlide key={image.id} className='w-[100%] rounded-[7px] overflow-hidden'>
                            <Image className='aspect-[16/11] object-cover w-[100%]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080} alt='1' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </article>
    )
}