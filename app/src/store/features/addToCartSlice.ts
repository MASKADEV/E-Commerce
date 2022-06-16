import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

export const addToCartSlice = createSlice({
    name : 'addtocart',
    initialState,
    reducers : {
        addItem : <T = any>(state : any, action: PayloadAction<T>) => {
            state.value.push(action.payload);
        },
        deleteItem : (state : any, action: PayloadAction<any>) => {
            state.value.splice(action.payload, 1); 
        },
        totalPrice : () => {}
    }
})

export const {addItem} =addToCartSlice.actions;
export const {deleteItem} =addToCartSlice.actions;
export default addToCartSlice.reducer;