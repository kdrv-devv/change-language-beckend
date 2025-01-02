import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem("lang") || "eng"
}


const languageSlice = createSlice({
    name:"Lang",
    initialState,
    reducers:{
        getLang(state , {payload}){
            state.lang = payload
            localStorage.setItem("lang", state.lang)
        }
    },

})

export const {getLang} = languageSlice.actions
export default languageSlice.reducer