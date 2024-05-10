'use client'

import { useDispatch, useSelector } from "react-redux"
import { changeCart } from "@/store/cart/cart.slice"

export default function ButtonChangeCartSlug({product}) {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.items)
    const userJwt = useSelector(state => state.user.userJwt)
    const userData = useSelector(state => state.user.userData)
    
    if(cart && userJwt && userData) {
        if (cart.carts.some(item => item.id === product.data[0].id)) {
            return (
                <button onClick={() => dispatch(changeCart({product: product.data[0], jwt: userJwt, userId: userData.id}))} className='rounded-[10px] bg-[#f97316] w-[35%] h-[56px] text-[#fff] text-[18px] items-center justify-center tracking-widest'>
                    Убрать из корзину
                </button>
            );
        } 
        else {
            return (
                <button onClick={() => dispatch(changeCart({product: product.data[0], jwt: userJwt, userId: userData.id}))} className='rounded-[10px] bg-[#f97316] w-[35%] h-[56px] text-[#fff] text-[18px] items-center justify-center tracking-widest'>
                    Добавить в корзину
                </button>
            );
        }
    }
}