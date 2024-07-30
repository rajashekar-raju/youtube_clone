import { configureStore } from "@reduxjs/toolkit";
import menuOpenSlice from "./menuOpenSlice";

const store = configureStore({
    reducer : {
        menuOpen:menuOpenSlice
    }
})

export default store;