import { createSlice } from "@reduxjs/toolkit";

type counterType = {
    value:number
}

const initialState:counterType = {
    value:0
}

export const counterState = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementValue: (state) => {
            state.value += 1;
        },
        decrementValue: (state) => {
            state.value -= 1;
        }
    }
})

export const {incrementValue, decrementValue} = counterState.actions;

export default counterState.reducer;