import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return [...state, action.payload];
    },
  },
});

// actions
export const { addOrder } = orderSlice.actions;

// selector
export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
