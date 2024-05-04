'use client'

import Image from 'next/image'
import Link from 'next/link';
import { Navigation, Pagination, A11y, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';


export default function HeaderBanners({banners}) {
    return (
        <section className='section_header_banners h-[100vh] pt-0' aria-label="Header Banner Section">
            <Swiper className='h-[100%] w-screen' modules={[Navigation, Pagination, Virtual, A11y]} navigation pagination={{ clickable: true }} virtual>
                {banners.map((item, index) => (
                    <SwiperSlide key={index} role="banner" aria-label={`Banner ${index + 1}`} virtualIndex={index}>
                        {item.attributes.bg_photo.data.attributes.mime.includes('video') ? (
                            <video autoPlay loop muted loading="lazy" className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url}></video>
                        ) : (
                            <Image className='header_banner_bg  aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url} width={1920} height={1080} alt={item.attributes.header} />
                        )}

                        <div className='header_text container z-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-[#F4F4F4] text-[55px] uppercase w-[100%] font-bold font-[unbounded]' aria-label="Banner Header">{item.attributes.header}</h3>

                            <p className='text-[#F4F4F4] text-[20px] font-semibold mt-[18px]' aria-label="Banner Description">{item.attributes.description}</p>

                            <div className='header_banner_buttons mt-[90px] flex gap-[30px]' role="group" aria-label="Banner Buttons">
                                {item.attributes.text_first_button != null && item.attributes.link_first_button != null ? (
                                    <a className='px-[54px] py-[18px] text-[20px] font-semibold font-[Manrope] text-[#fff] bg-[#F97316] rounded-[6px]' href={item.attributes.link_first_button}>{item.attributes.text_first_button}</a>
                                ) : ('')}

                                {item.attributes.text_second_button != null && item.attributes.link_second_button ? (
                                    <a className='px-[54px] py-[18px] text-[20px] font-semibold font-[Manrope] rounded-[6px] border-[1px] text-[#fff] border-[#F97316]' href={item.attributes.link_second_button}>{item.attributes.text_second_button}</a>
                                ) : ('')}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
