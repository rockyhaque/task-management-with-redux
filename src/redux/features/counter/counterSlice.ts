import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) =>{
            // state.count += 1
            state.count += action.payload
        },
        decrement: (state) =>{
            state.count -= 1
        }
    }
});

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer;