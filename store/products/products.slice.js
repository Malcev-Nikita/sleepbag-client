import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk(
  'products/catalog',
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
);


const initialState = {
  items: null,
  loading: 'idle',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
})

// export const {  } = productsSlice.actions

export default productsSlice.reducer