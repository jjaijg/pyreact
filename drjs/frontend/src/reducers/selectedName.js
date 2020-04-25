import { createSlice } from "@reduxjs/toolkit";

// selectedName Slice

const selectedNameSlice = createSlice({
  name: "selectedName",
  initialState: {},
  reducers: {
    setSelectName: (state, { payload }) => {
      Object.assign(state, payload);
    },
    clearSelected: (state) => ({}),
  },
});

export const {
  setSelectName: selectNameActionCreator,
  clearSelected: clearNamesActionCreator,
} = selectedNameSlice.actions;

export default selectedNameSlice.reducer;
