'use client'

import { useSelector } from "react-redux"

export default function ButtonOrder() {
    const cart = useSelector(state => state.cart.items)

    if(cart) {
        return cart.carts.length ? (
            <div className='flex justify-end'>
                <a href='/personal/cart/order' className='mt-[16px] rounded bg-[#202020] w-[30%] h-[55px] text-[18px] text-[#fff] gap-[15px] flex flex-row items-center justify-center'>
                    Перейти к оформлению заказа
                    <svg width="18" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.30864 9.625L14 5.625M14 5.625L9.30864 1.625M14 5.625L0.518518 5.625" stroke="#fff" stroke-linecap="square"/>
                    </svg>
                </a>
            </div>
        ) : null
    }
}