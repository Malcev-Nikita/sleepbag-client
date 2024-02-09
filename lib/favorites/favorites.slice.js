'use client'

import { createSlice } from "@reduxjs/toolkit";
import { getFavorites } from "@/services/favorites";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getFavorites('jwt'),
    reducers: {
        toggleFavorites: (state, action) => {
            const product = action.payload
            const isExist = state.some(p => p.id === product.id)

            if(isExist) {
                state = state.filter(p => p.id !== product.id)
            }
            else {
                state.push(product)
            }
        }
    }
})

export const {actions, favoriteReducer} = favoritesSlice