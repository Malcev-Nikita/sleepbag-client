'use client'

import { useDispatch } from "react-redux"
import { categoryChange } from "@/store/products/products.slice"


export default function Categories({data}) {
    const dispatch = useDispatch()

    return (
        <div className='catalog_categories pb-[43px]'>
            {data.map(categorie => {
                let svg = () => ({__html: categorie.attributes.svg})

                return (
                    <button key={categorie.id} data-category-slug={categorie.attributes.slug} onClick={() => dispatch(categoryChange(categorie.attributes.slug))} className='catalog_category'>
                        <div dangerouslySetInnerHTML={svg()} />
                        <p>{categorie.attributes.name}</p>
                    </button>
                )
            })}
        </div>
    )
}