'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { markdown } from 'markdown'


export default function Works({works}) {
    console.log(works)
    return (
        <section className='section_our_works'>
            <div className="container m-auto">
                <div className='section_header container m-auto'>
                    <div className='header_line'></div>
                    <h1>НАШИ РАБОТЫ</h1>
                </div>
                
                <div className="relative works_items">
                    {works.map(work => {
                        function description() {
                            return {__html: markdown.toHTML(work.attributes.description)};
                        }

                        const [thumbsSwiper, setThumbsSwiper] = useState(null);

                        return (
                            <div className="item">
                                <div className="top_content">
                                    <Swiper className='w-[100%]' modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                                        {work.attributes.gallery.data.map(image => (
                                            <SwiperSlide className='w-[100%]'>
                                                <Image className='aspect-video object-cover w-40' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080}/>
                                            </SwiperSlide>  
                                        ))} 
                                    </Swiper>  

                                    <div className="content">
                                        <h4>{work.attributes.header}</h4>

                                        <div className='markdown' dangerouslySetInnerHTML={description()}/>
                                    </div>
                                </div> 
                                
                                <div className='small_photos'>
                                    <Swiper className='h-[100%]' modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper} slidesPerView={5}>
                                        {work.attributes.gallery.data.map(image => (
                                            <SwiperSlide className='w-[100%]'>
                                                <Image className='aspect-video object-cover w-40' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.attributes.url} width={1920} height={1080}/>
                                            </SwiperSlide>  
                                        ))}
                                    </Swiper>
                                </div>

                            </div>
                        )
                    })}
                </div>
                
                <a className='down_button' href='#'>
                    <button className='m-auto'>
                        Смотреть все работы 

                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#95F35A" stroke-linecap="square"/>
                        </svg>
                    </button>
                </a>
            </div>
        </section>
    )
}