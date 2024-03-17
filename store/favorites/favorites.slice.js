import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavorite } from '@/services/favorites';


export const getFavorites = createAsyncThunk(
  'user/favorites',
  async (jwt) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=*`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    });
      
    return response.json();
  }
);


const initialState = {
  items: null,
  loading: 'idle',
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
      const product = action.payload.product
      const isExist = state.items.favorites.some(p => p.id === product.id)

      if(isExist) {
        state.items.favorites = state.items.favorites.filter(p => p.id !== product.id)
      }
      else {
        state.items.favorites.push(product)
      }

      addFavorite(action.payload.jwt, action.payload.userId, state.items.favorites)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

export const { changeFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer