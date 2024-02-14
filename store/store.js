import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites/favorites.slice";
import productsSlice from "./products/products.slice";

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        products: productsSlice,
    },
})