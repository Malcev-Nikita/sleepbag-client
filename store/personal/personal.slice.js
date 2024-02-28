import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const authUser = createAsyncThunk(
  'personal/auth',
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: "test@mail.ru",
        password: "123456"
      })
    });

    return response.json();
  }
);


const initialState = {
  user: null,
  jwt: null,
  loading: 'idle',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.jwt = action.payload.user
    })
  },
})

// export const {  } = productsSlice.actions

export default productsSlice.reducer