'use client'

import { LikeCatalog } from "@/features/like"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

export default function CatalogSlugLike({ productId }) {
    const [userJWT, setUserJWT] = useState(null)
    const favoritesItems = useSelector(state => state.favorites.items)

    useEffect(() => {
        setUserJWT(localStorage.getItem('userJWT'))
    })

    if(userJWT) {
        {favoritesItems.favorites.map(favorite => {
            if(productId == favorite.id) {
                return (<LikeCatalog id={productId} key={productId} active='true' />)
            }
            else {
                return (<LikeCatalog id={productId} key={productId} active='false' />)
            }
        })}
    }
}