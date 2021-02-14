import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: "",
  reducers: {
    addProduct: (state, action) => {
      return [action.payload];
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// actions
export const { addProduct, removeProduct } = productSlice.actions;

// selector
export const selectProduct = (state) => state.product;

export default productSlice.reducer;
