'use client'

import { LikeCatalogBlack } from "@/features/like"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

export default function CatalogSlugLike({ productId }) {    
    const [userJWT, setUserJWT] = useState(null)
    const favoritesItems = useSelector(state => state.favorites.items)

    useEffect(() => {
        if(localStorage.getItem('userJWT')) {
            setUserJWT(localStorage.getItem('userJWT'))
        }
    })

    let likeCatalog = null;

    if (userJWT && favoritesItems) {
        favoritesItems.favorites.forEach(favorite => {
            if (productId === favorite.id) {
                likeCatalog = <LikeCatalogBlack id={productId} key={productId} active='true' />
            }
        })

        if (!likeCatalog) {
            likeCatalog = <LikeCatalogBlack id={productId} key={productId} active='false' />
        }
    }

    return likeCatalog;
}