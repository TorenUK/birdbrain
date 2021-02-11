import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      return [...action.payload];
    },
    removeFromBasket: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    emptyBasket: (state) => {
      return (state = []);
    },
  },
});

// actions
export const {
  addToBasket,
  removeFromBasket,
  emptyBasket,
} = basketSlice.actions;

// selector
export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
