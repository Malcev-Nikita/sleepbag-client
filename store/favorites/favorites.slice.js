import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getFavorites } from '@/services/favorites'


const favoritesAdapter = createEntityAdapter();

const initialState = {
    items: favoritesAdapter.getInitialState({ loadingStatus: 'idle', error: null }), 
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites: (state, action) => {
        const product = action.payload
        const isExist = state.favorites.some(p => p.id === product.id)

        if(isExist) {
            state.favorites = state.favorites.filter(p => p.id !== product.id)
        }
        else {
            state.favorites.push(product)
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        // favoritesAdapter.addOne(state, action);
        state.items = action.payload
        state.loadingStatus = 'resolved';
        state.error = null;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
})

export const { changeFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer