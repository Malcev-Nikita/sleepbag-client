'use client'

import { useSelector } from "react-redux"
import { LikeCatalogBlack } from "@/features/like"

export default function ButtonLike({ product }) {
    const favoritesItems = useSelector(state => state.favorites.items)
    const isProductLiked = favoritesItems.favorites.some(favorite => favorite.id === product.id);

    return (
        <LikeCatalogBlack 
            id={product.id} 
            key={product.id} 
            active={isProductLiked ? 'true' : 'false'} 
        />
    )
}