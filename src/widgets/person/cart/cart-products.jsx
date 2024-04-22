'use client'

import { useSelector } from "react-redux"
import CartProduct from "@/entities/personal/cart/cart-product"

export default function CartProducts() {
    const cartItems = useSelector(state => state.cart.items)
    const productsItems = useSelector(state => state.products.items)

    if(cartItems && productsItems) {
        return (
            <div className='flex flex-col gap-[20px]'>  
                {cartItems.carts.map(product => (
                    <CartProduct key={product.id} product={product} productsItems={productsItems} />
                ))}
            </div>
        )
    }
}