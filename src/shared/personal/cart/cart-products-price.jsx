'use client'

import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

export default function CartProductsPrice() {
    const cartItems = useSelector(state => state.cart.items)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        let newPrice = 0

        if(cartItems) {
            cartItems.carts.map(product => {
                newPrice = newPrice + product.price
            })
        }

        setPrice(newPrice)
    }, [cartItems])

    return (
        <span>{ price } ₽</span>
    )
}