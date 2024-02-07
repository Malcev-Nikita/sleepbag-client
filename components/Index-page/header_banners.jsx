'use client'

import Image from 'next/image'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function HeaderBanners(data) {
    return (
        <section className='h-[100vh] pt-0'>
            <Swiper className='h-[100%] header_banner' modules={[Pagination]} navigation pagination={{ clickable: true }}>
                {data.data.map(item => {
                    return (
                        <SwiperSlide>
                            <Image className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url} width={1920} height={1080}/>

                            <div className='container z-5 absolute top-[35%] translate-[-50%] translate-x-[-50%] left-[50%]'>
                                <h3 className='text-[#F4F4F4] text-[55px] uppercase w-[80%] font-bold'>{item.attributes.header}</h3>

                                <p className='text-[#F4F4F4] text-[20px] font-semibold mt-[18px]'>{item.attributes.description}</p>
                            </div>
                        </SwiperSlide>        
                    )
                })}
            </Swiper>
        </section>
    )
}
