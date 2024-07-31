import { configureStore } from "@reduxjs/toolkit";
import menuOpenSlice from "./menuOpenSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
    reducer : {
        menuOpen:menuOpenSlice,
        comments:commentSlice
    }
})

export default store;