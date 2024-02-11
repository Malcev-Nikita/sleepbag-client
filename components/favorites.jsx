'use client'

import Image from 'next/image'
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites } from '@/services/favorites';


export default function Favorites({favorite, products}) {
    const favoritesItems = useSelector(state => state.favorites.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavorites('jwt'))
    });

    console.log(favoritesItems)

    return (
        <div className="content px-[52px]">
            
        </div>
    );
}