'use client'

import { useState } from "react"

export default function CatalogFilter() {
    const regex = /\d/

    const [length, setLength] = useState("0мм")
    const [width, setWidth] = useState("0мм")

    function lengthCheck(e) {
        if(e.target.value.length <= 2) {
            setLength("0мм")
        }
        else {
            setLength(length.substring(1, length.length))
        }

        if(e.target.value[e.target.value.length - 1].match(regex)) {
            setLength(length.substring(0, length.length - 2) + e.target.value[e.target.value.length - 1] + "мм")
        }
        else if(e.target.value.length < length.length) {
            setLength(length.substring(0, length.length - 3) +"мм")
        }
    }

    return (
        <div className='catalog_filters mb-[70px]'>
            <input onChange={e => lengthCheck(e)} value={length} className='catalog_filter' placeholder='Введите длину багажного автомобиля' />
            <input className='catalog_filter' value={width} placeholder='Введите ширину багажного автомобиля' />
        </div>
    )
}