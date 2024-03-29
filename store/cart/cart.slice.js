import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavorite } from '@/services/favorites';


export const getCart = createAsyncThunk(
  'user/cart',
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart: (state, action) => {
      const product = action.payload.product
      const isExist = state.items.carts.some(p => p.id === product.id)

      if(isExist) {
        state.items.carts = state.items.carts.filter(p => p.id !== product.id)
      }
      else {
        state.items.carts.push(product)
      }

      addFavorite(action.payload.jwt, action.payload.userId, state.items.carts)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

export const { changeFavorites } = cartSlice.actions

export default cartSlice.reducer