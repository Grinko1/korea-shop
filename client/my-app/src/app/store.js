import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import productsReducer from '../features/products/productSlice'
import favoriteReducer from '../features/favorite/favoriteSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReducer
  },
});
