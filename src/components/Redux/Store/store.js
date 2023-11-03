import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Reducers/movieReducer.js";


export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})