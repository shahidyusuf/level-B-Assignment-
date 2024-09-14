import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counteSlice";


const store = configureStore({
    reducer: {
        counterReducer,
    }
})
export default store;