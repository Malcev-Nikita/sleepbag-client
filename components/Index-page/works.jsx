'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { markdown } from 'markdown'


export default function Works({data, works}) {
    const works_header = () => ({__html: data.works_header})
    const works_button = () => ({__html: data.works_button})

    return (
        <section id='production' className='container m-auto' aria-label="Our Works Section" role="main">
            <div className='flex section_header items-center gap-[25px]' role="banner">
                <div className='w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' dangerouslySetInnerHTML={works_header()} />
            </div>

            <div className="flex production_main flex-wrap justify-between mt-[100px]" role="list">
                {works.map((work, index) => {
                    function description() {
                        return { __html: markdown.toHTML(work.attributes.description) };
                    }

                    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                                    <div className='text-[14px] font-normal font-[Manrope]' dangerouslySetInnerHTML={description()} />
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
                    );
                })}
            </div>

            <div className="flex items-center flex-col w-[100%]">
                <a className='py-[17px] px-[35px] rounded-[7px] border-[#F97316] border-[1px] inline-flex gap-[6px] items-center mt-[100px]' href='#' role="link">
                    <span className='text-[#F97316] text-[14px] font-semibold font-[Manrope]' dangerouslySetInnerHTML={works_button()} />

                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" strokeLinecap="square" />
                    </svg>
                </a>
            </div>
        </section>
    )
}