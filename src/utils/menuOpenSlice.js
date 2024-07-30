import { createSlice } from "@reduxjs/toolkit";

const menuOpenSlice = createSlice({
    name: "menuOpen",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
    },
})

export const { toggleMenuOpen } = menuOpenSlice.actions;
export default menuOpenSlice.reducer;