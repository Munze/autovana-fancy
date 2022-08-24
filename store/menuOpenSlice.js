import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
}

const menuSlice = createSlice({
    name: 'menuOpen',
    initialState,
    reducers: { 
        changeVisible:(state) => {
        state.visible = !state.visible 
    },
    setVisible:(state) => {state.visible=true}
}})

export default menuSlice.reducer
export const { changeVisible, setVisible } = menuSlice.actions;