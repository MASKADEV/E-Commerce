import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value : false
}

export const SearchSlice = createSlice({
    name : 'showSlice',
    initialState,
    reducers : {
        show : <T = any>(state : any, action: PayloadAction<T>) => {
            state.value = action.payload;
        },
    }
})

export const {show} =SearchSlice.actions;
export default SearchSlice.reducer;