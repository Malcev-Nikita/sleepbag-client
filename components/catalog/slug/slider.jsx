'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { markdown } from 'markdown'


export default function productSwiper({catalog}) {

    return (
        <article className="w-[49%] flex justify-between gap-[12px]" role="listitem">
                    
            <div className='w-[70px]'>
                <Swiper className='productions__thumbswiper' modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper} slidesPerView={5}>
                    <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                        <Image className='aspect-[16/13] object-cover w-[100%]' src='/images/abprod.png' width={1920} height={1080} alt='1' />
                    </SwiperSlide>
                    <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                        <Image className='aspect-[16/13] object-cover w-[100%]' src='/images/abprod2.png' width={1920} height={1080} alt='2' />
                    </SwiperSlide>
                    <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                        <Image className='aspect-[16/13] object-cover w-[100%]' src='/images/abprod3.png' width={1920} height={1080} alt='3' />
                    </SwiperSlide>
                    <SwiperSlide key={idx} className='w-[100%] rounded-[7px] overflow-hidden'>
                        <Image className='aspect-[16/13] object-cover w-[100%]' src='/images/abprod.png' width={1920} height={1080} alt='4' />
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="w-[100%]">
                <Swiper className='w-[100%]' modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    <SwiperSlide className='w-[100%] rounded-[7px] overflow-hidden'>
                        <Image className='aspect-[16/11] object-cover w-[100%]' src='/images/abprod.png' width={1920} height={1080} alt='1' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </article>
    )
}