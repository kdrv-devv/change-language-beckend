import { configureStore } from "@reduxjs/toolkit";
import  languageSlice from './language-slice'
import modalSlice from './modal-slice'
export const store = configureStore({
    reducer:{
        languageSlice,
        modalSlice
    }
})