'use client'

import Image from 'next/image'
import { Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Works() {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className='section_our_works'>
            <div className="container m-auto">
                <div className='section_header container m-auto'>
                    <div className='header_line'></div>
                    <h1>НАШИ РАБОТЫ</h1>
                </div>
                
                <div className="flex flex-wrap justify-between">
                    <Swiper className='h-[100%] header_banner' modules={[Pagination]} navigation pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <p>1</p>
                            {/* <Image className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url} width={1920} height={1080}/> */}
                        </SwiperSlide>        
                    </Swiper>

                    <Swiper className='h-[100%] header_banner' modules={[Pagination]} navigation pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <p>1</p>
                            {/* <Image className='header_banner_bg aspect-video w-[100%] h-[100%] object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes.bg_photo.data.attributes.url} width={1920} height={1080}/> */}
                        </SwiperSlide>        
                    </Swiper>
                </div>
                
                <a href='#'>
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