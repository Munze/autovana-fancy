import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
}

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: { 
        changeVisible:(state) => {
        state.visible = !state.visible 
    },
}})

export default searchBarSlice.reducer
export const { changeVisible } = searchBarSlice.actions;