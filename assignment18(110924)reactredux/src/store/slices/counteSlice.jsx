import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.counter = ++state.counter;
            // console.log("add counter value");
        },
        minusCounter: (state, action) => {
            state.counter = state.counter >0 ? --state.counter  : 0;

            // console.log("Minus counter value");
        },
},
});
const {actions, reducer} = counterSlice;
export const {addCounter, minusCounter} = actions;
export default reducer;