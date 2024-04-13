import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    indexPage: false,
}

export const preloaderSlice = createSlice({
  name: 'preloader',
  initialState,
  reducers: {
    indexPageLoad(state) {
      state.indexPage = true
    }
  },
})

export const { indexPageLoad } = preloaderSlice.actions

export default preloaderSlice.reducer