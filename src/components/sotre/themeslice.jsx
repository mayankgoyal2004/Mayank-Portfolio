import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isDark: localStorage.getItem('theme') ==='dark'||(!localStorage.getItem('theme') && window.matchMedia('( prefers-color-scheme:dark) ').matches)
};


const themeSlice =createSlice({
    name:'theme',
    initialState,
    reducers:{
toogleTheme:(state)=>{
    state.isDark =!state.isDark;
    localStorage.setItem('theme',state.isDark ?'dark':'light')
}
    }
})
export const {toogleTheme}=themeSlice.actions
export default themeSlice.reducer