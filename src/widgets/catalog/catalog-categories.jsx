'use client'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { categoryChange } from "@/store/products/products.slice"
import anime from "animejs";


export default function Categories({data}) {
    const dispatch = useDispatch();
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const updateScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
            updateScreenSize();
            window.addEventListener('resize', updateScreenSize);
            return () => window.removeEventListener('resize', updateScreenSize);
        }
    }, []);

    function toggleCategory(e) {
        setOpenCategory(!openCategory)

        if(openCategory) {
            anime({
                targets: '.catalog_categories_mobile',
                height: '68px'
            })

            anime({
                targets: '.catalog_categories_arrow',
                rotate: 180
            })
        }
        else {
            anime({
                targets: '.catalog_categories_mobile',
                height: 68 + data.length * 46 + 36
            }) 

            anime({
                targets: '.catalog_categories_arrow',
                rotate: 0
            })
        }
    }

    const renderCategory = (category) => {
        const svg = () => ({ __html: category.attributes.svg });

        if(isLargeScreen) {
            return (
                <button className="category_button catalog_category" key={category.id} data-category-slug={category.attributes.slug} onClick={() => dispatch(categoryChange(category.attributes.slug))}>
                    <div dangerouslySetInnerHTML={svg()} />
                    <p>{category.attributes.name}</p>
                </button>
            );
        }
        else {
            return (
                <div className="catalog_category_mobile">
                    <hr className="bg-[#B9B9B9] h-[2px]" />

                    <button className="category_button w-[100%] flex items-center gap-[8px] py-[15px]" key={category.id} data-category-slug={category.attributes.slug} onClick={() => dispatch(categoryChange(category.attributes.slug))}>
                        <div className="" dangerouslySetInnerHTML={svg()} />
                        <p className="text-[12px] font-semibold">{category.attributes.name}</p>
                    </button>
                </div>
            );
        }
    };

    return (
        <div className={`${isLargeScreen ? 'catalog_categories pb-[43px]' : 'catalog_categories_mobile overflow-hidden h-[68px] w-[100%] flex flex-col bg-[#E6E9EC] rounded-[7px] relative ml-[2.5%] mb-[43px] mt-[12px] px-[25px] py-[26px]'}`}>
            {isLargeScreen ? null : (
                <div className="w-[100%] pb-[26px] flex justify-between items-center" onClick={e => toggleCategory(e)}>
                    <div className="flex gap-[15px] items-center">
                        <div className="">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.14686C1 3.14958 1 2.65094 1.16725 2.25935C1.3768 1.76871 1.7667 1.37779 2.25605 1.16769C2.64662 1 3.14395 1 4.13862 1C5.13329 1 5.63063 1 6.0212 1.16769C6.51055 1.37779 6.90044 1.76871 7.10999 2.25935C7.27724 2.65094 7.27724 3.14958 7.27724 4.14686C7.27724 5.14414 7.27724 5.64278 7.10999 6.03438C6.90044 6.52501 6.51055 6.91593 6.0212 7.12603C5.63063 7.29372 5.13329 7.29372 4.13862 7.29372C3.14395 7.29372 2.64662 7.29372 2.25605 7.12603C1.7667 6.91593 1.3768 6.52501 1.16725 6.03438C1 5.64278 1 5.14414 1 4.14686Z" stroke="#1A1A1A" stroke-width="1.5"/>
                                <path d="M9.72275 4.14686C9.72275 3.14958 9.72275 2.65094 9.89001 2.25935C10.0996 1.76871 10.4895 1.37779 10.9788 1.16769C11.3694 1 11.8667 1 12.8614 1C13.856 1 14.3534 1 14.744 1.16769C15.2333 1.37779 15.6232 1.76871 15.8327 2.25935C16 2.65094 16 3.14958 16 4.14686C16 5.14414 16 5.64278 15.8327 6.03438C15.6232 6.52501 15.2333 6.91593 14.744 7.12603C14.3534 7.29372 13.856 7.29372 12.8614 7.29372C11.8667 7.29372 11.3694 7.29372 10.9788 7.12603C10.4895 6.91593 10.0996 6.52501 9.89001 6.03438C9.72275 5.64278 9.72275 5.14414 9.72275 4.14686Z" stroke="#1A1A1A" stroke-width="1.5"/>
                                <path d="M9.72275 12.8531C9.72275 11.8559 9.72275 11.3572 9.89001 10.9656C10.0996 10.475 10.4895 10.0841 10.9788 9.87396C11.3694 9.70627 11.8667 9.70627 12.8614 9.70627C13.856 9.70627 14.3534 9.70627 14.744 9.87396C15.2333 10.0841 15.6232 10.475 15.8327 10.9656C16 11.3572 16 11.8559 16 12.8531C16 13.8504 16 14.3491 15.8327 14.7407C15.6232 15.2313 15.2333 15.6222 14.744 15.8323C14.3534 16 13.856 16 12.8614 16C11.8667 16 11.3694 16 10.9788 15.8323C10.4895 15.6222 10.0996 15.2313 9.89001 14.7407C9.72275 14.3491 9.72275 13.8504 9.72275 12.8531Z" stroke="#1A1A1A" stroke-width="1.5"/>
                                <path d="M1 12.8531C1 11.8559 1 11.3572 1.16725 10.9656C1.3768 10.475 1.7667 10.0841 2.25605 9.87396C2.64662 9.70627 3.14395 9.70627 4.13862 9.70627C5.13329 9.70627 5.63063 9.70627 6.0212 9.87396C6.51055 10.0841 6.90044 10.475 7.10999 10.9656C7.27724 11.3572 7.27724 11.8559 7.27724 12.8531C7.27724 13.8504 7.27724 14.3491 7.10999 14.7407C6.90044 15.2313 6.51055 15.6222 6.0212 15.8323C5.63063 16 5.13329 16 4.13862 16C3.14395 16 2.64662 16 2.25605 15.8323C1.7667 15.6222 1.3768 15.2313 1.16725 14.7407C1 14.3491 1 13.8504 1 12.8531Z" stroke="#1A1A1A" stroke-width="1.5"/>
                            </svg>
                        </div>

                        <p className="text-[14px] font-medium font-[Unbounded]">Выбор категории</p>
                    </div>

                    <div className="catalog_categories_arrow">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99997 0.581545C5.7849 0.581545 5.56987 0.663661 5.4059 0.827549L0.24617 5.98732C-0.0820566 6.31555 -0.0820566 6.84771 0.24617 7.17581C0.574263 7.5039 1.10632 7.5039 1.43457 7.17581L5.99997 2.61015L10.5654 7.17565C10.8936 7.50374 11.4256 7.50374 11.7537 7.17565C12.0821 6.84755 12.0821 6.31539 11.7537 5.98717L6.59404 0.827389C6.42999 0.663475 6.21495 0.581545 5.99997 0.581545Z" fill="#1A1A1A"/>
                        </svg>
                    </div>
                </div>
            )}
            {data.map(category => renderCategory(category))}
        </div>
    );
}