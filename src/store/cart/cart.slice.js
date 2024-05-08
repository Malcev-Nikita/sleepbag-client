import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductCart } from '@/services/cart';

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
  totalPrice: 0,
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

      addProductCart(action.payload.jwt, action.payload.userId, state.items.carts)
    },
    cleanCart: (state, action) => {
      state.items.carts = null

      addProductCart(action.payload.jwt, action.payload.userId, null)
    },
    getPrice: (state) => {
      let price = 0;

      if(state.items) {
        state.items.carts.forEach(element => {
          price += element.price
        });
      }

      state.totalPrice = price
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

export const { changeCart, cleanCart, getPrice } = cartSlice.actions

export default cartSlice.reducer