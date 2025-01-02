import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languageModalVisiblity: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    languageModalVisiblityAction(state) {
      state.languageModalVisiblity = !state.languageModalVisiblity;
    },
  },
});

export const { languageModalVisiblityAction } = modalSlice.actions;
export default modalSlice.reducer;
