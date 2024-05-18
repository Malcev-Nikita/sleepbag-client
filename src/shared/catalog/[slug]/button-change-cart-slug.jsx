'use client'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCart } from "@/store/cart/cart.slice"

export default function ButtonChangeCartSlug({product}) {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart.items)
    const userJwt = useSelector(state => state.user.userJwt)
    const userData = useSelector(state => state.user.userData)
    
    const [isDisabled, setIsDisabled] = useState(false);

    function clickButton(productChange, addCart) {
        setIsDisabled(true);
        dispatch(changeCart({product: productChange, jwt: userJwt, userId: userData.id}))

        console.log(productChange)

        document.querySelector('.notication_catalog').innerHTML = `
            <div class="notification_catalog" id="notification_catalog_${productChange.id + (addCart ? "add" : "remove")}">
                <button onclick="document.querySelector('.notication_catalog').innerHTML = ''" class="notification_catalog_close">
                    <span class="close_line"></span>
                    <span class="close_line"></span>
                </button>

                <h3 class="notification_catalog_title">
                    ${productChange.attributes.name}
                </h3>

                <p class="notification_catalog_text">
                    ${addCart ? 'Товар добавлен в корзину' : 'Товар убран из корзины'}
                </p>
            </div>
        `

        setTimeout(() => {
            setIsDisabled(false);

            document.querySelector('.notication_catalog').innerHTML = ''
        }, 2000);
    }
    
    if(cart && userJwt && userData) {
        if (cart.carts.some(item => item.id === product.data[0].id)) {
            return (
                <button disabled={isDisabled} onClick={() => clickButton(product.data[0], false)} className='rounded-[10px] bg-[#f97316] w-[35%] h-[56px] text-[#fff] text-[18px] items-center justify-center tracking-widest'>
                    Убрать из корзины
                </button>
            );
        } 
        else {
            return (
                <button disabled={isDisabled} onClick={() => clickButton(product.data[0], true)} className='rounded-[10px] bg-[#f97316] w-[35%] h-[56px] text-[#fff] text-[18px] items-center justify-center tracking-widest'>
                    Добавить в корзину
                </button>
            );
        }
    }
}