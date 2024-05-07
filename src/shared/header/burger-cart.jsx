'use client'

import { useDispatch, useSelector } from "react-redux"
import { changeCart } from "@/store/cart/cart.slice"

export default function BurgerCart({product}) {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.items)
    const userJwt = useSelector(state => state.user.userJwt)
    const userData = useSelector(state => state.user.userData)
    

    if(cart && userJwt && userData) {
        if (cart.carts.some(item => item.id === product.id)) {
            return (
                ''
            );
        } 
        else {
            return (
                <button className="favorite_svgs" onClick={() => dispatch(changeCart({product: product, jwt: userJwt, userId: userData.id}))}>
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                            <path d="M4.88871 3.39066H19.066C20.5665 3.39066 21.6769 4.82085 21.3395 6.31887L20.0831 11.8971C19.8388 12.9818 18.8962 13.7502 17.8097 13.7502H9.07804C7.99156 13.7502 7.04887 12.9818 6.80456 11.8971L4.88871 3.39066ZM4.88871 3.39066L4.64276 2.63466C4.32518 1.65846 3.43356 1 2.42927 1H1M18.0002 6.10007H15.4502" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M10.4144 16.7856C10.4144 17.4562 9.88749 17.9999 9.23748 17.9999C8.58748 17.9999 8.06055 17.4562 8.06055 16.7856C8.06055 16.115 8.58748 15.5713 9.23748 15.5713C9.88749 15.5713 10.4144 16.115 10.4144 16.7856Z" fill="#F4F4F4"/>
                            <path d="M18.2607 16.7856C18.2607 17.4562 17.7337 17.9999 17.0837 17.9999C16.4337 17.9999 15.9068 17.4562 15.9068 16.7856C15.9068 16.115 16.4337 15.5713 17.0837 15.5713C17.7337 15.5713 18.2607 16.115 18.2607 16.7856Z" fill="#F4F4F4"/>
                        </g>
                    </svg>
                </button>
            );
        }
    }
}