import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './features/addToCartSlice';
import showSearchReducer from './features/searchSlice';


export const store = configureStore({
  reducer: {
    addToCart : addToCartReducer,
    showSearch : showSearchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
