'use client'

import { markdown } from 'markdown'
import Image from 'next/image'
import React, { useState } from 'react';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function WorksSlider({ work, index }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const description = {__html: markdown.toHTML(work.attributes.description)}

    return (
        <article key={index} className="prod_object w-[49%] flex justify-between gap-[12px]" role="listitem">
            <div className="w-[100%]">
                <Swiper className='w-[100%]' modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    {work.attributes.gallery.data.map((image, idx) => (
                        <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                            <Image className='aspect-[16/11] object-cover w-[100%]' alt='Главное изображение товара' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-[15px]">
                    <h4 className='font-semibold text-[24px] font-[Manrope]'>{work.attributes.header}</h4>
                    <div className='text-[14px] font-normal font-[Manrope]' dangerouslySetInnerHTML={description} />
                </div>
            </div>

            <div className='w-[70px]'>
                <Swiper className='productions__thumbswiper' modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper} slidesPerView={5}>
                    {work.attributes.gallery.data.map((image, idx) => (
                        <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                            <Image className='aspect-[16/13] object-cover w-[100%]' alt='Второстепенное изображение товара' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </article>
    )
}