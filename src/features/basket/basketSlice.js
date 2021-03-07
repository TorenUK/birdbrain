import { createSlice } from "@reduxjs/toolkit";

// utils
import { saveToLocalStorage } from "../../utils/local.storage";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      saveToLocalStorage([...state, action.payload]);

      return [...state, action.payload];
    },
    removeFromBasket: (state, action) => {
      saveToLocalStorage(state.filter((item) => item.id !== action.payload.id));

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
