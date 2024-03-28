'use client'

import { useState } from "react"

export default function ButtonsCount({product}) {
    const [count, setCount] = useState(1)

    function buttonMinus(){
        if(count > 1) {
            setCount(count - 1)
        }
    }

    function buttonPlus(){
        if(count < product.count) {
            setCount(count + 1)
        }
    }

    return (
        <div className='flex flex-row justify-center gap-[10px]'>
            <div onClick={() => buttonMinus()} className='rounded bg-[#e6e9ec] w-[32px] h-[32px] text-[25px] flex justify-center items-center cursor-pointer'>-</div>
            <p className='text-[25px]'>{count}</p>
            <div onClick={() => buttonPlus()} className='rounded bg-[#e6e9ec] w-[32px] h-[32px] text-[25px] flex justify-center items-center cursor-pointer'>+</div>
        </div>
    )
}