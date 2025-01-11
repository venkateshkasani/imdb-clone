import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
        incrementValue: (state:any) => {
            state.value += 1;
        },
        decrementValue: (state:any) => {
            state.value -= 1;
        }
    }
})

export const {incrementValue, decrementValue} = counterState.actions;

export default counterState.reducer;