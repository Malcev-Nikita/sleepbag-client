import Link from 'next/link';
import WorksSlider from '@/entities/index-page/works-slider';
import { indexPageLoad } from '@/store/preloader/preloader.slice';


export default function Works({data, works}) {
    const works_header = () => ({__html: data.works_header})
    const works_button = () => ({__html: data.works_button})

    return (
        <section id='production' className='container m-auto' aria-label="Our Works Section" role="main">
            <div className='flex section_header items-center gap-[25px]' role="banner">
                <div className='header_line w-[5vw] h-[1px] bg-[#F97316]' />
                <h2 className='font-bold font-[unbounded] text-[42px]' dangerouslySetInnerHTML={works_header()} />
                <div className='header_line_mobile hidden'/>
            </div>

            <div className="flex production_main flex-wrap justify-between mt-[100px]" role="list">
                {works.map((work, index) => <WorksSlider key={ indexPageLoad } work={ work } index={ index } /> )}
            </div>

            <div className="flex items-center flex-col w-[100%]">
                <Link className='down_button' href='#' role="link">
                    <button>
                        <span className='text-[#F97316] text-[14px] font-semibold font-[Manrope]' dangerouslySetInnerHTML={works_button()} />

                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#F97316" strokeLinecap="square" />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    )
}