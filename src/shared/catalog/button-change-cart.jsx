'use client'

import { useDispatch, useSelector } from "react-redux"
import { changeCart } from "@/store/cart/cart.slice"

export default function ButtonChangeCart({product}) {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.items)

    const jwt = localStorage.getItem('userJWT')
    const userId = JSON.parse(localStorage.getItem('userData')).id
    
    if(cart) {
        if (cart.carts.some(item => item.id === product.id)) {
            return (
                <button className='object_button2' onClick={() => dispatch(changeCart({product: product, jwt: jwt, userId: userId}))}>
                    Убрать из корзины
                </button>
            );
        } 
        else {
            return (
                <button className='object_button2' onClick={() => dispatch(changeCart({product: product, jwt: jwt, userId: userId}))}>
                    Добавить в корзину
                </button>
            );
        }
    }
}