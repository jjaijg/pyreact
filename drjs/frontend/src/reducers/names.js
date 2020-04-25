import { createSlice } from "@reduxjs/toolkit";

// names slice
const namesSlice = createSlice({
  name: "names",
  initialState: [],
  reducers: {
    create: (state, { payload }) => {
      state.push(payload);
    },
    get: (state, { payload }) => {
      state.push(...payload);
    },
    edit: (state, { payload }) => {
      console.log("payload : ", payload);
      const editName = state.find(({ id }) => id === payload.id);
      Object.assign(editName, payload);
    },
    remove: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});
export const {
  create: createNameActionCreator,
  get: getNamesActionCreator,
  edit: editNameActionCreator,
  remove: deleteNameActionCreator,
} = namesSlice.actions;
export default namesSlice.reducer;
