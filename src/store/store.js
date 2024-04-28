import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites/favorites.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";
import userSlice from "./user/user.slice";

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        cart: cartSlice,
        products: productsSlice,
        user: userSlice,
    },
})