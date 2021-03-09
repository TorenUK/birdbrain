import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterStuff: (state, action) => (state = action.payload),
  },
});

export const { filterStuff } = filterSlice.actions;

export const selectFilter = (state) => state.filter;

export default filterSlice.reducer;
