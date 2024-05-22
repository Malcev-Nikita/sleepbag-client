'use client'

import { useState } from "react"

export default function CatalogFilter() {
    const regex = /\d/

    const [length, setLength] = useState("0мм")
    const [width, setWidth] = useState("0мм")

    function lengthCheck(e) {
        if(e.target.value[e.target.value.length - 1].match(regex)) {
            setLength(length.substring(0, length.length - 2) + e.target.value[e.target.value.length - 1] + "мм")
        }
        else if(e.target.value.length < length.length) {
            setLength(length.substring(0, length.length - 3) +"мм")
        }
    }

    function widthCheck(e) {
        if(e.target.value[e.target.value.length - 1].match(regex)) {
            setWidth(width.substring(0, width.length - 2) + e.target.value[e.target.value.length - 1] + "мм")
        }
        else if(e.target.value.length < width.length) {
            setWidth(width.substring(0, width.length - 3) +"мм")
        }
    }

    return (
        <div className='catalog_filters mb-[40px]'>
            <div className="flex flex-col">
                <label htmlFor="input_length" className="text-[20px] font-medium mb-[10px]">Введите длину багажного автомобиля</label>
                <input onChange={e => lengthCheck(e)} id="input_length" className='catalog_filter' placeholder='Введите длину багажного автомобиля' />
            </div>

            <div className="flex flex-col">
                <label htmlFor="input_length" className="text-[20px] font-medium mb-[10px]">Введите ширину багажного автомобиля</label>
                <input className='catalog_filter' onChange={e => widthCheck(e)} placeholder='Введите ширину багажного автомобиля' />
            </div>
        </div>
    )
}