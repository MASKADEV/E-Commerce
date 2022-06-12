import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from '../state_managment/addToCartSlice';


export const store = configureStore({
  reducer: {
    addToCart : addToCartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
