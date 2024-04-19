'use client'

import anime from "animejs"
import { useDispatch, useSelector } from "react-redux"
import { changeFavorites } from "@/store/favorites/favorites.slice"

function LikeClick() {
    Array.from(document.querySelectorAll('.cart')).forEach(cart => {
        if(cart.classList.contains('active')) {
            cart.classList.remove('active')
    
            anime({
                targets: 'main',
                filter: "blur(0px)",
                duration: 500,
                easing: 'spring(1, 100, 20, 10)'
            })
    
            anime({
                targets: '.cart',
                top: '-100vh',
                duration: 500,
                easing: 'spring(1, 100, 20, 10)'
            })
        }
        else {
            cart.classList.add('active')
    
            anime({
                targets: 'main',
                filter: "blur(4px)",
                duration: 500,
                easing: 'spring(1, 100, 20, 10)'
            })
            
            if(window.innerWidth > 768) {
                anime({
                    targets: '.cart.active',
                    top: '10vh',
                    duration: 700,
                    easing: 'spring(1, 100, 15, 5)'
                })
            }
            else {
                anime({
                    targets: '.cart.active',
                    top: '0vh',
                    duration: 700,
                    easing: 'spring(1, 100, 15, 5)'
                })
            }
        }
    }) 
}

export function Like() {
    return (
        <button onClick={() => LikeClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="white" stroke-width="1.5"/>
            </svg>
        </button>
    )
}

export function LikeClose() {
    return (
        <button className="close" onClick={() => LikeClick()}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
        </button>
    )
}


export function AddFavoritesItem(id, productsItems, dispatch) {
    let productPush = null
    let productClone = {};

    productsItems.data.map(product => {
        if(product.id == id) productPush = product 
    });

    if(productPush != null) {
        for (const [key, value] of Object.entries(productPush.attributes)) {
            productClone[key] = value
        }
        productClone.id = productPush.id

        dispatch(changeFavorites({
            product: productClone,
            jwt: localStorage.getItem('userJWT'),
            userId: JSON.parse(localStorage.getItem('userData')).id
        }))
    }
}

export function LikeCatalog({id, active}) {
    const productsItems = useSelector(state => state.products.items)
    const dispatch = useDispatch()

    return (
        <button className="favorite_like" active={active} id={id} onClick={() => AddFavoritesItem(id, productsItems, dispatch)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M1 8.625C1 4.04167 4.64583 3 6.72917 3C9.33333 3 11.4167 5.08333 12.4583 6.64583C13.5 5.08333 15.5833 3 18.1875 3C20.2708 3 23.9167 4.04167 23.9167 8.625C23.9167 15.5 12.4583 21.75 12.4583 21.75C12.4583 21.75 1 15.5 1 8.625Z" stroke="white" stroke-width="1.5"/>
            </svg>
        </button>
    )
}