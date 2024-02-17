'use client'

import Image from 'next/image'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function HeaderBanners(data) {
    return (
        <div id="main">
            <section className='h-[100vh] pt-0'>
                <Swiper className='h-[100%] header_banner' modules={[Pagination]} navigation pagination={{ clickable: true }}>
                    {data.data.map(item => {
                        console.log(item.attributes.bg_photo.data.attributes)
                        return (
                            <SwiperSlide>
                                {item.attributes.bg_photo.data.attributes.mime.includes('video') ? (
                                    <video autoplay="autoplay" loop muted loading="lazy" className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url}></video>
                                ) : (
                                    <Image className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url} width={1920} height={1080}/>
                                )}

                                <div className='container z-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                    <h3 className='text-[#F4F4F4] text-[55px] uppercase w-[100%] font-bold'>{item.attributes.header}</h3>

                                    <p className='text-[#F4F4F4] text-[20px] font-semibold mt-[18px]'>{item.attributes.description}</p>

                                    <div className='banners_buttons container m-auto'>
                                        {item.attributes.text_first_button != null && item.attributes.link_first_button != null ? (
                                            <a className='banners_button1' href={item.attributes.link_first_button}>{item.attributes.text_first_button}</a>
                                        ): ( '' )}

                                        {item.attributes.text_second_button != null && item.attributes.link_second_button ? (
                                            <a className='banners_button2' href={item.attributes.link_second_button}>{item.attributes.text_second_button}</a>
                                        ): ( '' )}
                                    </div>
                                </div>
                            </SwiperSlide>        
                        )
                    })}
                </Swiper>
            </section>
        </div>
    )
}
